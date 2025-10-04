import Navigation from "./components/layout/Navigation";
import Hero from "./components/layout/sections/Hero";
import VideoShowcase from "./components/layout/sections/VideoShowcase";
import Projects from "./components/layout/sections/Projects";
import About from "./components/layout/sections/About";
import Contact from "./components/layout/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VideoShowcase />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}