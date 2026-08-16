import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/features", "Features"],
  ["/#businesses", "For Businesses"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="NearByU" />
          <span>NearByU</span>
        </Link>

        <div className="desktop-nav">
          {links.map(([to, label]) =>
            to.startsWith("/#") ? (
              <a key={to} href={to}>{label}</a>
            ) : (
              <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
            )
          )}
        </div>

        <a className="nav-cta desktop-cta" href="#download">
          Get the App <ArrowUpRight size={16} />
        </a>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu">
          {links.map(([to, label]) =>
            to.startsWith("/#") ? (
              <a key={to} href={to} onClick={() => setOpen(false)}>{label}</a>
            ) : (
              <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>
            )
          )}
          <a href="#download" onClick={() => setOpen(false)} className="nav-cta">
            Get the App <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}