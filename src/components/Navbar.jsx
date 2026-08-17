import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import React from "react";

const links = [
  ["/", "Home"],
  ["/features", "Features"],
  ["/grow", "Grow"],
  ["/#businesses", "For Businesses"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080f21]/90 backdrop-blur-lg border-b border-primary/15">
      <nav className="container mx-auto flex h-[76px] items-center justify-between gap-7">
        <Link to="/" className="inline-flex items-center gap-2.5 font-heading font-extrabold text-[19px] text-white" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="NearByU" className="h-[38px] w-[38px] rounded-xl object-contain" />
          <span>NearByU</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {links.map(([to, label]) =>
            to.startsWith("/#") ? (
              <a key={to} href={to} className="text-sm font-semibold text-muted-foreground hover:text-white transition-colors">
                {label}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive ? "text-white" : "text-muted-foreground hover:text-white"}`
                }
              >
                {label}
              </NavLink>
            )
          )}
        </div>

        <a href="#download" className="hidden md:inline-flex items-center gap-2 rounded-[13px] bg-brand-gradient px-4 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(118,39,239,0.18)] hover:opacity-95 transition-opacity">
          Get the App <ArrowUpRight size={16} />
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-2 p-5 bg-card border-b border-border md:hidden">
          {links.map(([to, label]) =>
            to.startsWith("/#") ? (
              <a key={to} href={to} onClick={() => setOpen(false)} className="p-2 text-sm font-semibold text-muted-foreground hover:text-white">
                {label}
              </a>
            ) : (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="p-2 text-sm font-semibold text-muted-foreground hover:text-white">
                {label}
              </Link>
            )
          )}
          <a href="#download" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient p-3 text-sm font-bold text-white">
            Get the App <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}