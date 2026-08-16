import { motion } from "framer-motion";
import React from "react";
import {
  ArrowRight, MapPin, Search, Store, Users, Mic, Clock3,
  Trophy, Sparkles, ShieldCheck, Navigation, MessageCircle
} from "lucide-react";
import { FeedPhone, SearchPhone } from "../components/PhoneMockup";

const features = [
  { icon: MapPin, title: "Hyperlocal Feed", text: "See nearby reels, conversations, events, offers and community activity first." },
  { icon: Search, title: "Local Search", text: "Find places, posts, reviews and live activity around you, not just static listings." },
  { icon: Store, title: "Business Profiles", text: "Discover local businesses and let them reach people who are actually nearby." },
  { icon: Users, title: "Real Community", text: "Connect with people and conversations that belong to your neighborhood." },
];

const smallFeatures = [
  ["🕶️", "Anonymous posting", "Share what you want without putting your name front and center."],
  ["🎙️", "Voice everything", "Type less. Speak more. Upload your voice when words need a little help."],
  ["⏳", "Disappearing posts", "Quick local questions that don't need to live forever."],
  ["🔥", "Streaks", "Stay active, discover more and build your local reputation."],
];

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <div className="eyebrow"><span>●</span> YOUR LOCAL WORLD, LIVE</div>
            <h1>What's happening <span>around you?</span></h1>
            <p className="hero-text">
              Discover people, places, businesses, conversations and local activity
              happening around you in real time.
            </p>
            <div className="hero-actions">
              <a href="#download" className="gradient-btn">Explore NearByU <ArrowRight size={17}/></a>
              <a href="#how-it-works" className="text-btn">See how it works <ArrowRight size={16}/></a>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={16}/> Location-first</span>
              <span><Navigation size={16}/> Built for real places</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: .92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: .8, delay: .15 }}
          >
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="floating-chip chip-top"><MapPin size={15}/> 0.4 km away</div>
            <div className="floating-chip chip-bottom"><span>🔥</span> Trending nearby</div>
            <FeedPhone />
            <SearchPhone />
          </motion.div>
        </div>
      </section>

      <section className="idea section" id="how-it-works">
        <div className="container idea-grid">
          <div>
            <div className="section-kicker">THE BIG IDEA</div>
            <h2>Social media, <span>but closer to home.</span></h2>
            <p className="muted">
              Traditional platforms ask who you follow. NearByU asks what's
              happening where you are.
            </p>
          </div>
          <div className="locality-card">
            <div className="you-dot"><span>YOU</span><MapPin size={24}/></div>
            {[
              ["01", "Your locality", "First priority"],
              ["02", "Nearby areas", "Next closest"],
              ["03", "Your city", "City-wide pulse"],
              ["04", "Beyond", "Trending & global"],
            ].map(([num, title, sub]) => (
              <div className="locality-row" key={num}>
                <span>{num}</span><div><b>{title}</b><small>{sub}</small></div>
                <ArrowRight size={16}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <div className="section-heading centered">
            <div className="section-kicker">DISCOVER MORE</div>
            <h2>Everything around you, <span>in one place.</span></h2>
            <p>From a late-night food craving to a football turf for tonight, NearByU connects digital discovery with real-world activity.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div className="feature-card" whileHover={{ y: -7 }} key={title}>
                <div className="icon-box"><Icon size={21}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow"><ArrowRight size={17}/></span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="search-showcase section">
        <div className="container showcase-grid">
          <div className="showcase-copy">
            <div className="section-kicker">LOCAL SEARCH</div>
            <h2>Search your city.<br/><span>Not the whole internet.</span></h2>
            <p>
              NearByU blends reels, user posts, reviews, business profiles and
              live local activity into search results that actually make sense for where you are.
            </p>
            <div className="search-examples">
              <span><Search size={14}/> biryani near me</span>
              <span><Search size={14}/> cafés nearby</span>
              <span><Search size={14}/> football turf tonight</span>
              <span><Search size={14}/> salon under ₹500</span>
            </div>
          </div>
          <div className="showcase-phone"><SearchPhone /></div>
        </div>
      </section>

      <section className="section social-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-kicker">YOUR WAY TO CONNECT</div>
            <h2>Local conversations have <span>many voices.</span></h2>
          </div>
          <div className="small-feature-grid">
            {smallFeatures.map(([emoji, title, text]) => (
              <div className="small-feature" key={title}>
                <div className="emoji-icon">{emoji}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="business-section section" id="businesses">
        <div className="container business-grid">
          <div className="business-visual">
            <div className="business-card">
              <div className="business-cover">☕</div>
              <div className="business-body">
                <div className="business-avatar">CC</div>
                <div className="business-title"><h3>Coffee Culture</h3><span>● Open now</span></div>
                <div className="business-meta"><span>★ 4.8</span><span>0.6 km</span><span>1.2K followers</span></div>
                <div className="offer">20% OFF <small>This weekend · Show in store</small></div>
                <button>View Business</button>
              </div>
            </div>
            <div className="business-bubble bubble-one"><Store size={15}/> Local business</div>
            <div className="business-bubble bubble-two">📈 More nearby reach</div>
          </div>
          <div className="business-copy">
            <div className="section-kicker">FOR BUSINESSES</div>
            <h2>Turn nearby people into <span>customers.</span></h2>
            <p>
              Create a storefront, publish offers and events, post reels, interact
              with customers and build visibility in the places that matter most.
            </p>
            <div className="business-list">
              <span>✓ Storefront pages</span>
              <span>✓ Offers & events</span>
              <span>✓ Reels & updates</span>
              <span>✓ Local promotion</span>
            </div>
            <a href="#download" className="gradient-btn">Grow locally <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>

      <section className="community section">
        <div className="container community-grid">
          <div>
            <div className="section-kicker">COMMUNITY POWERED</div>
            <h2>Your community <span>builds the community.</span></h2>
            <p>
              Discover a great café, share it with your neighborhood, help the
              owner join NearByU and make the local ecosystem a little better.
            </p>
            <div className="flow">
              <div><b>01</b><span>Discover a place</span></div>
              <div><b>02</b><span>Share your experience</span></div>
              <div><b>03</b><span>Business gets discovered</span></div>
              <div><b>04</b><span>Community grows</span></div>
            </div>
          </div>
          <div className="reputation-card">
            <div className="rep-top"><div className="rep-avatar">A</div><div><b>Local Explorer</b><small>Community reputation</small></div><Trophy size={22}/></div>
            <div className="rep-score"><strong>840</strong><span>REP</span></div>
            <div className="rep-bar"><span /></div>
            <div className="badges">
              <span>🏅 Early Explorer</span><span>🔥 18 Day Streak</span><span>📍 Local Legend</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-section section">
        <div className="container ai-card">
          <div className="ai-orb"><Sparkles size={34}/></div>
          <div>
            <div className="section-kicker">COMING SOON · AI ASSISTANT</div>
            <h2>A smarter layer for <span>local discovery.</span></h2>
            <p>Get help creating better posts, discovering nearby experiences and even pitching local businesses professionally.</p>
            <div className="ai-chat"><span>You</span><p>How do I convince this café owner to join NearByU?</p></div>
            <div className="ai-chat answer"><span>NearByU AI</span><p>Here's a personalized pitch you can send...</p></div>
          </div>
        </div>
      </section>

      <section className="download-section section" id="download">
        <div className="container download-card">
          <img src="/logo.png" alt="" />
          <div className="section-kicker">THE CITY IS ALREADY HAPPENING</div>
          <h2>Go see what's happening <span>around you.</span></h2>
          <p>Download NearByU and turn your locality into something you can actually explore.</p>
          <div className="store-buttons">
            <a href="#" className="store-btn">▶ <div><small>GET IT ON</small><b>Google Play</b></div></a>
            <a href="#" className="store-btn"> <div><small>DOWNLOAD ON THE</small><b>App Store</b></div></a>
          </div>
        </div>
      </section>
    </>
  );
}