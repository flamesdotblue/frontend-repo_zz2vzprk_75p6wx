import React from 'react';
import { ShieldCheck, Sparkles, GaugeCircle, Award } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Quality First',
    desc: 'All mentors are vetted for depth, clarity, and real impact — not just titles.',
  },
  {
    icon: GaugeCircle,
    title: 'Measurable Progress',
    desc: 'We track your goals weekly so you can see improvement in black and white.',
  },
  {
    icon: Sparkles,
    title: 'Delightful Experience',
    desc: 'A calm, focused workspace with crisp docs, templates, and examples.',
  },
  {
    icon: Award,
    title: 'Proven Outcomes',
    desc: 'Thousands of learners have shipped projects, earned promotions, and switched careers.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Why choose us</h2>
          <p className="mt-3 text-slate-600">Real mentorship, not generic courses.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-11 w-11 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
