import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[70vh] py-20 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">LEGAL</div>
        <h1 className="mt-2 mb-8 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
          <p className="text-xs text-muted-dark">Last updated: August 2026</p>
          
          <h2 className="font-heading text-lg font-bold text-white pt-2">1. Introduction</h2>
          <p>NearByU is a location-first social platform designed to help users discover and interact with people, businesses and activity around them. This Privacy Policy explains how information is collected, used, stored and shared when you use NearByU.</p>
          
          <h2 className="font-heading text-lg font-bold text-white pt-2">2. Information We Collect</h2>
          <p>Depending on how you use the service, we may collect account information, user-generated content, approximate or precise location information when permission is granted, device and technical information, and information required to provide app functionality.</p>
          
          <h2 className="font-heading text-lg font-bold text-white pt-2">3. Location Information</h2>
          <p>Location is central to NearByU. We may use location information to provide hyperlocal feeds, local search, nearby recommendations, business discovery and other location-based functionality. You can manage location permissions through your device settings.</p>

          <h2 className="font-heading text-lg font-bold text-white pt-2">8. Account Deletion</h2>
          <p>You may request deletion of your NearByU account through our <Link to="/delete-account" className="font-semibold text-primary underline underline-offset-4">Account Deletion page</Link>.</p>

          <h2 className="font-heading text-lg font-bold text-white pt-2">11. Contact</h2>
          <p>For privacy questions, contact <a href="mailto:nearbyuofficial@gmail.com" className="font-semibold text-primary underline underline-offset-4">nearbyuofficial@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  );
}