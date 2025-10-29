import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 md:py-28">
      {/* soft grid */}
      <div className="pointer-events-none absolute inset-0">
        <svg aria-hidden className="absolute inset-0 h-full w-full text-slate-100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-cta" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl shadow-xl">
          {/* light theme gradients */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -left-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2">
            <div className="p-10 md:p-14">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Start with a free intro call</h2>
              <p className="mt-3 text-slate-600 max-w-xl">
                Meet your mentor, align on goals, and design a plan that fits your schedule and learning style.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10">
                  Book intro call
                </a>
                <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white shadow">
                  Explore features
                </a>
              </div>

              <p className="mt-6 text-sm text-slate-500">No commitment — just a quick chat to see if it’s a fit.</p>
            </div>

            {/* Right side pricing highlight */}
            <div className="p-10 md:p-14 bg-gradient-to-br from-white/60 to-slate-50/60 border-t lg:border-l lg:border-t-0 border-slate-200">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Starter', price: '$149/mo', items: ['2 × 45-min 1:1', 'Async chat support', 'Project feedback'] },
                  { title: 'Pro', price: '$349/mo', items: ['4 × 60-min 1:1', 'Priority feedback', 'Custom roadmap', 'Mock interviews'] },
                ].map((tier) => (
                  <div key={tier.title} className="group relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-shadow">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-slate-900/5 to-slate-900/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-slate-900">{tier.title}</h3>
                      <div className="mt-2 text-2xl font-bold text-slate-900">{tier.price}</div>
                      <ul className="mt-3 text-sm text-slate-600 space-y-1">
                        {tier.items.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                      <a href="#" className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 shadow">
                        Choose {tier.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
