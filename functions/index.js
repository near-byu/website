const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();
const auth = admin.auth();

exports.cleanupExpiredAccounts = functions.pubsub
    .schedule("every 24 hours")
    .timeZone("UTC")
    .onRun(async () => {
      const now = admin.firestore.Timestamp.now();

      for (const collectionName of ["users", "business", "user"]) {
        try {
          const snapshot = await db
              .collection(collectionName)
              .where("status", "==", "pending_deletion")
              .where("scheduledPermanentDeleteAt", "<=", now)
              .get();

          if (snapshot.empty) continue;

          for (const docSnap of snapshot.docs) {
            const accountId = docSnap.id;

            const fieldName = (collectionName === "business") ? "bid" : "uid";
            const postsSnapshot = await db
                .collection("posts")
                .where(fieldName, "==", accountId)
                .get();

            const altPostsSnapshot = await db
                .collection("posts")
                .where("userId", "==", accountId)
                .get();

            const batch = db.batch();

            postsSnapshot.forEach((post) => batch.delete(post.ref));
            altPostsSnapshot.forEach((post) => batch.delete(post.ref));

            batch.delete(docSnap.ref);
            await batch.commit();

            try {
              await auth.deleteUser(accountId);
            } catch (authErr) {
              functions.logger.warn(
                  `Auth user delete skipped for ${accountId}:`,
                  authErr.message,
              );
            }
          }
        } catch (err) {
          functions.logger.error(`Error cleaning up ${collectionName}:`, err);
        }
      }

      return null;
    });