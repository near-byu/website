import { Link } from "react-router-dom";
import React from "react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="NearByU" />
            <span>NearByU</span>
          </Link>
          <p>
            Your local social layer for discovering people, places, businesses,
            conversations and activity around you.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <Link to="/features">Features</Link>
          <a href="/#businesses">For Businesses</a>
          <a href="/#download">Download</a>
        </div>

        <div>
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/delete-account">Delete Account</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="mailto:nearbyuofficial@gmail.com">nearbyuofficial@gmail.com</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} NearByU. All rights reserved.</span>
        <span>Built for the places that matter.</span>
      </div>
    </footer>
  );
}