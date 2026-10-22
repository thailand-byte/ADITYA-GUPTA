import { useState, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';
import { Menu, X, Mail, Send, Instagram, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
      const sections = ['home', 'about', 'work', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06140f]/90 backdrop-blur-md shadow-lg shadow-black/20 border-b border-emerald-900/40 py-3.5'
          : 'bg-[#081711]/75 backdrop-blur-xs border-b border-emerald-950/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Name with Emerald & Gold Touch */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2 focus:outline-hidden group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-amber-400 p-0.5 shadow-[0_0_12px_rgba(16,185,129,0.3)]">
            <div className="w-full h-full bg-[#081711] rounded-[7px] flex items-center justify-center">
              <span className="text-xs font-black text-amber-300 font-mono">AK</span>
            </div>
          </div>
          <span>Aditya</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400">
            Kumar Gupta
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-amber-300 font-semibold'
                    : 'text-emerald-100/70 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Socials */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PORTFOLIO_CONFIG.contact.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-200/80 hover:text-amber-300 rounded-lg hover:bg-emerald-950/60 transition-colors"
            aria-label="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_CONFIG.contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-200/80 hover:text-amber-300 rounded-lg hover:bg-emerald-950/60 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_CONFIG.contact.email.url}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#06140f] bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.25)] transition-all active:scale-98"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Me</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-emerald-200 hover:text-amber-300 hover:bg-emerald-950/60 rounded-lg focus:outline-hidden"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#06140f] border-b border-emerald-900/50 px-6 pt-3 pb-6 shadow-2xl animate-in fade-in duration-150">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-2 text-base rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-950/80 text-amber-300 font-semibold border-l-2 border-amber-400'
                    : 'text-emerald-100/80 hover:bg-emerald-950/40 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-emerald-900/40 flex items-center gap-3">
              <a
                href={PORTFOLIO_CONFIG.contact.email.url}
                className="flex-1 text-center py-2.5 text-xs font-semibold text-[#06140f] bg-gradient-to-r from-amber-300 to-yellow-400 rounded-lg shadow-sm"
              >
                Email Me
              </a>
              <a
                href={PORTFOLIO_CONFIG.contact.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-200 bg-emerald-950/60 rounded-lg hover:text-amber-300"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_CONFIG.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-emerald-200 bg-emerald-950/60 rounded-lg hover:text-amber-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
