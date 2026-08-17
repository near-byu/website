import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, MapPin, Search, Store, Users, Trophy, Sparkles, ShieldCheck, Navigation
} from "lucide-react";
import { FeedPhone, SearchPhone } from "../components/PhoneMockup";

const features = [
  { icon: MapPin, title: "Hyperlocal Feed", text: "See nearby reels, conversations, events, offers and community activity first." },
  { icon: Search, title: "Local Search", text: "Find places, posts, reviews and live activity around you, not just static listings." },
  { icon: Store, title: "Business Profiles", text: "Discover local businesses and let them reach people who are actually nearby." },
  { icon: Users, title: "Real Community", text: "Connect with people and conversations that belong to your neighborhood." },
];

const smallFeatures = [
  ["🎭", "Anonymous posting", "Share what you want without putting your name front and center."],
  ["🎙️", "Voice everything", "Type less. Speak more. Upload your voice when words need a little help."],
  ["⏳", "Disappearing posts", "Quick local questions that don't need to live forever."],
  ["🔥", "Streaks", "Stay active, discover more and build your local reputation."],
];

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[720px] pt-16 flex items-center bg-[radial-gradient(circle_at_15%_20%,rgba(108,99,255,0.18),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(255,173,61,0.10),transparent_28%),#080f21]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-extrabold tracking-widest text-primary-light">
              <span>●</span> YOUR LOCAL WORLD, LIVE
            </div>
            
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
              What's happening <span className="gradient-text">around you?</span>
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Discover people, places, businesses, conversations and local activity happening around you in real time.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold text-white shadow-lg hover:opacity-95 transition">
                Explore NearByU <ArrowRight size={17} />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition">
                See how it works <ArrowRight size={16} />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-[#777582]">
              <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-primary" /> Location-first</span>
              <span className="flex items-center gap-1.5"><Navigation size={16} className="text-primary" /> Built for real places</span>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative flex justify-center items-center min-h-[520px]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Background Orbits */}
            <div className="absolute w-[470px] h-[470px] border border-primary/10 rounded-full" />
            <div className="absolute w-[570px] h-[570px] border border-orange-400/10 rounded-full" />

            {/* Floating Chips */}
            <div className="absolute top-10 right-4 z-20 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 text-xs font-bold text-zinc-900 shadow-xl">
              <MapPin size={15} className="text-primary" /> 0.4 km away
            </div>
            <div className="absolute bottom-10 left-2 z-20 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 text-xs font-bold text-zinc-900 shadow-xl">
              <span>🔥</span> Trending nearby
            </div>

            <FeedPhone />
            <div className="hidden sm:block -ml-16">
              <SearchPhone />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Big Idea Section */}
      <section className="border-y border-[#1d2942] bg-[#0b1428] py-20" id="how-it-works">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] font-extrabold tracking-widest text-primary">THE BIG IDEA</div>
            <h2 className="mt-2 text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-white">
              Social media, <span className="gradient-text">but closer to home.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-lg">
              Traditional platforms ask who you follow. NearByU asks what's happening where you are.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl space-y-3">
            <div className="h-16 rounded-xl bg-brand-gradient flex flex-col items-center justify-center text-white">
              <span className="text-[9px] font-extrabold tracking-widest uppercase">YOU</span>
              <MapPin size={20} />
            </div>
            {[
              ["01", "Your locality", "First priority"],
              ["02", "Nearby areas", "Next closest"],
              ["03", "Your city", "City-wide pulse"],
              ["04", "Beyond", "Trending & global"],
            ].map(([num, title, sub]) => (
              <div key={num} className="flex items-center justify-between border-b border-border/40 py-2.5 px-3 text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-muted-foreground">{num}</span>
                  <div className="flex flex-col text-left">
                    <b className="text-white text-xs font-bold">{title}</b>
                    <small className="text-[9px] text-muted-foreground">{sub}</small>
                  </div>
                </div>
                <ArrowRight size={15} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-extrabold tracking-widest text-primary">DISCOVER MORE</div>
          <h2 className="mt-2 text-3xl sm:text-5xl font-heading font-extrabold text-white">
            Everything around you, <span className="gradient-text">in one place.</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            From a late-night food craving to a football turf for tonight, NearByU connects digital discovery with real-world activity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, text }) => (
            <motion.div
              whileHover={{ y: -6 }}
              key={title}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 hover:bg-accent transition"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary-light mb-6">
                <Icon size={20} />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-white text-base">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
              </div>
              <div className="pt-6 flex justify-end">
                <ArrowRight size={16} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Small Social Features */}
      <section className="container mx-auto">
        <div className="mb-8">
          <div className="text-[11px] font-extrabold tracking-widest text-primary">YOUR WAY TO CONNECT</div>
          <h2 className="mt-1 text-3xl font-heading font-extrabold text-white">
            Local conversations have <span className="gradient-text">many voices.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {smallFeatures.map(([emoji, title, text]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 space-y-3">
              <span className="text-3xl">{emoji}</span>
              <h3 className="font-heading font-bold text-white text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistance Box */}
      <section className="container mx-auto">
        <div className="rounded-3xl border border-border bg-[radial-gradient(circle_at_10%_30%,rgba(108,99,255,0.16),transparent_25%),#151e33] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary-light">
              <Sparkles size={34} />
            </div>
          </div>
          <div className="lg:col-span-10 space-y-4">
            <div className="text-[11px] font-extrabold tracking-widest text-primary">COMING SOON • AI ASSISTANT</div>
            <h2 className="text-3xl font-heading font-extrabold text-white">
              A smarter layer for <span className="gradient-text">local discovery.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl">
              Get help creating better posts, discovering nearby experiences and even pitching local businesses professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto pt-6" id="download">
        <div className="relative overflow-hidden rounded-[35px] bg-brand-gradient p-10 sm:p-16 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <img src="/logo.png" alt="NearByU" className="mx-auto h-16 w-16 rounded-2xl shadow-md" />
            <div className="text-[11px] font-extrabold tracking-widest text-white/80">THE CITY IS ALREADY HAPPENING</div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold">
              Go see what's happening <span className="underline">around you.</span>
            </h2>
            <p className="text-sm text-white/80">Download NearByU and turn your locality into something you can actually explore.</p>
            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#16121d] px-5 py-3 text-left hover:bg-black transition">
                <div className="text-left leading-tight">
                  <small className="text-[9px] block text-muted-foreground">GET IT ON</small>
                  <b className="text-sm">Google Play</b>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 rounded-xl bg-[#16121d] px-5 py-3 text-left hover:bg-black transition">
                <div className="text-left leading-tight">
                  <small className="text-[9px] block text-muted-foreground">DOWNLOAD ON THE</small>
                  <b className="text-sm">App Store</b>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}