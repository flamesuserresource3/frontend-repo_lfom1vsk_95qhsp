import React from 'react';
import { Search, Brain, Wrench, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    desc: 'Audit, market research, ICP definition, and success metrics to align on goals.',
  },
  {
    icon: Brain,
    title: 'Strategize',
    desc: 'A clear, testable plan across channels, content, and product experience.',
  },
  {
    icon: Wrench,
    title: 'Build & Automate',
    desc: 'Launch campaigns, ship web experiences, and deploy AI agents into your stack.',
  },
  {
    icon: BarChart3,
    title: 'Scale',
    desc: 'Optimize, iterate, and scale what works with data-driven decisions.',
  },
];

const Process = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-geist text-3xl md:text-5xl">Our Process</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A simple, proven framework to deliver measurable growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-sm text-white/50">Step {i + 1}</div>
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
