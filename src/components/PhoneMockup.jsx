import React from "react";
import { Heart, MessageCircle, MapPin, Search, MoreHorizontal } from "lucide-react";

export function FeedPhone() {
  return (
    <div className="relative w-[260px] h-[530px] bg-[#050b18] border-[7px] border-[#111a2d] rounded-[39px] shadow-[0_35px_70px_rgba(31,22,48,0.25)] overflow-hidden -rotate-[5deg] z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[21px] bg-[#050b18] rounded-b-[14px] z-20" />
      <div className="bg-[#080f21] h-full pt-11 px-3.5 pb-4 overflow-hidden flex flex-col justify-between">
        <div className="space-y-2.5">
          <div className="flex justify-between items-center font-heading">
            <strong className="text-white text-xs font-bold">NearByU</strong>
            <span className="text-[8px] text-[#e64c5e] font-extrabold">● LIVE</span>
          </div>
          
          <div className="text-[9px] text-[#777583] flex items-center gap-1">
            <MapPin size={13} className="text-primary" /> Laxmi Nagar, Delhi
          </div>

          <div className="bg-white border border-[#ebe8f0] rounded-[10px] p-2 flex items-center gap-1.5 text-[#9693a1] text-[9px]">
            <Search size={14} /> What's happening nearby?
          </div>

          <div className="flex gap-1.5 overflow-x-auto py-1">
            {["Food", "Events", "Reels", "Deals"].map((x) => (
              <span key={x} className="bg-[#f0e9ff] text-[#7030df] px-2 py-1.5 rounded-lg text-[8px] font-bold shrink-0">
                {x}
              </span>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-2.5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-gradient flex items-center justify-center text-white text-[9px] font-extrabold">A</div>
              <div className="flex-1 flex flex-col leading-tight">
                <b className="text-[9px] text-white">Anonymous</b>
                <small className="text-[7px] text-[#9995a3]">0.4 km away</small>
              </div>
              <MoreHorizontal size={16} className="text-muted-foreground" />
            </div>

            <div className="h-[140px] rounded-lg bg-gradient-to-br from-[#5c2b89] to-[#e9545d] flex flex-col items-center justify-center text-white p-2">
              <span className="text-3xl">🥟</span>
              <b className="text-[10px] mt-1.5">Best momos around here?</b>
            </div>

            <p className="text-[9px] text-[#d7dced] leading-tight">Found this spot near the metro. Anyone tried it?</p>

            <div className="flex gap-4 text-[8px] text-[#77727f] pt-1">
              <span className="flex items-center gap-1"><Heart size={13} className="text-destructive" /> 128</span>
              <span className="flex items-center gap-1"><MessageCircle size={13} /> 24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchPhone() {
  return (
    <div className="relative w-[260px] h-[530px] bg-[#050b18] border-[7px] border-[#111a2d] rounded-[39px] shadow-[0_35px_70px_rgba(31,22,48,0.25)] overflow-hidden rotate-[7deg] scale-[0.9] opacity-95">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[21px] bg-[#050b18] rounded-b-[14px] z-20" />
      <div className="bg-[#080f21] h-full pt-11 px-3.5 pb-4 overflow-hidden flex flex-col justify-between">
        <div>
          <div className="font-heading font-extrabold text-[15px] mb-3 text-white">Search nearby</div>
          <div className="bg-white border border-[#ebe8f0] rounded-[10px] p-2 flex items-center gap-1.5 text-zinc-800 text-[9px] mb-3">
            <Search size={14} className="text-primary" /> biryani near me
          </div>

          <div className="divide-y divide-border/40">
            {[
              ["Biryani House", "0.4 km", "★ 4.8"],
              ["The Biryani Room", "0.8 km", "★ 4.6"],
              ["Local reel", "1.1 km", "▶ 12K views"],
            ].map(([name, dist, rating]) => (
              <div className="flex gap-2.5 items-center py-2 text-white" key={name}>
                <div className="w-7 h-7 rounded-lg bg-[#f1eaff] text-primary flex items-center justify-center text-xs font-bold shrink-0">
                  {name === "Local reel" ? "🎥" : "📍"}
                </div>
                <div className="flex flex-col text-left">
                  <b className="text-[9px] text-white">{name}</b>
                  <small className="text-[7px] text-[#8b8794]">{dist} • {rating}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="h-28 mt-3 rounded-xl relative overflow-hidden bg-[repeating-linear-gradient(30deg,#151e33_0_2px,#0d162b_2px_30px)] border border-border flex items-center justify-center">
            <span className="absolute top-3 left-10 text-xs">📍</span>
            <span className="absolute top-8 left-28 text-xs">📍</span>
            <span className="absolute top-4 right-8 text-xs">📍</span>
            <b className="absolute left-2.5 bottom-2.5 bg-card/90 text-white px-2 py-1 rounded text-[8px] border border-border">Nearby results</b>
          </div>
        </div>
      </div>
    </div>
  );
}