export default function Sections() {
  return (
    <div id="main" className="bg-[#0A1E3A] text-slate-200">
      <Section id="about" title="About">
        <p>
          We are a research-first organization advancing neural intelligence with reproducible science and production-grade engineering. Our mission is to design secure, scalable AI systems that benefit people and industry.
        </p>
      </Section>
      <Section id="research" title="Research">
        <ul className="list-disc pl-6 space-y-2">
          <li>Architectures: sparse mixture-of-experts, graph neural fields, diffusion planning.</li>
          <li>Optimization: curriculum RL, second-order methods at scale, quantization-aware training.</li>
          <li>Safety & Interpretability: mechanistic analysis, red-teaming, evaluation suites.</li>
        </ul>
      </Section>
      <Section id="tools" title="Tools & Platform">
        <p>
          SDKs and APIs for rapid experimentation, plus managed clusters for large-scale training. Cloud-native, IaC-enabled, and observability built-in.
        </p>
      </Section>
      <Section id="data" title="Data & Analytics">
        <p>
          End-to-end governance, lineage, and privacy-preserving analytics. Dashboards turn complex pipelines into actionable insight.
        </p>
      </Section>
      <Section id="publications" title="Publications Gallery">
        <p>
          Explore peer-reviewed papers with abstracts, figures, and downloadable PDFs. Filter by area, venue, and year.
        </p>
      </Section>
      <Section id="careers" title="Careers">
        <p>
          We hire curious builders. Competitive benefits, flexible research time, and a culture that values rigor and kindness.
        </p>
      </Section>
      <Section id="contact" title="Contact">
        <p>
          Interested in collaborating? Reach out at contact@neuralabs.ai
        </p>
      </Section>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="mt-4 text-slate-300 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
