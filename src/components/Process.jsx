import React from 'react';
import { Search, Brain, Wrench, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Audit, research, ICP definition, and success metrics to align on outcomes.',
  },
  {
    icon: Brain,
    title: 'Strategize',
    desc: 'A clear, testable roadmap across channels, content, and product experience.',
  },
  {
    icon: Wrench,
    title: 'Build & Automate',
    desc: 'Ship web experiences, launch campaigns, and deploy AI agents into your stack.',
  },
  {
    icon: BarChart3,
    title: 'Scale',
    desc: 'Optimize, iterate, and scale what works with data-backed decisions.',
  },
];

const Process = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0b] to-[#0e0e10] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-geist text-3xl md:text-5xl">How We Work</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A simple, proven framework to deliver measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-xs uppercase tracking-wide text-white/50">Step {i + 1}</div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
