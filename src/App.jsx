import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
import Grow from "./pages/Grow";
import ChildSafety from "./pages/ChildSafety";
import Admin from "./pages/admin/page";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/grow" element={<Grow />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/child-safety" element={<ChildSafety />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}