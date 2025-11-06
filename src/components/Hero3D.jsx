import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full bg-[#0A1E3A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 items-center gap-10">
        <div className="text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Pushing the Boundaries of Neural Intelligence
          </h1>
          <p className="mt-4 text-slate-200 max-w-prose">
            Neura AI Research Labs designs the future of intelligent systems through rigorous research, powerful tools, and open collaboration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#research" className="rounded-md bg-cyan-400 text-[#0A1E3A] px-5 py-2.5 font-semibold shadow hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              Explore Research
            </a>
            <a href="#tools" className="rounded-md border border-cyan-300/60 text-cyan-200 px-5 py-2.5 font-semibold hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              Try the Platform
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A1E3A] via-transparent to-transparent opacity-70" />
        </div>
      </div>
    </section>
  );
}
