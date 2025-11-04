import React from 'react';
import { Megaphone, Bot, Code2 } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Performance campaigns, SEO, and funnels engineered to acquire and retain customers at scale.',
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    accent: 'from-violet-400 to-fuchsia-400',
  },
  {
    icon: Bot,
    title: 'AI Agent Build',
    desc: 'Custom AI agents that automate support, qualification, outreach, and internal workflows 24/7.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    accent: 'from-cyan-400 to-blue-400',
  },
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'SEO-first websites and web apps with conversion-focused UX/UI and best-in-class performance.',
    gradient: 'from-amber-500/20 to-orange-500/20',
    accent: 'from-amber-400 to-orange-400',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-geist text-3xl md:text-5xl">Capabilities</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            A full-stack growth partner blending strategy, creativity, and automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${s.gradient} opacity-0 blur-2xl transition group-hover:opacity-100`} />
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                  <span className={`bg-gradient-to-r ${s.accent} bg-clip-text text-transparent`}>Learn more</span>
                  <span aria-hidden>→</span>
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
