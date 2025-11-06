import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Tools', href: '#tools' },
  { label: 'Data', href: '#data' },
  { label: 'Publications', href: '#publications' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0A1E3A]/60 bg-[#0A1E3A]/80 border-b border-white/10">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-cyan-500 text-[#0A1E3A] px-3 py-1 rounded">Skip to content</a>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-purple-500 shadow-md shadow-cyan-500/20">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">Neura AI Research Labs</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 px-1 py-2 rounded">
                {label}
              </a>
            ))}
            <a href="#research" className="inline-flex items-center gap-2 rounded-md bg-cyan-400 text-[#0A1E3A] px-4 py-2 text-sm font-semibold shadow hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              Explore Research
            </a>
          </div>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-label="Mobile menu">
            <div className="grid gap-2">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-2 text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {label}
                </a>
              ))}
              <a
                href="#research"
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 font-semibold bg-cyan-400 text-[#0A1E3A] hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Explore Research
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
