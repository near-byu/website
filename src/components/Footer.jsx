import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Link to="/" className="inline-flex items-center gap-2.5 font-heading text-lg font-extrabold text-white">
            <img src="/logo.png" alt="NearByU" className="h-9 w-9 rounded-xl object-contain" />
            <span>NearByU</span>
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground max-w-xs">
            Your local social layer for discovering people, places, businesses, conversations, and activity around you.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 text-xs">
          <h4 className="font-heading font-semibold text-white">Product</h4>
          <Link to="/features" className="text-muted-foreground hover:text-white transition-colors">Features</Link>
          <a href="/#businesses" className="text-muted-foreground hover:text-white transition-colors">For Businesses</a>
          <a href="/#download" className="text-muted-foreground hover:text-white transition-colors">Download</a>
        </div>

        <div className="flex flex-col gap-2.5 text-xs">
          <h4 className="font-heading font-semibold text-white">Legal</h4>
          <Link to="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/delete-account" className="text-muted-foreground hover:text-white transition-colors">Delete Account</Link>
        </div>

        <div className="flex flex-col gap-2.5 text-xs">
          <h4 className="font-heading font-semibold text-white">Contact</h4>
          <a href="mailto:nearbyuofficial@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
            nearbyuofficial@gmail.com
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-[10px] text-muted-dark sm:flex-row">
        <span>© {new Date().getFullYear()} NearByU. All rights reserved.</span>
        <span>Built for the places that matter.</span>
      </div>
    </footer>
  );
}