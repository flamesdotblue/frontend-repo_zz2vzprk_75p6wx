import React, { useRef } from 'react';
import { CalendarCheck, MessageSquare, NotebookPen, Target } from 'lucide-react';

const features = [
  {
    icon: CalendarCheck,
    title: 'Weekly 1:1 Sessions',
    desc: 'Dedicated time with your mentor to review progress, unblock challenges, and set goals.',
    accent: 'from-cyan-500 to-sky-600',
  },
  {
    icon: NotebookPen,
    title: 'Project-Based Learning',
    desc: 'Build portfolio-ready projects with step-by-step guidance and real-world feedback.',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    icon: MessageSquare,
    title: 'Async Feedback',
    desc: 'Get prompt feedback on code and design between calls via chat and annotated reviews.',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Target,
    title: 'Personalized Roadmaps',
    desc: 'A tailored curriculum aligned with your background, pace, and career goals.',
    accent: 'from-amber-500 to-orange-600',
  },
];

function TiltCard({ children }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8; // deg
    const rotateX = -((y - midY) / midY) * 8; // deg
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="transition-transform duration-200 will-change-transform"
      style={{ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)' }}
    >
      {children}
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-18 md:py-24 bg-gradient-to-b from-white via-white to-slate-50">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-20 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute -bottom-10 right-0 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Everything you need to grow</h2>
          <p className="mt-3 text-slate-600">Structured, human-centered mentorship that adapts to you.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, accent }) => (
            <TiltCard key={title}>
              <div className="group relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-shadow">
                {/* glow ring */}
                <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-20 transition-opacity`} />
                <div className="relative">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
