import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 w-[90%] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 blur-3xl" />

        <h2 className="relative font-geist text-3xl md:text-5xl">Ready to accelerate growth?</h2>
        <p className="relative mx-auto mt-3 max-w-2xl text-white/70">
          Tell us about your goals. We’ll share a tailored plan for your marketing, AI automation, and web presence.
        </p>

        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@youragency.com?subject=Project%20Inquiry%20-%20Digital%20Marketing%20%2F%20AI%20%2F%20Web%20Dev"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black shadow-sm transition hover:shadow-lg hover:brightness-95"
          >
            <Mail size={18} /> Email Us
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Calendar size={18} /> Book a call
          </a>
        </div>

        <div className="relative mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} Your Agency. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTA;
