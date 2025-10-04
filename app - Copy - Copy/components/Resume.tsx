interface ResumeProps {
  darkMode: boolean;
}

export default function Resume({ darkMode }: ResumeProps) {
  return (
    <section id="resume" className="min-h-screen p-16 bg-cover bg-center" style={{ backgroundImage: darkMode ? "url('https://images.unsplash.com/photo-1500206329404-5057e0aefa48?w=1200')" : "url('https://images.unsplash.com/photo-1512566393827-78dc4c8d8292?w=1200')" }}>
      <h2 className="text-4xl font-bold mb-8">Resume</h2>
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl">
        <h3 className="text-2xl font-bold mb-4">Moss Victor</h3>
        <p className="italic mb-4">Large Language Model (LLM) Specialist ✦ Passion-Driven Creator</p>
        <h4 className="font-semibold mb-2">Professional Summary</h4>
        <p className="mb-4">I work with Large Language Models (LLMs) not just as a career, but as a passion. Every project brings me closer to exploring what AI can really do—how it can amplify creativity, improve collaboration, and create lasting impact. For me, LLMs are more than tools—they bring out the best in me.</p>

        <h4 className="font-semibold mb-2">Core Strengths</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Evaluation harnesses, rubric scoring, regression checks</li>
          <li>Clear specs, documentation, and stakeholder-aligned deliverables</li>
          <li>Rapid prototyping with public demos and shipped projects</li>
          <li>Collaborative problem-solving across technical + creative teams</li>
        </ul>

        <h4 className="font-semibold mb-2">Skills</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>Python</li>
          <li>JavaScript</li>
          <li>Frontend Development</li>
          <li>Backend Development</li>
        </ul>

        <h4 className="font-semibold mb-2">Experience</h4>
        <ul className="list-disc ml-6 mb-4">
          <li>AI Strategy & Development – Designed and refined evaluation frameworks for LLM-driven projects, ensuring measurable performance.</li>
          <li>Prompt Engineering – Created adaptive, persona-driven prompt suites demonstrating tone, clarity, and emotional intelligence.</li>
          <li>Portfolio & Public Demos – Built interactive showcases that blend technical rigor with creative storytelling.</li>
        </ul>

        <h4 className="font-semibold mb-2">Education / Certifications</h4>
        <p className="mb-4">Self-taught, with continuous learning through online resources, hands-on projects, and community collaboration.</p>

        <h4 className="font-semibold mb-2">Contact</h4>
        <p>Email: mossvictor600@gmail.com</p>
        <p>GitHub: Moss-Topman</p>
        <a href="/resume.pdf" download className="inline-block mt-6 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">Download Resume</a>
      </div>
    </section>
  );
}