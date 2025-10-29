import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[78vh] md:min-h-[84vh] overflow-hidden bg-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft light gradients - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -left-20 h-[28rem] w-[28rem] bg-violet-400/20 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200/60 text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live 1:1 mentorship • Flexible schedules
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            Unlock your potential with world‑class mentors
          </h1>
          <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
            Learn faster with personalized guidance, real projects, and weekly 1:1 sessions. 
            Our mentors are senior engineers, designers, and product leaders from top companies.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 shadow-sm">
              Book a free intro call
            </a>
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white">
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
      </div>

      {/* subtle bottom fade for readability over 3D */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent z-20" />
    </section>
  );
}
