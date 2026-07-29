import { useEffect } from 'react';
import {
  Navigation,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  Footer,
  AnimatedBackground,
} from './components';

function App() {
  useEffect(() => {
    // Prevent layout shift and smooth scroll on load
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-navy text-white relative">
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Sections */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
