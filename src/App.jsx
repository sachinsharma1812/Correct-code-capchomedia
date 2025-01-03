import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TeamSection from './components/sections/Team/TeamSection';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
