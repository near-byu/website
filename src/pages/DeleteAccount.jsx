import React, { useState } from "react";
import { auth, db } from "../lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import { AlertTriangle, CheckCircle2, Trash2, LogOut, KeyRound } from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [accountType, setAccountType] = useState(null); // 'user' or 'business'
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 1. Authenticate user to verify identity
  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setCurrentUser(user);

      // Check if user exists in 'user' or 'business' collection
      const userDocRef = doc(db, "user", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        setAccountType("user");
      } else {
        const businessDocRef = doc(db, "business", user.uid);
        const businessDocSnap = await getDoc(businessDocRef);
        if (businessDocSnap.exists()) {
          setAccountType("business");
        } else {
          setError("Account records not found in database.");
        }
      }
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  }

  // 2. Schedule Soft Delete for 14 days
  async function handleRequestDeletion(e) {
    e.preventDefault();
    if (!confirmed || !currentUser || !accountType) return;

    setLoading(true);
    setError("");

    try {
      const now = new Date();
      const fourteenDaysLater = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

      const targetDocRef = doc(db, accountType, currentUser.uid);

      await updateDoc(targetDocRef, {
        status: "pending_deletion",
        isActive: false,
        deletionRequestedAt: Timestamp.fromDate(now),
        scheduledPermanentDeleteAt: Timestamp.fromDate(fourteenDaysLater),
      });

      setSubmitted(true);
      await signOut(auth);
    } catch (err) {
      setError(err.message.replace("Firebase: ", ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] py-24 bg-background">
      <div className="container mx-auto max-w-[640px] text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-destructive/15 text-destructive">
          <Trash2 size={26} />
        </div>
        
        <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">ACCOUNT PORTAL</div>
        <h1 className="my-3 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Delete your <span className="gradient-text">NearByU account.</span>
        </h1>
        <p className="mx-auto mb-8 max-w-lg text-muted-foreground text-sm leading-relaxed">
          Request permanent deletion of your account. You will have a <b>14-day grace period</b> to change your mind before all data is permanently erased.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-xs text-destructive text-left">
            {error}
          </div>
        )}

        {submitted ? (
          <div className="rounded-2xl border border-green-500/30 bg-card p-8 text-left space-y-3">
            <CheckCircle2 size={34} className="text-green-400" />
            <h2 className="text-xl font-bold text-white">Account Deletion Scheduled</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your account has been scheduled for permanent deletion in <b>14 days</b>. Your profile is now hidden from other user.
            </p>
            <div className="rounded-xl bg-background/60 p-4 border border-border text-xs text-[#a8b0c4] mt-4">
              💡 <b>Changed your mind?</b> Simply log back into your NearByU mobile app or web portal within 14 days to reactivate your account automatically.
            </div>
          </div>
        ) : !currentUser ? (
          /* Step 1: Verification Form */
          <form className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-left shadow-2xl space-y-4" onSubmit={handleLogin}>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Step 1: Verify your identity</div>
            
            <label className="flex flex-col gap-1.5 text-xs font-bold text-white">
              Account Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="rounded-xl border border-border bg-background/50 p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-xs font-bold text-white">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="rounded-xl border border-border bg-background/50 p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-primary py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <KeyRound size={16} /> {loading ? "Verifying..." : "Verify & Continue"}
            </button>
          </form>
        ) : (
          /* Step 2: Final Confirmation */
          <form className="rounded-2xl border border-border bg-card p-6 sm:p-8 text-left shadow-2xl space-y-5" onSubmit={handleRequestDeletion}>
            <div className="flex justify-between items-center border-b border-border pb-3">
              <span className="text-xs text-muted-foreground">Logged in as: <b className="text-white">{currentUser.email}</b></span>
              <button type="button" onClick={() => signOut(auth).then(() => setCurrentUser(null))} className="text-xs text-primary hover:underline flex items-center gap-1">
                <LogOut size={12} /> Sign out
              </button>
            </div>

            <div className="flex gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-destructive">
              <AlertTriangle size={20} className="shrink-0 mt-0.5" />
              <div className="flex flex-col text-xs leading-relaxed">
                <b className="font-bold">14-Day Deletion Policy:</b>
                <span className="opacity-90">
                  Your posts, reels, and profile will become invisible immediately. If you do not sign in within 14 days, your database records and all uploaded content will be permanently removed.
                </span>
              </div>
            </div>

            <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="mt-0.5 rounded border-border accent-destructive"
              />
              <span>I confirm that I want to schedule my {accountType === "business" ? "business" : "user"} account for deletion.</span>
            </label>

            <button
              type="submit"
              disabled={!confirmed || loading}
              className="w-full rounded-xl bg-destructive py-3 text-sm font-extrabold text-white transition hover:opacity-90 disabled:opacity-40"
            >
              {loading ? "Processing..." : "Schedule Permanent Deletion"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}