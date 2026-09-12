'use client';

import React from 'react';
import { AlignLeft, Sparkles, Check } from 'lucide-react';

interface SummaryStepProps {
  summary: string;
  onChange: (updated: string) => void;
}

const SAMPLE_HOOKS = [
  {
    title: 'Technology & Engineering Lead',
    text: 'Results-driven Senior Software Engineer with 7+ years of expertise architecting high-throughput distributed systems and cloud services. Proven record reducing platform infrastructure costs by 30% and leading high-velocity engineering squads.',
  },
  {
    title: 'Growth & Product Marketing',
    text: 'Data-driven Marketing Leader with 8+ years scaling B2B SaaS revenue through full-funnel acquisition, organic search hubs, and product-led growth (PLG) conversion engines. Skilled in cross-functional orchestration across product and sales.',
  },
  {
    title: 'Finance & Strategy Specialist',
    text: 'Analytical Corporate Finance Associate with 5+ years executing three-statement financial modeling, LBO valuation, and capital allocation. Led transaction diligence on completed M&A engagements totaling $500M+ deal value.',
  },
  {
    title: 'Early Career / New Graduate',
    text: 'High-achieving Computer Science graduate with hands-on internship experience in full-stack web applications, RESTful APIs, and cloud microservices. Eager to contribute disciplined testing, clean code, and rapid problem-solving.',
  },
];

export const SummaryStep: React.FC<SummaryStepProps> = ({ summary, onChange }) => {
  const wordCount = summary.trim() ? summary.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-5">
      <div className="border-b border-slate-800 pb-3">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <AlignLeft className="w-4 h-4 text-blue-400" />
          <span>Professional Executive Summary</span>
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          A high-impact 2-4 sentence summary placed directly below your header. Highlights your unique value proposition.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-xs font-medium text-slate-300" htmlFor="field-summary">
            Summary Content
          </label>
          <span
            className={`text-xs font-mono ${
              wordCount === 0
                ? 'text-slate-500'
                : wordCount >= 30 && wordCount <= 100
                ? 'text-emerald-400 font-semibold'
                : 'text-amber-400'
            }`}
          >
            {wordCount} words {wordCount >= 30 && wordCount <= 100 ? '✓ (Optimal: 30-100)' : '(Aim for 30-100)'}
          </span>
        </div>

        <textarea
          id="field-summary"
          rows={5}
          value={summary}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Briefly state your years of experience, core industry domain, major quantified achievements, and what specific value you deliver to an organization..."
          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 leading-relaxed"
        />
      </div>

      {/* Quick Hook Suggestions */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Need Inspiration? Insert a Proven Formula:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SAMPLE_HOOKS.map((hook, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onChange(hook.text)}
              className="text-left p-2.5 rounded-md bg-slate-950 border border-slate-800 hover:border-blue-500/60 hover:bg-slate-800/40 transition-all text-xs group"
            >
              <div className="font-semibold text-slate-300 group-hover:text-blue-300 flex items-center justify-between">
                <span>{hook.title}</span>
                <span className="text-[10px] text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Use this →
                </span>
              </div>
              <p className="text-slate-500 text-[11px] line-clamp-2 mt-1">{hook.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
