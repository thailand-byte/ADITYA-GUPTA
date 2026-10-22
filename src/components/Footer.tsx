import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Mail, Send, Instagram, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05110c] text-emerald-200/70 py-10 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-emerald-900/40">
          {/* Identity & Role */}
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
              <span>{PORTFOLIO_CONFIG.personal.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </h3>
            <p className="text-xs font-semibold text-amber-300">
              {PORTFOLIO_CONFIG.personal.role}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-300/60">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Location: {PORTFOLIO_CONFIG.personal.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <a
              href={PORTFOLIO_CONFIG.contact.email.url}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a1e16] border border-emerald-800/60 text-emerald-100 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
              aria-label="Email Aditya Kumar Gupta"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{PORTFOLIO_CONFIG.contact.email.address}</span>
            </a>

            <a
              href={PORTFOLIO_CONFIG.contact.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a1e16] border border-emerald-800/60 text-emerald-100 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>Telegram ({PORTFOLIO_CONFIG.contact.telegram.displayTag})</span>
            </a>

            <a
              href={PORTFOLIO_CONFIG.contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0a1e16] border border-emerald-800/60 text-emerald-100 hover:text-pink-400 hover:border-pink-400/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram ({PORTFOLIO_CONFIG.contact.instagram.displayTag})</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-[#0a1e16] hover:bg-emerald-900 border border-emerald-800/60 text-emerald-200 hover:text-amber-300 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits & Dynamic Year */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-300/60">
          <p>© {currentYear} {PORTFOLIO_CONFIG.personal.name}. All rights reserved.</p>
          <p className="font-semibold text-amber-300">
            Designed & Built by Aditya Kumar Gupta
          </p>
        </div>
      </div>
    </footer>
  );
}
