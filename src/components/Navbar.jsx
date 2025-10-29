import React from 'react';
import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-md">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">MentorLink</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#mentors" className="hover:text-slate-900 transition-colors">Mentors</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#signin" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:bg-slate-100 transition">
            <User className="h-4 w-4" />
            <span>Sign in</span>
          </a>
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition shadow-sm">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
