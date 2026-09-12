import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, ArrowRight, Zap, Target, LayoutTemplate, Smartphone, Download, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/30 border border-blue-800/50 text-blue-300 text-sm font-medium mb-8">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Updated for 2026 ATS Algorithms</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15]">
            Build an Executive Resume that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Beats the Bots.</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Stop getting silently rejected. Create a professional, ATS-optimized resume in minutes with our 100% private, client-side builder. No sign-up required.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              href="/builder"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
            >
              <span>Build My Resume Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/blog/ats-friendly-resume-tips-2026"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              <Target className="w-5 h-5 text-slate-400" />
              <span>Read ATS Guide</span>
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>100% Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Zero Data Selling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Instant PDF Export</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props / Features */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why ResumeBuilder Pro?</h2>
            <p className="text-slate-400 text-lg">We stripped away the fluff and focused purely on what gets you hired: clean code, proper semantic structure, and striking typography.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <LayoutTemplate className="w-10 h-10 text-blue-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">ATS-Optimized Templates</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Our templates are engineered specifically for systems like Workday and Greenhouse. No complex tables or multi-column layouts that break parsers.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <FileText className="w-10 h-10 text-emerald-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Live Form-to-Document</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Watch your resume build in real-time. Our dual-pane editor lets you see exactly how your document will look as you type.
              </p>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <Download className="w-10 h-10 text-amber-400 mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">High-Res Vector Export</h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                Export directly to a 300 DPI PDF natively in your browser. Clean, crisp typography that looks perfect on screen or printed on paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-300 leading-relaxed mb-8">
            "I was getting instantly rejected for months. I moved my exact same bullet points into the ATS Minimalist template here, and got three callbacks from Fortune 500 tech companies within a week. The parser structure actually works."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80" alt="Michael T." className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Michael T.</div>
              <div className="text-sm text-slate-400">Senior Product Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-950/20 border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to upgrade your career?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Your data never leaves your browser. Start building your executive resume right now, for free.
          </p>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <FileText className="w-5 h-5" />
            <span>Launch Resume Builder</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
