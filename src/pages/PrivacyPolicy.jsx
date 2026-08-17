import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, Trash2, Lock, Eye, Mail, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[70vh] py-20 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-extrabold tracking-widest text-primary-light">
            <ShieldCheck size={14} /> LEGAL & COMPLIANCE
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-xs text-muted-foreground">
            <b>Effective Date:</b> August 17, 2026 | <b>Last Updated:</b> August 17, 2026
          </p>
        </div>

        {/* Intro Card */}
        <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground space-y-3">
          <p>
            Welcome to <b>NearByU</b> (“NearByU”, “we”, “our”, or “us”). NearByU is a location-first social and business discovery platform designed to help people explore, connect, and interact with people, businesses, and activities happening in their immediate surroundings.
          </p>
          <p>
            This Privacy Policy describes our practices regarding the collection, use, disclosure, storage, and protection of your personal information when you access or use our mobile applications, websites, and associated services (collectively, the “Service”).
          </p>
        </div>

        {/* Policy Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground border-t border-border pt-8">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">01.</span> Information We Collect
            </h2>
            <p>We collect information in three primary ways: information you provide directly, information collected automatically, and information from third-party sources.</p>
            
            <div className="space-y-3 pl-4 border-l-2 border-border mt-3">
              <div>
                <h3 className="font-semibold text-white text-sm">A. Information You Provide to Us</h3>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                  <li><b>Account Registration:</b> Name, email address, phone number, username, password, and profile photos.</li>
                  <li><b>Business Profiles:</b> Storefront name, business category, business contact details, operational hours, location, and promotional offers.</li>
                  <li><b>User-Generated Content (UGC):</b> Posts, reels, stories, comments, audio/voice notes, ratings, reviews, badges, and feedback submitted on the platform.</li>
                  <li><b>Communications:</b> Messages, support inquiries, and feedback sent directly to our team.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-white text-sm">B. Information Collected Automatically</h3>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-xs">
                  <li><b>Precise & Approximate Location:</b> GPS coordinates, Wi-Fi access points, cell tower data, and device IP address.</li>
                  <li><b>Device & Technical Identifiers:</b> Device model, operating system version, unique device identifiers, Firebase installation IDs, network carrier, and crash log diagnostics.</li>
                  <li><b>Usage & Analytics:</b> Interactions with feeds, search queries (e.g., local food, businesses), engagement metrics, post views, and app navigation patterns.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">02.</span> Location Information & Permissions
            </h2>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-white text-xs">
                <MapPin size={16} className="text-primary" /> Hyperlocal Core Functionality
              </div>
              <p className="text-xs text-muted-foreground">
                NearByU is location-dependent. We use your location data to organize local feeds, display nearby businesses and events, surface local search results, and connect you with nearby users.
              </p>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><b>Foreground Location:</b> Collected while the application is open and active to display real-time nearby content.</li>
              <li><b>Background Location:</b> If explicitly permitted by the user, used to notify you of nearby trending local events, offers, or safety alerts.</li>
              <li><b>Location Controls:</b> You can enable, disable, or adjust location precision anytime via your device settings. Disabling location permissions may limit certain core features of NearByU.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">03.</span> How We Use Your Information
            </h2>
            <p>We process your personal data for the following lawful purposes:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>To provide, operate, and maintain the NearByU platform and its location-first feeds.</li>
              <li>To allow local businesses to create storefronts, publish updates, and reach nearby customers.</li>
              <li>To process user interactions, reviews, voice posts, streaks, and reputation badge systems.</li>
              <li>To personalize search results, recommendations, and localized promotional offers.</li>
              <li>To enforce our Terms of Service, detect fraud, monitor illegal activity, and maintain community safety.</li>
              <li>To communicate important product updates, security alerts, and customer support messages.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">04.</span> Sharing & Disclosure of Information
            </h2>
            <p>We do not sell your personal information. We disclose data only under the following limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li><b>Public & Locality Visibility:</b> Content you publish (posts, reels, public comments, reviews, anonymous posts without profile identifiers) is visible to other users in your geographic radius.</li>
              <li><b>Service Providers & Infrastructure:</b> Trusted third-party vendors that provide hosting, database infrastructure, analytics, cloud storage, crash reporting, and authentication (e.g., Google Firebase, Google Cloud, Vercel).</li>
              <li><b>Legal Compliance & Safety:</b> When required by applicable law, court order, governmental inquiry, or to protect the vital safety of users, minors, or the public.</li>
              <li><b>Business Transfers:</b> In connection with any merger, acquisition, asset sale, or reorganization, user information may be transferred as a business asset.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">05.</span> Data Retention & Account Deletion
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
            </p>
            <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 space-y-2">
              <div className="flex items-center gap-2 font-bold text-destructive text-xs">
                <Trash2 size={16} /> 14-Day Deletion Grace Period
              </div>
              <p className="text-xs text-destructive/90">
                You can request deletion of your account at any time through our dedicated{" "}
                <Link to="/delete-account" className="font-bold underline">
                  Account Deletion Portal
                </Link>
                . Once submitted, your account enters a <b>14-day soft-delete grace period</b> during which all profile data and posts become invisible. Logging back into your account within 14 days cancels the deletion request. After 14 days, all associated user records, posts, media, and authentication credentials are permanently deleted from our database.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">06.</span> Child Privacy & Safety Standards
            </h2>
            <p>
              NearByU does not knowingly collect or solicit personal information from children under the age of 13 (or under 16 in certain jurisdictions). If we learn that we have collected personal data from a child without verified parental consent, we will promptly delete that information.
            </p>
            <p className="text-xs">
              We uphold strict zero-tolerance policies against child sexual abuse and exploitation (CSAE). Review our published{" "}
              <Link to="/child-safety" className="text-primary underline font-semibold">
                Child Safety & Anti-CSAE Standards
              </Link>
              .
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">07.</span> Security of Your Information
            </h2>
            <p>
              We employ industry-standard administrative, technical, and physical security measures (including SSL/TLS data encryption in transit, strict Firestore access rules, and authenticated endpoint controls) to safeguard your data against unauthorized access, alteration, or destruction. However, no electronic transmission or storage system can be guaranteed 100% secure.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">08.</span> Your Privacy Rights & Choices
            </h2>
            <p>Depending on your jurisdiction (e.g., GDPR, CCPA/CPRA, Indian DPDP Act), you may have rights including:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li><b>Access & Portability:</b> Request a copy of the personal information we hold about you.</li>
              <li><b>Correction:</b> Update or rectify incorrect or outdated profile information.</li>
              <li><b>Erasure:</b> Request permanent deletion of your account and personal data.</li>
              <li><b>Withdraw Consent:</b> Revoke permissions for location access, notifications, or microphone access via your operating system settings.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">09.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our legal obligations, features, or operational practices. We will notify you of material changes by updating the “Last Updated” date at the top of this page or by delivering an in-app notice.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <span className="text-primary font-mono text-base">10.</span> Contact Information & Grievance Officer
            </h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, contact our privacy team:</p>
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <Mail size={16} className="text-primary" /> NearByU Privacy & Safety Team
              </div>
              <p>
                <b>Email:</b>{" "}
                <a href="mailto:nearbyuofficial@gmail.com" className="text-primary underline">
                  nearbyuofficial@gmail.com
                </a>
              </p>
              <p><b>Platform:</b> NearByU Technologies</p>
              <p><b>Support Portal:</b> <a href="https://nearbyus.vercel.app" className="text-primary underline">https://nearbyus.vercel.app</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}