interface CaseStudiesProps {
  darkMode: boolean;
}

export default function CaseStudies({ darkMode }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="min-h-screen p-16 bg-cover bg-center" style={{ backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1756058811187-6cfc539fdfa6?w=1200')" : "url('https://images.unsplash.com/photo-1527567018838-584d3468eb85?w=1200')" }}>
      <h2 className="text-4xl font-bold mb-8">Case Studies</h2>
      <details className="mb-4 p-6 bg-black bg-opacity-60 rounded-xl">
        <summary className="cursor-pointer font-semibold">Case Study Placeholder</summary>
        <p className="mt-4">Full case study details will be revealed here.</p>
      </details>
    </section>
  );
}