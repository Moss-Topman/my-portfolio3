export default function About() {
  const skills = [
    "UI/UX Design", "Product Strategy", "Frontend Development", "Design Systems",
    "User Research", "Prototyping", "Accessibility", "Performance Optimization"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a digital designer and developer with a passion for creating 
                meaningful digital experiences. I believe in the power of simplicity 
                and focus on solving real problems through design and technology.
              </p>
              <p>
                With background in both design and development, I bridge the gap 
                between aesthetics and functionality, ensuring every project is 
                not only beautiful but also performant and accessible.
              </p>
              <p>
                Currently focused on creating digital products that make a 
                positive impact on people's lives.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-lg font-medium mb-6">Areas of Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}