import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ModulesGrid from './components/ModulesGrid';
import Sections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-[#0A1E3A] text-white selection:bg-cyan-400 selection:text-[#0A1E3A]">
      <Navbar />
      <main id="main">
        <Hero3D />
        <ModulesGrid />
        <Sections />
      </main>
      <footer className="bg-[#0A1E3A] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-slate-300 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Neura AI Research Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#publications" className="hover:text-white">View Publications</a>
            <a href="#careers" className="hover:text-white">Join Our Team</a>
            <a href="#contact" className="hover:text-white">Request Collaboration</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
