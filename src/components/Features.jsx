import React from 'react';
import { CalendarCheck, MessageSquare, NotebookPen, Target } from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: 'Weekly 1:1 Sessions',
    desc: 'Dedicated time with your mentor to review progress, unblock challenges, and set goals.',
  },
  {
    icon: NotebookPen,
    title: 'Project-Based Learning',
    desc: 'Build portfolio-ready projects with step-by-step guidance and real-world feedback.',
  },
  {
    icon: MessageSquare,
    title: 'Async Feedback',
    desc: 'Get prompt feedback on code and design between calls via chat and annotated reviews.',
  },
  {
    icon: Target,
    title: 'Personalized Roadmaps',
    desc: 'A tailored curriculum aligned with your background, pace, and career goals.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to grow</h2>
          <p className="mt-3 text-slate-600">Structured, human-centered mentorship that adapts to you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-cyan-500/90 to-violet-600/90 text-white flex items-center justify-center shadow">
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
