import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Mail } from "lucide-react";

export default function ChildSafety() {
  return (
    <div className="min-h-[70vh] py-20 bg-background">
      <div className="container mx-auto max-w-4xl space-y-8">
        <div>
          <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">SAFETY & COMPLIANCE</div>
          <h1 className="mt-2 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Child Safety & <span className="gradient-text">Anti-CSAE Standards</span>
          </h1>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: August 2026</p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground border-t border-border pt-6">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-5 text-destructive space-y-2">
            <div className="flex items-center gap-2 font-bold text-base">
              <ShieldAlert size={20} /> Zero-Tolerance Policy
            </div>
            <p className="text-xs text-destructive/90 leading-relaxed">
              NearByU strictly prohibits any content, communication, or behavior related to Child Sexual Abuse Material (CSAM) or Child Sexual Exploitation and Abuse (CSAE). Any violation results in immediate, permanent account termination and referral to law enforcement.
            </p>
          </div>

          <h2 className="font-heading text-lg font-bold text-white pt-2">1. Prohibited Content and Conduct</h2>
          <p>
            NearByU has absolute zero tolerance for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Any creation, upload, sharing, streaming, or promotion of Child Sexual Abuse Material (CSAM).</li>
            <li>Child grooming, sexual solicitation of minors, or child sexual exploitation.</li>
            <li>Sharing links, references, or advertisements directing users to child sexual exploitation materials.</li>
          </ul>

          <h2 className="font-heading text-lg font-bold text-white pt-2">2. Detection, Enforcement, and Reporting</h2>
          <p>
            We take proactive and reactive measures to ensure child safety across all posts, comments, media, and voice uploads:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li><b>Immediate Removal:</b> Any content identified or reported as CSAE is permanently deleted without prior warning.</li>
            <li><b>Account Termination:</b> Associated accounts, devices, and identifiers are permanently banned.</li>
            <li><b>Law Enforcement Referral:</b> In accordance with international laws, verified incidents of CSAM/CSAE are reported directly to the <b>National Center for Missing & Exploited Children (NCMEC)</b> and appropriate local law enforcement authorities.</li>
          </ul>

          <h2 className="font-heading text-lg font-bold text-white pt-2">3. How Users Can Report Violations</h2>
          <p>
            Users can flag inappropriate content or profiles directly inside the NearByU application using the in-app report button, or by contacting our dedicated safety team immediately via email:
          </p>
          <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3 text-white">
            <Mail className="text-primary shrink-0" size={20} />
            <div>
              <div className="text-xs font-bold">Designated Safety Contact</div>
              <a href="mailto:nearbyuofficial@gmail.com" className="text-xs text-primary underline underline-offset-4">
                nearbyuofficial@gmail.com
              </a>
            </div>
          </div>

          <h2 className="font-heading text-lg font-bold text-white pt-2">4. Related Policies</h2>
          <p>
            For more information on user data and privacy, please refer to our{" "}
            <Link to="/privacy-policy" className="text-primary underline underline-offset-4">
              Privacy Policy
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}