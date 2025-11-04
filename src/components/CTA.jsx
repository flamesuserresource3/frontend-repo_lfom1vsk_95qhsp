import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-geist text-3xl md:text-5xl">Ready to accelerate growth?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Tell us about your goals. We’ll share a tailored plan for your marketing, AI automation, and web presence.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@youragency.com?subject=Project%20Inquiry%20-%20Digital%20Marketing%20%2F%20AI%20%2F%20Web%20Dev"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Mail size={18} /> Email Us
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Calendar size={18} /> Book a call
          </a>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} Your Agency. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTA;
