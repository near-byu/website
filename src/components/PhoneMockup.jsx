import { Heart, MessageCircle, MapPin, Search, MoreHorizontal } from "lucide-react";
import React from "react";


export function FeedPhone() {
  return (
    <div className="phone phone-main">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-header">
          <strong>NearByU</strong>
          <span className="live-pill">● LIVE</span>
        </div>
        <div className="location-line"><MapPin size={13} /> Laxmi Nagar, Delhi</div>
        <div className="mini-search"><Search size={14} /> What's happening nearby?</div>
        <div className="story-row">
          {["Food", "Events", "Reels", "Deals"].map(x => <span key={x}>{x}</span>)}
        </div>
        <div className="post-card">
          <div className="post-head">
            <div className="avatar">A</div>
            <div><b>Anonymous</b><small>0.4 km away</small></div>
            <MoreHorizontal size={17} />
          </div>
          <div className="fake-photo food-photo"><span>🍜</span><b>Best momos around here?</b></div>
          <p>Found this little spot near the metro. Anyone tried it?</p>
          <div className="post-actions">
            <span><Heart size={15}/> 128</span><span><MessageCircle size={15}/> 24</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchPhone() {
  return (
    <div className="phone phone-secondary">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="search-title">Search nearby</div>
        <div className="big-search"><Search size={15}/> biryani near me</div>
        {[
          ["Biryani House", "0.4 km", "4.8 ★"],
          ["The Biryani Room", "0.8 km", "4.6 ★"],
          ["Local reel", "1.1 km", "🎥 12K views"]
        ].map(([name, dist, rating]) => (
          <div className="result" key={name}>
            <div className="result-icon">{name === "Local reel" ? "▶" : "🍛"}</div>
            <div><b>{name}</b><small>{dist} · {rating}</small></div>
          </div>
        ))}
        <div className="map-preview">
          <span className="map-pin one">●</span><span className="map-pin two">●</span><span className="map-pin three">●</span>
          <b>Nearby results</b>
        </div>
      </div>
    </div>
  );
}