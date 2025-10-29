import Spline from "@splinetool/react-spline";
import { Sparkles, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[540px] w-full overflow-hidden rounded-b-3xl bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4h8Zi7w0B0u4qV1K/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs text-indigo-700 shadow-sm">
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
