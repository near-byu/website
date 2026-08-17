import React from "react";
import {
  Rocket,
  BarChart2,
  Trophy,
  CheckCircle2,
  Gift,
  ShieldCheck,
  Headphones,
  Map,
  Zap,
  Users,
  Coffee,
  Utensils,
  Dumbbell,
  BookOpen,
  Users2,
  Hotel,
  Calendar,
} from "lucide-react";

const plans = [
  {
    title: "Starter",
    subtitle: "Great for getting started",
    price: "499",
    color: "#10B981",
    textColor: "text-emerald-400",
    bgAlpha: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    icon: Rocket,
    features: [
      "Up to 10 active posts",
      "5 km reach radius",
      "Basic insights",
      "Community support",
      "Standard listing",
    ],
  },
  {
    title: "Growth",
    subtitle: "Grow your audience",
    price: "999",
    color: "#6366F1",
    textColor: "text-indigo-400",
    bgAlpha: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    icon: BarChart2,
    features: [
      "Unlimited active posts",
      "15 km reach radius",
      "Advanced insights",
      "Priority support",
      "Boost & ads",
      "Featured listing",
    ],
  },
  {
    title: "Pro",
    subtitle: "Maximize your impact",
    price: "1,999",
    color: "#F59E0B",
    textColor: "text-amber-400",
    bgAlpha: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    icon: Trophy,
    features: [
      "Unlimited everything",
      "25 km reach radius",
      "Premium insights",
      "Priority support 24/7",
      "Advanced boost tools",
      "Top placement",
      "Custom offers & deals",
    ],
  },
];

const foundingPerks = [
  { icon: Gift, text: "Free access to all current features" },
  { icon: ShieldCheck, text: '"Founding Partner" badge' },
  { icon: Headphones, text: "Priority support" },
  { icon: Map, text: "Direct influence on our product roadmap" },
  { icon: Zap, text: "Early access to new features" },
];

const categories = [
  { icon: Coffee, label: "Cafés" },
  { icon: Utensils, label: "Restaurants" },
  { icon: Dumbbell, label: "Gyms" },
  { icon: BookOpen, label: "Libraries" },
  { icon: Users2, label: "Coworking spaces" },
  { icon: Hotel, label: "Hostels" },
  { icon: Calendar, label: "Local event organizers" },
];

export default function Grow() {
  const joinedCount = 1;
  const goalCount = 50;
  const spotsLeft = goalCount - joinedCount;
  const progressPercent = (joinedCount / goalCount) * 100;

  return (
    <div className="min-h-[70vh] bg-background py-14">
      <div className="container mx-auto space-y-12">
        {/* Header Intro */}
        <div className="max-w-2xl">
          <div className="text-[11px] font-extrabold tracking-[0.16em] text-primary">GROW WITH NEARBYU</div>
          <h1 className="mt-2 font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Upgrade your plan & <span className="gradient-text">unlock potential.</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Upgrade your plan and unlock the full potential of NearByU.
          </p>
        </div>

        {/* SECTION: FUTURE PLANS */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">Future Plans (Coming Soon)</h2>
            <p className="text-xs text-muted-foreground mt-1">More power. More reach. More customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.title}
                  className="rounded-[22px] border border-border bg-card p-6 flex flex-col justify-between shadow-xl transition-all hover:border-primary/40 hover:bg-[#1a2540]"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-full ${plan.bgAlpha} flex items-center justify-center`}>
                      <Icon size={20} style={{ color: plan.color }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-bold" style={{ color: plan.color }}>
                        {plan.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{plan.subtitle}</p>
                    </div>

                    <div className="flex items-baseline gap-1 pt-1">
                      <span className="text-3xl font-heading font-extrabold text-white">₹{plan.price}</span>
                      <span className="text-xs text-muted-foreground">/ month</span>
                    </div>

                    <div className="w-full py-1.5 rounded-full bg-white/[0.04] text-center">
                      <span className="text-xs font-bold" style={{ color: plan.color }}>
                        Coming Soon
                      </span>
                    </div>

                    <hr className="border-border/50" />

                    <ul className="space-y-2.5 pt-1">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-xs text-white/80">
                          <CheckCircle2 size={15} style={{ color: plan.color }} className="shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      disabled
                      className="w-full py-3 rounded-xl border border-white/10 text-xs font-bold text-white/40 cursor-not-allowed bg-transparent"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION: FOUNDING BUSINESS PROGRAM */}
        <section className="rounded-[22px] border border-amber-500/20 bg-card p-6 sm:p-9 shadow-2xl space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xl font-heading font-bold text-amber-400">
              <span>🎉</span>
              <h2>Founding Business Program</h2>
            </div>
            <p className="text-xs text-white/70 mt-1">
              We're inviting our first 50 local businesses to help shape NearByU.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Founding businesses receive:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {foundingPerks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-white/80 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Indicator */}
          <div className="rounded-2xl bg-background/80 border border-border p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center -space-x-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-card">
                CA
              </div>
              <img
                src="https://picsum.photos/100?1"
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-card"
              />
              <img
                src="https://picsum.photos/100?2"
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-card"
              />
              <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-[9px] font-bold text-white/70 ring-2 ring-card">
                +12
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              XYZ Café, The Gym Co., Brew House and 14 other businesses have joined our beta program.
            </p>
          </div>

          {/* Milestone Progress Bar */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Users size={16} className="text-emerald-400" />
                <span>{joinedCount}</span>
                <span className="text-muted-foreground font-normal">joined</span>
              </div>
              <div className="rounded-full bg-[#3A2A0D] px-3 py-1 text-[11px] font-bold text-amber-400">
                Only {spotsLeft} spots left!
              </div>
              <div className="text-muted-foreground">{goalCount} goal</div>
            </div>

            <div className="h-2 w-full rounded-full bg-background overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* SECTION: VISIBILITY TARGET AUDIENCE */}
        <section className="space-y-5">
          <div>
            <h2 className="text-lg font-heading font-bold text-white">
              Built for local businesses where visibility matters
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              We're starting with businesses that thrive on local discovery.
            </p>
          </div>

          {/* Categories Strip */}
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none">
            {categories.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="w-28 shrink-0 rounded-2xl bg-card border border-border/50 p-4 flex flex-col items-center justify-center text-center space-y-2 hover:border-primary/40 transition"
              >
                <Icon size={22} className="text-emerald-400" />
                <span className="text-[11px] font-medium text-white/80 leading-tight line-clamp-2">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}