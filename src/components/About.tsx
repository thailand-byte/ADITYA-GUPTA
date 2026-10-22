import { Code2, Server, Laptop, Rocket, MapPin, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

export default function About() {
  const pillars = [
    {
      icon: Laptop,
      title: 'Frontend Craftsmanship',
      description: 'Creating pixel-perfect, accessible, and high-speed user interfaces with React, modern CSS, and fluid motion.',
    },
    {
      icon: Server,
      title: 'Robust Backend & APIs',
      description: 'Engineering resilient RESTful services, database schemas, and authenticated workflows using Node.js & Express.',
    },
    {
      icon: Rocket,
      title: 'Performance & Architecture',
      description: 'Optimizing core web vitals, Lighthouse scores, and semantic structures for maximum discovery and scale.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#071611] border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Bio */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-emerald-700/40 bg-[#0a1e16] p-2 shadow-2xl">
                <img
                  src={PORTFOLIO_CONFIG.personal.avatar}
                  alt={PORTFOLIO_CONFIG.personal.name}
                  className="rounded-xl w-full h-[360px] object-cover object-top filter contrast-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Gold & Emerald Stat Card */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-[#071611] p-4 rounded-2xl shadow-[0_10px_30px_rgba(251,191,36,0.3)] border-2 border-[#071611] flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-[#071611] shrink-0" />
                <div>
                  <div className="text-2xl font-black leading-none">{PORTFOLIO_CONFIG.personal.experienceYears}</div>
                  <div className="text-xs font-bold text-[#071611]/80 mt-1">Years Building for Web</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>About Aditya</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Passionate About Building Modern, Scalable Web Applications
            </h2>

            <p className="text-base text-emerald-100/80 leading-relaxed mb-6">
              {PORTFOLIO_CONFIG.personal.bio}
            </p>

            <div className="flex items-center gap-2 text-sm text-emerald-200/80 mb-8">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Based in <strong className="text-white">{PORTFOLIO_CONFIG.personal.location}</strong> — Working with clients and teams worldwide.</span>
            </div>

            {/* Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#0b221a] border border-emerald-800/40 hover:border-amber-400/50 transition-all hover:-translate-y-0.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-3 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-xs text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-emerald-200/70 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
