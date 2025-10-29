import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[88vh] sm:h-[92vh] overflow-hidden bg-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft light gradient veil to keep overall light theme while letting the 3D shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            New cohort opens this month
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
            1:1 mentorship for builders
          </h1>
          <p className="mt-4 md:mt-6 text-slate-600 text-base md:text-lg leading-relaxed">
            Go from curious to confident with weekly guidance, portfolio projects, and a roadmap that molds to you.
          </p>

          {/* Actions */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10">
              Book a free intro call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white shadow">
              Explore features
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex -space-x-2">
              <img alt="" src="https://i.pravatar.cc/40?img=12" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img alt="" src="https://i.pravatar.cc/40?img=21" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img alt="" src="https://i.pravatar.cc/40?img=31" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img alt="" src="https://i.pravatar.cc/40?img=42" className="h-8 w-8 rounded-full ring-2 ring-white" />
            </div>
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              4.9/5 average rating
            </span>
            <span>5,000+ learners</span>
          </div>
        </div>
      </div>

      {/* Ambient corner glows (decorative only) */}
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
    </section>
  );
}
