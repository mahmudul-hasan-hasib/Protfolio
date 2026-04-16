import { useState } from 'react';
import BackgroundBlobs from './components/custom/BackgroundBlobs';
import Footer from './components/layout/Footer';
import MobileMenu from './components/layout/MobileMenu';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import FeaturedCaseStudy from './components/sections/FeaturedCaseStudy';
import GithubActivity from './components/sections/GithubActivity';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050014] text-white overflow-x-hidden">
      <BackgroundBlobs />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedCaseStudy />
        <Projects />
        <Experience />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;