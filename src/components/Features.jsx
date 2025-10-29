import { Video, Calendar, Shield, Trophy } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 1:1 Sessions",
    desc: "Meet your mentor face-to-face with HD video and interactive whiteboards.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Book sessions instantly across time zones with calendar sync.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "Verified mentors, protected payments, and private learning spaces.",
  },
  {
    icon: Trophy,
    title: "Goal Tracking",
    desc: "Personalized roadmaps and progress reports keep you on target.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Everything you need to master any subject
          </h2>
          <p className="mt-3 text-lg text-zinc-600">
            A modern platform designed for meaningful mentorship and measurable results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-1 text-sm leading-6 text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
