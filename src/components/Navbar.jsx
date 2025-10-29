import { BookOpen, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
              <BookOpen size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              MentorPath
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">Features</a>
            <a href="#mentors" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">Mentors</a>
            <a href="#pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50">
              <User size={16} />
              Sign in
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
              Get started
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-zinc-200 p-2 text-zinc-700 hover:bg-zinc-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">Features</a>
            <a href="#mentors" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">Mentors</a>
            <a href="#pricing" className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">Pricing</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 rounded-lg border border-zinc-200 bg-white px-3.5 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50">Sign in</button>
              <button className="flex-1 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">Get started</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
