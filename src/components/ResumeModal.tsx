import { X, Download, Printer, Mail, Send, Instagram, MapPin, Briefcase, GraduationCap, Code, Sparkles } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `================================================
${PORTFOLIO_CONFIG.personal.name.toUpperCase()}
${PORTFOLIO_CONFIG.personal.role}
Location: ${PORTFOLIO_CONFIG.personal.location}
Email: ${PORTFOLIO_CONFIG.contact.email.address}
Telegram: ${PORTFOLIO_CONFIG.contact.telegram.displayTag} (${PORTFOLIO_CONFIG.contact.telegram.url})
Instagram: ${PORTFOLIO_CONFIG.contact.instagram.displayTag}
================================================

SUMMARY:
${PORTFOLIO_CONFIG.personal.bio}

CORE SKILLS:
Frontend: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
Backend: Node.js, Express.js, REST APIs, PostgreSQL, MongoDB
Design & Tools: Figma, Git, GitHub, Responsive Web Design

EXPERIENCE:
${PORTFOLIO_CONFIG.experience.map(e => `• ${e.role} | ${e.company} (${e.period})\n  ${e.description}`).join('\n\n')}

PROJECTS:
${PORTFOLIO_CONFIG.projects.map(p => `• ${p.title} (${p.category}): ${p.description}\n  Tech Stack: ${p.tags.join(', ')}`).join('\n\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Aditya_Kumar_Gupta_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="bg-[#0b1f17] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-amber-400/30 overflow-hidden text-emerald-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#071611]">
          <div>
            <h2 id="resume-modal-title" className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Professional Resume</span>
            </h2>
            <p className="text-xs text-amber-300 font-medium">Aditya Kumar Gupta · Full Stack Web Developer</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-100 bg-[#0e271d] border border-emerald-700/50 rounded-lg hover:border-amber-400/50 transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#071611] bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-lg shadow-sm transition-all cursor-pointer"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-emerald-300/70 hover:text-white rounded-lg hover:bg-emerald-900/40 cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-emerald-100/90">
          {/* Identity & Contact */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-emerald-900/50">
            <div>
              <h1 className="text-2xl font-black text-white">
                {PORTFOLIO_CONFIG.personal.name}
              </h1>
              <p className="text-amber-300 font-semibold mt-0.5">
                {PORTFOLIO_CONFIG.personal.role}
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-300/70 mt-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{PORTFOLIO_CONFIG.personal.location}</span>
                <span>·</span>
                <span>{PORTFOLIO_CONFIG.personal.status}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-xs">
              <a
                href={PORTFOLIO_CONFIG.contact.email.url}
                className="flex items-center gap-2 text-emerald-200 hover:text-amber-300"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{PORTFOLIO_CONFIG.contact.email.address}</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.contact.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-200 hover:text-sky-400"
              >
                <Send className="w-3.5 h-3.5 text-sky-400" />
                <span>{PORTFOLIO_CONFIG.contact.telegram.displayTag}</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-200 hover:text-pink-400"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>{PORTFOLIO_CONFIG.contact.instagram.displayTag}</span>
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2">
              Professional Summary
            </h3>
            <p className="leading-relaxed text-emerald-100/80">
              {PORTFOLIO_CONFIG.personal.bio}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-emerald-400" />
              <span>Core Technical Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_CONFIG.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-xs font-semibold bg-[#071912] text-amber-200 rounded-lg border border-emerald-800/60"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Work Experience</span>
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_CONFIG.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-amber-400/50">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h4 className="font-bold text-white">{exp.role}</h4>
                    <span className="text-xs text-amber-300 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-300 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-emerald-200/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Featured Projects</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PORTFOLIO_CONFIG.projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-3 bg-[#071912] rounded-xl border border-emerald-800/60"
                >
                  <h4 className="font-bold text-white text-xs">{proj.title}</h4>
                  <p className="text-xs text-emerald-200/70 mt-1 line-clamp-2">{proj.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {proj.tags.map((t) => (
                      <span key={t} className="text-[10px] text-amber-300 font-mono">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
