import React from 'react';
import { Megaphone, Bot, Code2 } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Performance campaigns, SEO, and funnels engineered to acquire and retain customers at scale.',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    icon: Bot,
    title: 'AI Agent Build',
    desc: 'Custom AI agents that automate support, qualification, outreach, and workflows 24/7.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Lightning-fast, SEO-first websites and web apps with conversion-focused UX/UI.',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-geist text-3xl md:text-5xl">What We Do</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A full-stack growth partner blending strategy, creativity, and cutting-edge technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className={`pointer-events-none absolute -inset-0.5 bg-gradient-to-br ${s.gradient} opacity-0 blur-2xl transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-6">
                  <a href="#contact" className="text-sm font-medium text-white underline-offset-4 hover:underline">
                    Start a project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
