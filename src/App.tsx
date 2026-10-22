import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import { Project } from './config/portfolio';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-[#071510] text-emerald-100 flex flex-col font-sans selection:bg-amber-400 selection:text-[#071611]">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Emerald and Golden accents */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* My Work Section */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Section */}
        <About />

        {/* Bottom Split Section: My Skills (Left) + Let's Connect (Right) */}
        <section className="py-16 sm:py-20 border-t border-emerald-900/40 bg-[#071611]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Skills />
              </div>
              <div className="hidden lg:block lg:col-span-1 border-l border-emerald-800/30" />
              <div className="lg:col-span-6">
                <Contact />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
