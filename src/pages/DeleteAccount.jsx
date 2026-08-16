import { useState } from "react";
import React from "react";
import { AlertTriangle, CheckCircle2, Trash2 } from "lucide-react";

export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !confirmed) return;
    // Replace this with your real authenticated deletion endpoint.
    setSubmitted(true);
  }

  return (
    <div className="inner-page delete-page">
      <div className="container delete-container">
        <div className="delete-icon"><Trash2 size={26}/></div>
        <div className="section-kicker">ACCOUNT MANAGEMENT</div>
        <h1>Delete your <span>NearByU account.</span></h1>
        <p className="delete-intro">
          We're sorry to see you go. Use this page to request permanent deletion
          of your NearByU account and associated data.
        </p>

        {submitted ? (
          <div className="success-card">
            <CheckCircle2 size={34}/>
            <h2>Request received</h2>
            <p>
              Your deletion request has been recorded. Connect this form to your
              production backend before launch so the request actually deletes the account.
            </p>
          </div>
        ) : (
          <form className="delete-form" onSubmit={handleSubmit}>
            <label>
              Account email
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <div className="danger-note">
              <AlertTriangle size={19}/>
              <div><b>This action is permanent.</b><span>Account data, profile information and user content may be permanently removed according to your retention policy.</span></div>
            </div>

            <label className="checkbox-row">
              <input type="checkbox" checked={confirmed} onChange={e => setConfirmed(e.target.checked)} />
              <span>I understand that account deletion may be permanent and cannot be undone.</span>
            </label>

            <button className="delete-btn" type="submit">Request Account Deletion</button>
          </form>
        )}

        <div className="delete-help">
          <b>Need help instead?</b>
          <p>If you don't want to delete your account, contact <a href="mailto:support@nearbyu.app">support@nearbyu.app</a>.</p>
        </div>
      </div>
    </div>
  );
}