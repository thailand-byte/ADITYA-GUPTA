import { X, ExternalLink, Github, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Project } from '../config/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-[#0b1f17] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-amber-400/30 overflow-hidden text-emerald-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Emerald & Gold Accent */}
        <div className="relative h-44 bg-gradient-to-br from-[#0c261d] via-[#091e17] to-[#06140f] p-6 flex flex-col justify-end text-white overflow-hidden border-b border-emerald-900/60">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[#06140f]/80 hover:bg-[#06140f] text-emerald-200 rounded-full border border-emerald-800/60 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            <span className="text-xs uppercase tracking-wider font-bold px-2.5 py-1 bg-amber-400 text-[#071611] rounded-md shadow-xs w-fit">
              {project.category}
            </span>
            <h2 id="project-modal-title" className="text-2xl font-black mt-2 tracking-tight text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">Overview</h3>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Key Highlights & Engineering Feats</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#071912] border border-emerald-800/50 text-xs text-emerald-100/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="pt-4 border-t border-emerald-900/50 flex items-center justify-between gap-4">
            <span className="text-xs text-amber-300/80 font-medium font-mono">
              {project.metrics || 'Responsive & Scalable'}
            </span>
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-emerald-100 bg-[#0e271d] hover:bg-[#123024] border border-emerald-700/60 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#071611] bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 rounded-lg shadow-sm transition-all"
              >
                <span>Discuss Similar Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
