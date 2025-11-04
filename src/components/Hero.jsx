import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-transparent text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to blend scene with page aesthetics */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060608]/80 via-[#060608]/50 to-[#060608]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060608]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket size={14} className="text-fuchsia-300" />
          <span>Growth-focused digital experiences</span>
        </div>

        <h1 className="font-geist text-4xl leading-tight md:text-6xl md:leading-[1.1]">
          Elevate Your Brand with
          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-transparent"> AI-Driven Marketing</span>
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-white/80 md:text-lg">
          We build high-converting campaigns, intelligent AI agents, and lightning-fast websites that turn visitors into customers.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#services"
            className="rounded-lg bg-white px-5 py-3 font-medium text-black shadow-sm transition hover:shadow-lg hover:brightness-95"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Get a Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
