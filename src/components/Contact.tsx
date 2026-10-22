import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Mail, Send, Instagram, MapPin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.contact.email.address);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div id="contact" className="w-full">
      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>LET'S CONNECT</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Let's Connect
      </h2>
      <p className="text-sm text-emerald-200/80 leading-relaxed mb-6">
        Have a project idea, want to collaborate, or just want to talk about web development? Feel free to reach out!
      </p>

      {/* Contact Details List with Emerald & Gold Touch */}
      <div className="space-y-3 mb-6 text-sm text-emerald-100">
        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
            <Mail className="w-4 h-4" />
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.email.url}
            className="hover:text-amber-300 font-medium transition-colors truncate"
          >
            {PORTFOLIO_CONFIG.contact.email.address}
          </a>
          <button
            onClick={copyEmail}
            className="text-xs text-emerald-400/70 hover:text-amber-300 ml-1 p-1 cursor-pointer"
            title="Copy email"
            aria-label="Copy email address"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Telegram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
            <Send className="w-4 h-4" />
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 font-medium transition-colors font-mono"
          >
            {PORTFOLIO_CONFIG.contact.telegram.displayTag}
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-pink-400/30 flex items-center justify-center text-pink-400 shrink-0">
            <Instagram className="w-4 h-4" />
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-300 font-medium transition-colors font-mono"
          >
            {PORTFOLIO_CONFIG.contact.instagram.displayTag}
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <span>{PORTFOLIO_CONFIG.personal.location}</span>
        </div>
      </div>

      {/* 3 Quick Action Contact Cards in Emerald & Golden Styling */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {/* Card 1: Email */}
        <div className="p-3.5 rounded-xl border border-emerald-800/50 bg-[#0b221a] hover:border-amber-400/60 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>{PORTFOLIO_CONFIG.contact.email.label}</span>
              <Mail className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-[11px] text-emerald-200/70 truncate mb-3">
              {PORTFOLIO_CONFIG.contact.email.address}
            </p>
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.email.url}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#071611] bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 transition-all shadow-sm active:scale-98"
          >
            <span>{PORTFOLIO_CONFIG.contact.email.buttonText}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Card 2: Telegram */}
        <div className="p-3.5 rounded-xl border border-emerald-800/50 bg-[#0b221a] hover:border-sky-400/60 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>{PORTFOLIO_CONFIG.contact.telegram.label}</span>
              <Send className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <p className="text-[11px] text-emerald-200/70 font-mono mb-3 truncate">
              {PORTFOLIO_CONFIG.contact.telegram.displayTag}
            </p>
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-emerald-100 bg-emerald-950 hover:bg-emerald-900 border border-sky-400/40 hover:border-sky-300 transition-all active:scale-98"
          >
            <span>{PORTFOLIO_CONFIG.contact.telegram.buttonText}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Card 3: Instagram */}
        <div className="p-3.5 rounded-xl border border-emerald-800/50 bg-[#0b221a] hover:border-pink-400/60 hover:shadow-[0_0_15px_rgba(244,114,182,0.15)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
              <span>{PORTFOLIO_CONFIG.contact.instagram.label}</span>
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <p className="text-[11px] text-emerald-200/70 font-mono truncate mb-3">
              {PORTFOLIO_CONFIG.contact.instagram.displayTag}
            </p>
          </div>
          <a
            href={PORTFOLIO_CONFIG.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-emerald-100 bg-emerald-950 hover:bg-emerald-900 border border-pink-400/40 hover:border-pink-300 transition-all active:scale-98"
          >
            <span>{PORTFOLIO_CONFIG.contact.instagram.buttonText}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
