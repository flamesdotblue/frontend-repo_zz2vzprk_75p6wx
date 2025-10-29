import React from 'react';
import { Compass, Code2, Briefcase, BookOpen } from 'lucide-react';

const items = [
  {
    icon: Compass,
    title: 'Goal Alignment',
    desc: 'We map your current level, interests, and timeline to set clear milestones.'
  },
  {
    icon: Code2,
    title: 'Build Real Projects',
    desc: 'Ship portfolio-worthy work with reviews on architecture, UX, and performance.'
  },
  {
    icon: BookOpen,
    title: 'Weekly Guidance',
    desc: 'Stay accountable with 1:1 sessions, async check-ins, and personalized tasks.'
  },
  {
    icon: Briefcase,
    title: 'Career Acceleration',
    desc: 'Interview prep, resume feedback, and referrals to help land your next role.'
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">A simple, proven process that keeps you moving forward.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-violet-600/90 to-cyan-500/90 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
