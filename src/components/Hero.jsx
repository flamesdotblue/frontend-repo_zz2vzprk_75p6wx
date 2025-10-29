import { Sparkles, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] w-full overflow-hidden rounded-b-3xl bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs text-indigo-700 shadow-sm">
              <Sparkles size={14} />
              1:1 mentorship that adapts to you
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Learn faster with a personal tutor by your side
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Book live sessions, follow a tailored roadmap, and get feedback from top mentors to reach your goals in record time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Get started free
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
                <Play size={16} />
                See how it works
              </button>
            </div>
            <p className="mt-3 text-xs text-zinc-500">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
