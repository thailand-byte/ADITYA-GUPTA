import { PORTFOLIO_CONFIG, Project } from '../config/portfolio';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export default function Work({ onSelectProject }: WorkProps) {
  // Render project preview mockups with emerald and golden accents
  const renderPreviewMockup = (projectId: string) => {
    switch (projectId) {
      case 'startup-landing-page':
        return (
          <div className="w-full h-full bg-[#05110c] p-4 flex flex-col justify-between text-white relative select-none">
            <div className="flex items-center gap-1.5 border-b border-emerald-900/40 pb-2">
              <div className="w-2 h-2 rounded-full bg-red-400/80" />
              <div className="w-2 h-2 rounded-full bg-amber-400/80" />
              <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
              <span className="text-[9px] text-emerald-400/70 font-mono ml-2">startup.io</span>
            </div>
            <div className="my-auto py-1">
              <span className="text-[8px] font-semibold text-amber-300 uppercase tracking-widest">Next-Gen SaaS</span>
              <h4 className="text-sm font-bold text-white tracking-tight mt-0.5">
                Build Your Dream Project
              </h4>
              <div className="mt-2.5 flex gap-2">
                <div className="h-4 w-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded text-[8px] flex items-center justify-center font-bold text-white">Explore</div>
                <div className="h-4 w-12 bg-emerald-950 rounded border border-amber-500/40 text-[8px] flex items-center justify-center text-amber-300">Docs</div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full" />
          </div>
        );

      case 'finance-tracker-app':
        return (
          <div className="w-full h-full bg-[#081b14] p-3 flex items-center justify-center gap-2 select-none">
            {/* Phone 1 */}
            <div className="w-24 bg-[#0a231a] rounded-lg shadow-md border border-emerald-700/40 p-2 text-white">
              <span className="text-[7px] text-emerald-300/70">Total Wealth</span>
              <div className="text-[11px] font-bold text-amber-300 leading-tight">$2,540</div>
              <div className="h-6 w-full mt-1.5 flex items-end gap-1">
                <div className="w-1.5 h-3 bg-emerald-600 rounded-xs" />
                <div className="w-1.5 h-5 bg-amber-400 rounded-xs" />
                <div className="w-1.5 h-2 bg-emerald-500 rounded-xs" />
                <div className="w-1.5 h-4 bg-teal-400 rounded-xs" />
              </div>
            </div>
            {/* Phone 2 */}
            <div className="w-24 bg-[#0a231a] rounded-lg shadow-md border border-emerald-700/40 p-2 text-white transform translate-y-1">
              <span className="text-[7px] text-emerald-300/70">Performance</span>
              <div className="h-8 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-emerald-400 border-t-amber-400" />
              </div>
              <span className="text-[7px] text-amber-300 font-bold block text-center">+18.4%</span>
            </div>
          </div>
        );

      case 'personal-portfolio-website':
        return (
          <div className="w-full h-full bg-[#06140e] p-4 flex flex-col justify-between text-white relative select-none">
            <div className="flex items-center justify-between border-b border-emerald-900/40 pb-2">
              <span className="text-[9px] font-mono text-amber-300 font-bold">PORTFOLIO</span>
              <span className="text-[8px] text-emerald-400">Emerald Edition</span>
            </div>
            <div className="my-auto py-1">
              <h4 className="text-sm font-bold text-white tracking-tight">Creative Portfolio</h4>
              <p className="text-[9px] text-emerald-200/70 mt-1">Sleek emerald & gold aesthetic</p>
            </div>
            <div className="h-1.5 w-14 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
          </div>
        );

      case 'admin-dashboard':
        return (
          <div className="w-full h-full bg-[#071912] p-3 flex flex-col justify-between text-white select-none border border-emerald-900/40">
            <div className="flex items-center justify-between pb-1.5 border-b border-emerald-900/40">
              <span className="text-[9px] font-bold text-amber-300">Analytics Console</span>
              <span className="text-[8px] text-emerald-300 bg-emerald-950 px-1.5 rounded border border-emerald-700/40">Real-time</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-[#0b241a] p-1.5 rounded border border-emerald-800/40">
                <span className="text-[7px] text-emerald-300/70">Users</span>
                <p className="text-[10px] font-bold text-white">12,450</p>
              </div>
              <div className="bg-[#0b241a] p-1.5 rounded border border-emerald-800/40">
                <span className="text-[7px] text-emerald-300/70">Growth</span>
                <p className="text-[10px] font-bold text-amber-300">+24%</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-amber-400" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="work" className="py-16 sm:py-20 bg-[#081812] border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Golden Sparkle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>SELECTED PROJECTS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              My Work
            </h2>
            <p className="text-sm sm:text-base text-emerald-200/70 mt-1.5">
              Here are some of the projects I've worked on recently.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_CONFIG.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#0b221a] rounded-2xl overflow-hidden border border-emerald-800/40 hover:border-amber-400/60 shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.18)] transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900 border-b border-emerald-900/50">
                {renderPreviewMockup(project.id)}

                {/* Hover overlay hint with gold/emerald accent */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-400 text-[#071611] text-xs font-bold shadow-md">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Meta Content */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-emerald-100/70 mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags in emerald & gold border */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-emerald-900/40">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
