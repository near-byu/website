import { MapPin, Search, Store, Users, Mic, EyeOff, Flame, Trophy, Sparkles } from "lucide-react";
import React from "react";

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
    <div className="inner-page">
      <section className="page-hero">
        <div className="container">
          <div className="section-kicker">THE NEARBYU EXPERIENCE</div>
          <h1>Built around <span>where you are.</span></h1>
          <p>NearByU combines social discovery, local search, community interaction and business discovery into one location-first ecosystem.</p>
        </div>
      </section>

      <section className="container feature-groups">
        {groups.map(([heading, items]) => (
          <div className="feature-group" key={heading}>
            <div className="section-kicker">{heading}</div>
            <div className="feature-detail-grid">
              {items.map(([Icon, title, text]) => (
                <article className="feature-detail-card" key={title}>
                  <div className="icon-box"><Icon size={22}/></div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}