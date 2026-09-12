import React from 'react';
import Link from 'next/link';
import { FileText, ShieldCheck, CheckCircle2, Lock, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Security */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                ResumeBuilder <span className="text-blue-400">Pro</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Professional resume architecture platform engineered for 2026 applicant tracking systems.
              Build high-converting executive resumes with live preview and instant PDF export.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>100% Client-Side Private Storage</span>
            </div>
          </div>

          {/* Col 2: Core Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200">Tools & Features</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/builder" className="hover:text-white transition-colors">
                  Resume Builder Form
                </Link>
              </li>
              <li>
                <Link href="/builder?template=modern-executive" className="hover:text-white transition-colors">
                  Modern Executive Template
                </Link>
              </li>
              <li>
                <Link href="/builder?template=ats-minimal" className="hover:text-white transition-colors">
                  ATS Minimalist Parser Template
                </Link>
              </li>
              <li>
                <Link href="/builder?template=classic-corporate" className="hover:text-white transition-colors">
                  Classic Corporate Template
                </Link>
              </li>
              <li>
                <Link href="/builder" className="hover:text-white transition-colors">
                  Real-time ATS Readiness Score
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Career Guides & Articles */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200">Career Guides</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog/ats-friendly-resume-tips-2026" className="hover:text-white transition-colors">
                  ATS-Friendly Resume Tips 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/common-resume-mistakes-to-avoid" className="hover:text-white transition-colors">
                  Common Resume Mistakes to Avoid
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-write-impactful-work-bullets-xyz-formula"
                  className="hover:text-white transition-colors"
                >
                  The Google XYZ Bullet Formula
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors font-medium text-blue-400">
                  Browse All Articles & Insights →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-200">Company & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us & Editorial Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (No Data Selling)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ResumeBuilder Pro. All rights reserved. Independent career tool.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero server retention — Data stored in your local browser</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
