import React from "react";
export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" kicker="LEGAL">
      <p className="legal-updated">Last updated: August 2026</p>
      <h2>1. Introduction</h2>
      <p>NearByU is a location-first social platform designed to help users discover and interact with people, businesses and activity around them. This Privacy Policy explains how information is collected, used, stored and shared when you use NearByU.</p>

      <h2>2. Information We Collect</h2>
      <p>Depending on how you use the service, we may collect account information, user-generated content, approximate or precise location information when permission is granted, device and technical information, and information required to provide app functionality.</p>

      <h2>3. Location Information</h2>
      <p>Location is central to NearByU. We may use location information to provide hyperlocal feeds, local search, nearby recommendations, business discovery and other location-based functionality. You can manage location permissions through your device settings.</p>

      <h2>4. User-Generated Content</h2>
      <p>Content you choose to publish, such as posts, reels, reviews, voice uploads and business interactions, may be visible to other users according to the visibility settings and functionality of the service.</p>

      <h2>5. How We Use Information</h2>
      <p>Information may be used to operate and improve NearByU, personalize local discovery, provide search and recommendations, maintain security, prevent abuse, communicate with users and support business features.</p>

      <h2>6. Data Sharing</h2>
      <p>We may use service providers that help us operate hosting, analytics, authentication, storage, notifications and other infrastructure. We do not sell personal information simply because it is collected.</p>

      <h2>7. Data Retention & Security</h2>
      <p>We retain information for as long as reasonably necessary to provide the service, meet legal obligations, resolve disputes and enforce agreements. Reasonable technical and organizational safeguards are used to protect information, although no internet service can guarantee absolute security.</p>

      <h2>8. Account Deletion</h2>
      <p>You may request deletion of your NearByU account through our <a href="/delete-account">Account Deletion page</a>. Some information may be retained where required by law or for legitimate security and fraud-prevention purposes.</p>

      <h2>9. Children's Privacy</h2>
      <p>NearByU is not intended for children where applicable law requires parental consent. We do not knowingly collect personal information from children in violation of applicable requirements.</p>

      <h2>10. Changes</h2>
      <p>We may update this policy as the product changes. The revised version will be posted on this page with an updated date.</p>

      <h2>11. Contact</h2>
      <p>For privacy questions, contact <a href="mailto:privacy@nearbyu.app">nearbyuofficial@gmail.com</a>.</p>

     
    </LegalPage>
  );
}

function LegalPage({ title, kicker, children }) {
  return (
    <div className="inner-page legal-page">
      <div className="container legal-container">
        <div className="section-kicker">{kicker}</div>
        <h1>{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </div>
  );
}