'use client';
import { useState, useEffect } from 'react';
import content from '@/data/content.json';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ['hero', 'about', 'winsa', 'mirrors', 'contact'];

  useEffect(() => {
    const container = document.getElementById('snap-container');
    const handleScroll = () => {
      if (!container) return;
      const index = Math.round(container.scrollTop / window.innerHeight);
      setActiveSection(index);
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      
      {/* Side Navigation Dots */}
      <div style={{
        position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)', 
        display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 1000
      }}>
        {sections.map((section, index) => (
          <div 
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              width: '12px', height: '12px', borderRadius: '50%', 
              backgroundColor: activeSection === index ? 'var(--color-accent)' : 'rgba(150, 150, 150, 0.5)',
              cursor: 'pointer', transition: 'all 0.3s ease',
              border: activeSection === index ? '2px solid #ffffff' : 'none',
              boxShadow: activeSection === index ? '0 0 0 2px var(--color-accent)' : 'none'
            }}
          />
        ))}
      </div>

      <main id="snap-container" className="snap-container">
        <div id="hero" className="snap-section">
          <Hero />
        </div>
        <div id="about" className="snap-section">
          <About />
        </div>
        <div id="winsa" className="snap-section">
          <Showcase id="winsa-inner" data={content.winsa_products} />
        </div>
        <div id="mirrors" className="snap-section">
          <Showcase id="mirrors-inner" data={content.mirrors} />
        </div>
        <div id="contact" className="snap-section">
          <Contact />
        </div>
      </main>
    </>
  );
}
