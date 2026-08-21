"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldAlert,
  Award,
  Trash2,
  CheckCircle2,
  XCircle,
  Search,
  RefreshCw,
  Lock,
  AlertTriangle,
  UserCheck,
  UserX,
  LogOut,
  KeyRound,
  Mail,
} from "lucide-react";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  limit,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { db, auth } from "../../lib/firebase";

// MASTER BADGE INDEX DEFINITIONS
const MASTER_BADGES = [
  { index: 0, id: "explorer", name: "Explorer", color: "text-blue-400" },
  { index: 1, id: "punctual", name: "Punctual Guy", color: "text-emerald-400" },
  { index: 2, id: "unstoppable", name: "Unstoppable", color: "text-amber-400" },
  { index: 3, id: "nbuer", name: "NBUer", color: "text-pink-400" },
  { index: 4, id: "our_beta", name: "Our βˢ", color: "text-purple-400" },
  { index: 5, id: "community_cap", name: "Community Cap", color: "text-indigo-400" },
  { index: 6, id: "aura_farmer", name: "Aura Farmer", color: "text-yellow-400" },
  { index: 7, id: "kind_soul", name: "Kind Soul", color: "text-red-400" },
  { index: 8, id: "dayones", name: "DayOnes", color: "text-cyan-400" },
];

export default function AdminDashboardPage() {
  // AUTH STATE
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginSubmitting, setLoginSubmitting] = useState(false);

  // DASHBOARD STATE
  const [activeTab, setActiveTab] = useState<"badges" | "reports" | "accounts">("badges");
  const [loading, setLoading] = useState(false);

  // BADGE TAB STATE
  const [searchUserQuery, setSearchUserQuery] = useState("");
  const [searchedUsers, setSearchedUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [userBadges, setUserBadges] = useState<boolean[]>([]);

  // REPORT TAB STATE
  const [reports, setReports] = useState<any[]>([]);

  // ACCOUNT TAB STATE
  const [deletedAccounts, setDeletedAccounts] = useState<any[]>([]);

  // ============================================================================
  // AUTHENTICATION & ROLE VERIFICATION
  // ============================================================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        // Verify admin role in Firestore 'user' or 'admins' collection
        try {
          const userDoc = await getDoc(doc(db, "user", user.uid));
          if (userDoc.exists() && userDoc.data()?.role === "admin") {
            setIsAdmin(true);
          } else {
            // Optional: fallback if you manage admins in a specific collection
            const adminDoc = await getDoc(doc(db, "admins", user.uid));
            setIsAdmin(adminDoc.exists());
          }
        } catch (e) {
          console.error("Admin verification error:", e);
          setIsAdmin(false);
        }
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginSubmitting(true);

    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      const userDoc = await getDoc(doc(db, "user", cred.user.uid));
      const adminDoc = await getDoc(doc(db, "admins", cred.user.uid));

      if ((userDoc.exists() && userDoc.data()?.role === "admin") || adminDoc.exists()) {
        setIsAdmin(true);
      } else {
        setLoginError("Access denied: Your account does not have admin permissions.");
        await signOut(auth);
      }
    } catch (err: any) {
      setLoginError(err.message || "Failed to sign in. Please verify your credentials.");
    } finally {
      setLoginSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setSelectedUser(null);
  };

  // Load Tab Data
  useEffect(() => {
    if (isAdmin) {
      if (activeTab === "reports") fetchReports();
      if (activeTab === "accounts") fetchDeletedAccounts();
    }
  }, [activeTab, isAdmin]);

  // ============================================================================
  // BADGE MANAGEMENT METHODS
  // ============================================================================
  const handleSearchUsers = async () => {
    if (!searchUserQuery.trim()) return;
    setLoading(true);
    try {
      const snap = await getDocs(collection(db, "user"));
      const queryLower = searchUserQuery.toLowerCase().trim();
      const filtered = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((u: any) => {
          const name = (u.name || "").toLowerCase();
          const username = (u.username || "").toLowerCase();
          return name.includes(queryLower) || username.includes(queryLower) || u.id === searchUserQuery.trim();
        });
      setSearchedUsers(filtered);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
    const rawBadges: any[] = Array.isArray(user.badges) ? user.badges : [];
    const bools = Array.from({ length: 9 }, (_, i) => rawBadges[i] === true);
    setUserBadges(bools);
  };

  const handleToggleBadge = async (index: number) => {
    if (!selectedUser) return;
    const updated = [...userBadges];
    updated[index] = !updated[index];
    setUserBadges(updated);

    try {
      const userRef = doc(db, "user", selectedUser.id);
      await updateDoc(userRef, { badges: updated });
      setSelectedUser({ ...selectedUser, badges: updated });
    } catch (err) {
      alert("Failed to update badge: " + err);
    }
  };

  // ============================================================================
  // REPORTED POSTS METHODS
  // ============================================================================
  const fetchReports = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(query(collection(db, "reports"), limit(50)));
      setReports(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDismissReport = async (reportId: string) => {
    try {
      await deleteDoc(doc(db, "reports", reportId));
      setReports(reports.filter((r) => r.id !== reportId));
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const handleDeleteReportedPost = async (reportId: string, postId: string) => {
    if (!confirm("Are you sure you want to permanently delete this post?")) return;
    try {
      if (postId) {
        await deleteDoc(doc(db, "posts", postId));
      }
      await deleteDoc(doc(db, "reports", reportId));
      setReports(reports.filter((r) => r.id !== reportId));
    } catch (err) {
      alert("Error: " + err);
    }
  };

  // ============================================================================
  // ACCOUNT AUDIT METHODS
  // ============================================================================
  const fetchDeletedAccounts = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(query(collection(db, "deleted_users"), limit(50)));
      setDeletedAccounts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  // ============================================================================
  // 1. AUTH LOADING STATE
  // ============================================================================
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0B1326] flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin" />
      </div>
    );
  }

  // ============================================================================
  // 2. LOGIN FORM (WHEN NOT AUTHENTICATED / NOT ADMIN)
  // ============================================================================
  if (!currentUser || !isAdmin) {
    return (
      <div className="min-h-screen bg-[#0B1326] text-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#171F33] rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-black">Admin Access Required</h1>
            <p className="text-xs text-white/50">
              Sign in with an authorized administrator account to manage NearByU.
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-white/70 mb-1.5 block">Admin Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="admin@nearbyu.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0B1326] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-white/70 mb-1.5 block">Password</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0B1326] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginSubmitting}
              className="mt-2 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loginSubmitting ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Sign In to Console
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ============================================================================
  // 3. AUTHENTICATED ADMIN DASHBOARD
  // ============================================================================
  return (
    <div className="min-h-screen bg-[#0B1326] text-white flex flex-col items-center">
      {/* TOP HEADER WITH LOGOUT */}
      <header className="w-full max-w-6xl px-6 py-5 flex items-center justify-between border-b border-white/10 sticky top-0 bg-[#0B1326]/95 backdrop-blur z-30">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">NearByU Admin Console</h1>
            <p className="text-xs text-white/50">{currentUser.email}</p>
          </div>
        </div>

        {/* TABS & LOGOUT */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 bg-[#12192E] p-1 rounded-2xl border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("badges")}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "badges" ? "bg-indigo-600 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Badge Allocator
            </button>
            <button
              onClick={() => setActiveTab("reports")}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "reports" ? "bg-indigo-600 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              Reports ({reports.length})
            </button>
            <button
              onClick={() => setActiveTab("accounts")}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeTab === "accounts" ? "bg-indigo-600 text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <UserX className="w-3.5 h-3.5" />
              Audit Logs
            </button>
          </div>

          <button
            onClick={handleLogout}
            title="Log Out"
            className="p-2.5 rounded-xl bg-[#171F33] hover:bg-red-600/20 text-white/60 hover:text-red-400 border border-white/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* DASHBOARD CONTENT (BADGES / REPORTS / ACCOUNTS) */}
      <main className="w-full max-w-6xl p-6">
        {activeTab === "badges" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* USER SEARCH */}
            <div className="bg-[#171F33] rounded-3xl p-5 border border-white/10 flex flex-col gap-4">
              <h2 className="text-sm font-bold text-white/80 flex items-center gap-2">
                <Search className="w-4 h-4 text-indigo-400" />
                Find User Profile
              </h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Username, Name, or UID..."
                  value={searchUserQuery}
                  onChange={(e) => setSearchUserQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearchUsers()}
                  className="w-full bg-[#0B1326] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={handleSearchUsers}
                  className="bg-indigo-600 px-4 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-colors"
                >
                  Search
                </button>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto max-h-[450px]">
                {searchedUsers.map((u) => (
                  <div
                    key={u.id}
                    onClick={() => handleSelectUser(u)}
                    className={`p-3 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                      selectedUser?.id === u.id
                        ? "bg-indigo-600/20 border-indigo-500"
                        : "bg-[#0B1326] border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold">{u.name || "User"}</p>
                      <p className="text-xs text-white/40">@{u.username || "handle"}</p>
                    </div>
                    <span className="text-[10px] text-indigo-400 font-mono bg-indigo-500/10 px-2 py-0.5 rounded-md">
                      {u.id.slice(0, 6)}...
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BADGE MATRIX */}
            <div className="md:col-span-2 bg-[#171F33] rounded-3xl p-6 border border-white/10 flex flex-col gap-5">
              {selectedUser ? (
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <h2 className="text-lg font-bold">{selectedUser.name}</h2>
                      <p className="text-xs text-white/50">UID: {selectedUser.id}</p>
                    </div>
                    <span className="text-xs text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
                      {userBadges.filter(Boolean).length} / 9 Active Badges
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {MASTER_BADGES.map((b) => {
                      const isAllocated = userBadges[b.index] === true;
                      return (
                        <div
                          key={b.id}
                          className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            isAllocated
                              ? "bg-[#0B1326] border-indigo-500/50"
                              : "bg-[#0B1326]/50 border-white/5 opacity-60"
                          }`}
                        >
                          <div>
                            <span className="text-[10px] font-mono text-white/40">Index #{b.index}</span>
                            <h3 className={`text-sm font-bold ${b.color}`}>{b.name}</h3>
                          </div>
                          <button
                            onClick={() => handleToggleBadge(b.index)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                              isAllocated
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/40"
                                : "bg-white/10 text-white/60 hover:bg-indigo-600 hover:text-white"
                            }`}
                          >
                            {isAllocated ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Granted
                              </>
                            ) : (
                              <>
                                <Lock className="w-3.5 h-3.5" />
                                Allocate
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-white/40 gap-2">
                  <UserCheck className="w-10 h-10 opacity-30" />
                  <p className="text-sm">Search and pick a user from the left pane to manage badges.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: REPORTS */}
        {activeTab === "reports" && (
          <div className="bg-[#171F33] rounded-3xl p-6 border border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold">Community Moderation Queue</h2>
              <button
                onClick={fetchReports}
                className="p-2 rounded-xl bg-[#0B1326] border border-white/10 text-white/70 hover:text-white"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {reports.length === 0 ? (
              <div className="py-16 text-center text-white/40 text-sm">
                No active flags or reports in queue.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {reports.map((r) => (
                  <div
                    key={r.id}
                    className="bg-[#0B1326] p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-red-500/20 text-red-400 font-bold px-2.5 py-0.5 rounded-full border border-red-500/30">
                          Flagged Post
                        </span>
                        <span className="text-xs text-white/40">Report ID: {r.id.slice(0, 8)}</span>
                      </div>
                      <p className="text-sm font-semibold mt-1.5">Target Post ID: {r.postId || "N/A"}</p>
                      <p className="text-xs text-white/50">Reported by UID: {r.reportedBy || "Anonymous"}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDismissReport(r.id)}
                        className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white/70 transition-colors"
                      >
                        Dismiss
                      </button>
                      <button
                        onClick={() => handleDeleteReportedPost(r.id, r.postId)}
                        className="px-3.5 py-2 rounded-xl bg-red-600/20 border border-red-500/40 hover:bg-red-600 text-xs font-bold text-red-300 hover:text-white transition-all flex items-center gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete Post
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: ACCOUNTS */}
        {activeTab === "accounts" && (
          <div className="bg-[#171F33] rounded-3xl p-6 border border-white/10 flex flex-col gap-4">
            <h2 className="text-base font-bold">Deleted & Deactivated Accounts History</h2>
            {deletedAccounts.length === 0 ? (
              <div className="py-16 text-center text-white/40 text-sm">
                No deleted accounts logged in the audit trail.
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {deletedAccounts.map((acc) => (
                  <div
                    key={acc.id}
                    className="bg-[#0B1326] p-4 rounded-2xl border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div>
                      <p className="font-bold text-white text-sm">{acc.username || "Unknown"}</p>
                      <p className="text-white/40">UID: {acc.id}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-red-400 font-bold bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">
                        Deactivated
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}