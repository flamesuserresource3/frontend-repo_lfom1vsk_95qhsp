import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#060608] text-white antialiased">
      {/* Subtle radial gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-0 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(88,28,135,0.25),transparent_60%)]" />

      {/* Grid overlay for texture */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <Hero />
      <Services />
      <Process />
      <CTA />
    </div>
  );
}

export default App;
