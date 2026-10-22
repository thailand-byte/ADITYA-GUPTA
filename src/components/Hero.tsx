import { ArrowRight, Download, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollToWork = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#071510] overflow-hidden"
    >
      {/* Ambient Emerald & Gold Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Container Banner with Rich Emerald & Gold Accents */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0e271e] via-[#0a1d16] to-[#071611] border border-emerald-700/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
          {/* Subtle Golden Radial Flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 z-10">
              {/* Kicker with Emerald & Gold Touch */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{PORTFOLIO_CONFIG.personal.role.toUpperCase()}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-400">
                  {PORTFOLIO_CONFIG.personal.name}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed mb-8 max-w-xl">
                {PORTFOLIO_CONFIG.personal.shortBio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToWork}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#071611] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 active:scale-98 shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-100 bg-[#071611]/80 hover:bg-[#071611] border border-emerald-600/50 hover:border-amber-400/60 active:scale-98 shadow-sm transition-all cursor-pointer group"
                >
                  <span className="group-hover:text-amber-300 transition-colors">Download Resume</span>
                  <Download className="w-4 h-4 text-amber-400" />
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-6 border-t border-emerald-800/40 flex flex-wrap items-center gap-6 text-xs text-emerald-200/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-medium text-emerald-100">{PORTFOLIO_CONFIG.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Available for freelance & full-time roles</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image with Organic Blob & "Turning Ideas into Reality" */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center">
                {/* Organic curved shape background with Emerald and Golden Rim */}
                <div className="absolute inset-0 m-auto w-[92%] h-[92%] bg-gradient-to-br from-emerald-800/40 via-emerald-950/60 to-amber-900/30 rounded-[48%_52%_60%_40%/45%_55%_45%_55%] transform -rotate-3 border border-emerald-500/20" />

                {/* Handwritten / cursive accent: "Turning Ideas into Reality" in shimmering Gold */}
                <div className="absolute -top-4 -right-2 sm:-right-6 z-20 transform rotate-12 select-none pointer-events-none">
                  <div className="text-right">
                    <p className="font-serif italic text-base sm:text-lg font-bold text-amber-300 drop-shadow-[0_2px_10px_rgba(251,191,36,0.4)] leading-tight">
                      Turning Ideas
                    </p>
                    <p className="font-serif italic text-base sm:text-lg font-bold text-amber-400 drop-shadow-[0_2px_10px_rgba(251,191,36,0.4)] leading-tight">
                      into Reality
                    </p>
                    <svg className="w-24 h-4 ml-auto text-amber-400 -mt-1" viewBox="0 0 100 15" fill="none">
                      <path d="M5 8C30 3 70 3 95 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* User Portrait Container */}
                <div className="relative z-10 w-[84%] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/40 bg-slate-900 group">
                  <img
                    src={PORTFOLIO_CONFIG.personal.avatar}
                    alt={PORTFOLIO_CONFIG.personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle bottom glass overlay with gold accent */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                    <p className="text-xs font-bold text-amber-300">{PORTFOLIO_CONFIG.personal.name}</p>
                    <p className="text-[11px] text-emerald-200 font-normal">{PORTFOLIO_CONFIG.personal.role}</p>
                  </div>
                </div>

                {/* Floating Gold & Emerald Experience Tag */}
                <div className="absolute -bottom-2 -left-2 z-20 px-3 py-1.5 rounded-xl bg-[#0a1f18] border border-amber-400/40 shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-100">
                    4+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
