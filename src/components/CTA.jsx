import React from 'react';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Start with a free intro call</h2>
        <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Meet your mentor, align on goals, and design a plan that fits your schedule and learning style.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-1 text-slate-600">Perfect to test the waters</p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-slate-900">$149</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="mt-4 text-sm text-slate-600 list-disc pl-5 space-y-1">
              <li>2 x 45-min 1:1 sessions</li>
              <li>Async chat support</li>
              <li>Project feedback</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">
              Get started
            </a>
          </div>

          <div className="rounded-2xl border-2 border-slate-900 bg-white p-8 text-left shadow-md">
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <p className="mt-1 text-slate-600">For consistent, accelerated growth</p>
            <div className="mt-6">
              <span className="text-3xl font-bold text-slate-900">$349</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="mt-4 text-sm text-slate-600 list-disc pl-5 space-y-1">
              <li>4 x 60-min 1:1 sessions</li>
              <li>Priority async feedback</li>
              <li>Custom learning roadmap</li>
              <li>Interview prep & mock sessions</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">
              Book intro call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
