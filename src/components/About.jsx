import React from 'react';
import { HeartHandshake, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              About us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Human-first mentorship for real progress</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              We connect motivated learners with battle-tested mentors across software, design, and product. Our approach is simple: structured goals, consistent feedback, and real-world projects.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center"><Users className="h-5 w-5" /></div>
                <p className="mt-3 text-sm text-slate-600">5,000+ learners mentored</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center"><HeartHandshake className="h-5 w-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Carefully vetted mentors</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center"><Globe className="h-5 w-5" /></div>
                <p className="mt-3 text-sm text-slate-600">Global and remote friendly</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Outcome</p>
                <p className="mt-2 font-semibold text-slate-900">Promotion-ready projects</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Support</p>
                <p className="mt-2 font-semibold text-slate-900">Weekly 1:1 + async chat</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Focus</p>
                <p className="mt-2 font-semibold text-slate-900">Hands-on, practical skills</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-500">Pace</p>
                <p className="mt-2 font-semibold text-slate-900">Tailored to your schedule</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
