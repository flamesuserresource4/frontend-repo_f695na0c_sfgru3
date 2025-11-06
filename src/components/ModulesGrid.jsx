import { Brain, FlaskConical, BarChart3, BookOpen, Briefcase } from 'lucide-react';

const modules = [
  {
    id: 'research',
    title: 'Research & Publications',
    desc: 'Peer-reviewed work on neural architectures, optimization, and interpretability.',
    icon: FlaskConical,
    href: '#research'
  },
  {
    id: 'tools',
    title: 'AI Tools & Platform',
    desc: 'SDKs, APIs, and cloud-native workflows for scalable experimentation.',
    icon: Brain,
    href: '#tools'
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    desc: 'Governance, pipelines, visualization, and decision intelligence.',
    icon: BarChart3,
    href: '#data'
  },
  {
    id: 'publications',
    title: 'Publications Gallery',
    desc: 'Browse papers, abstracts, and download PDFs.',
    icon: BookOpen,
    href: '#publications'
  },
  {
    id: 'careers',
    title: 'Careers',
    desc: 'Join our team to build trustworthy AI systems at scale.',
    icon: Briefcase,
    href: '#careers'
  }
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="relative bg-[#0A1E3A] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Explore the Labs</h2>
        <p className="mt-2 text-slate-300 max-w-prose">Orbit the hub, then dive into any module. Each opens into a detailed, glassy panel with smooth transitions.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map(({ id, title, desc, icon: Icon, href }) => (
            <a
              key={id}
              href={href}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur hover:border-cyan-400/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-cyan-300" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{desc}</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/0 transition group-hover:ring-cyan-400/60" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
