import { ArrowRight, Star, Users } from "lucide-react";

export default function CTA() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-indigo-50/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <Star size={14} /> Top-rated mentors
            </div>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Try your first session on us
            </h3>
            <p className="mt-3 text-zinc-600">
              Book a 30-minute intro call to meet your mentor, define goals, and craft your personalized plan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">
                Book a free call <ArrowRight size={16} />
              </button>
              <p className="text-xs text-zinc-500">No commitment required</p>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Starter Plan</p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-4xl font-bold text-zinc-900">$39</span>
                  <span className="text-sm text-zinc-500">/ session</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                <Users size={14} /> Limited time
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li>• Live 1:1 video session (60 min)</li>
              <li>• Personalized learning roadmap</li>
              <li>• Session recordings & notes</li>
              <li>• Priority chat support</li>
            </ul>
            <button className="mt-6 w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800">
              Get started
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} MentorPath. All rights reserved.
        </div>
      </div>
    </section>
  );
}
