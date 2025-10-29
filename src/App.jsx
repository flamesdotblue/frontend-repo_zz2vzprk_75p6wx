import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-slate-200/60 bg-white py-8 text-sm text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} MentorLink. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-900" href="#privacy">Privacy</a>
            <a className="hover:text-slate-900" href="#terms">Terms</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
