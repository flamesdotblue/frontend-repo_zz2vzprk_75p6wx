import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      {/* Soft background accents that don't block anything */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Copy block */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-slate-200/70 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              New: Personalized mentor matching
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Learn faster with 1:1 mentorship
            </h1>
            <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              A light, distraction‑free space to meet world‑class mentors, build real projects, and hit your goals with weekly guidance.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 shadow-sm">
                Book a free intro call
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-900 hover:bg-slate-50">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                <img alt="" src="https://i.pravatar.cc/40?img=12" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/40?img=21" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/40?img=31" className="h-8 w-8 rounded-full ring-2 ring-white" />
                <img alt="" src="https://i.pravatar.cc/40?img=42" className="h-8 w-8 rounded-full ring-2 ring-white" />
              </div>
              <span>Trusted by 5,000+ learners</span>
            </div>
          </div>

          {/* Illustration panel - light themed and always visible */}
          <div className="relative">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {/* subtle grid */}
              <svg aria-hidden className="absolute inset-0 h-full w-full text-slate-100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.7" />
                  </pattern>
                  <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#fade)" />
              </svg>

              {/* Content cards */}
              <div className="relative p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-xs text-slate-500">Weekly session</div>
                    <div className="mt-2 font-semibold text-slate-900">Frontend Architecture</div>
                    <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500 to-violet-600" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">Feedback</div>
                      <span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Approved</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">“Refactor useEffect into a custom hook and add optimistic updates.”</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:col-span-2">
                    <div className="text-xs text-slate-500">Roadmap</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['JS Fundamentals','React Patterns','System Design','Interview'].map((tag) => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-slate-50 text-slate-700 border border-slate-200">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
