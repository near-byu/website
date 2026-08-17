import React from "react";
import { MapPin, Search, Store, Users, Mic, EyeOff, Flame, Trophy, Sparkles } from "lucide-react";

const groups = [
  ["DISCOVER", [
    [MapPin, "Hyperlocal Feed", "Your locality comes first. Browse nearby reels, posts, events, recommendations, offers and community activity."],
    [Search, "Local Search Engine", "Search for food, cafés, salons, sports, events and more with results grounded in your surroundings."],
  ]],
  ["CONNECT", [
    [Users, "Community", "Connect around places and conversations that matter to your neighborhood."],
    [Mic, "Voice Posting", "Use voice typing and voice uploads when speaking feels more natural than typing."],
    [EyeOff, "Anonymous Posting", "Share thoughts through an anonymous mode when you want the focus on the post, not the profile."],
    [Flame, "Streaks", "Keep exploring and engaging with your local community."],
  ]],
  ["BUSINESS", [
    [Store, "Business Profiles", "Businesses can create storefronts, publish offers and events, post reels and interact with nearby customers."],
    [Trophy, "Rewards & Reputation", "Earn badges, reputation and visibility through useful contributions and genuine community engagement."],
  ]],
  ["FUTURE", [
    [Sparkles, "AI Assistant", "A planned AI layer for local recommendations, content help and professional business outreach."],
  ]],
];

export default function Features() {
  return (
    <div className="min-h-[70vh]">
      <section className="border-b border-border bg-[radial-gradient(circle_at_70%_10%,rgba(108,99,255,0.14),transparent_32%),#080f21] py-24">
        <div className="container mx-auto">
          <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">THE NEARBYU EXPERIENCE</div>
          <h1 className="mt-2 font-heading text-4xl sm:text-6xl font-extrabold tracking-tight">
            Built around <span className="gradient-text">where you are.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            NearByU combines social discovery, local search, community interaction and business discovery into one location-first ecosystem.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 space-y-16">
        {groups.map(([heading, items]) => (
          <div key={heading} className="space-y-6">
            <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">{heading}</div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {items.map(([Icon, title, text]) => (
                <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:border-primary/40 hover:bg-[#1a2540]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-light mb-5">
                    <Icon size={22} />
                  </div>
                  <h2 className="font-heading text-lg font-bold text-white mb-2">{title}</h2>
                  <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}