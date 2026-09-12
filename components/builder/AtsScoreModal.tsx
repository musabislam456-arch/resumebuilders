'use client';

import React from 'react';
import { AtsCheckResult } from '@/lib/ats-score';
import { CheckCircle2, AlertCircle, X, ShieldCheck, Zap, Award } from 'lucide-react';

interface AtsScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: AtsCheckResult;
}

export const AtsScoreModal: React.FC<AtsScoreModalProps> = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  const getGradeBadge = (grade: AtsCheckResult['grade']) => {
    switch (grade) {
      case 'A+':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'A':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case 'B':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/40';
      case 'C':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      default:
        return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">ATS Algorithm Diagnostic</h3>
              <p className="text-xs text-slate-400">Tested against 2026 Workday, Greenhouse & Taleo benchmarks</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-6 overflow-y-auto flex-1">
          {/* Top Score Banner */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <div className="text-xs text-slate-400 font-medium">Composite ATS Readiness</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-extrabold text-white tracking-tight">{result.score}</span>
                <span className="text-slate-500 text-sm font-semibold">/ 100</span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold border ${getGradeBadge(
                  result.grade
                )} flex items-center gap-1`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Grade {result.grade}</span>
              </span>
              <span className="text-[11px] text-slate-400 mt-1 font-mono">
                {result.wordCount} words indexed
              </span>
            </div>
          </div>

          {/* Quick Metrics Badges */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Quantified Bullets</span>
                <strong className="text-white text-sm">{result.metricsFoundCount} metrics</strong>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-blue-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[10px]">Power Action Verbs</span>
                <strong className="text-white text-sm">{result.actionVerbsCount} verbs</strong>
              </div>
            </div>
          </div>

          {/* Check List Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              System Validation Breakdown
            </h4>

            <div className="space-y-2.5">
              {result.checks.map((check) => (
                <div
                  key={check.id}
                  className={`p-3.5 rounded-xl border transition-colors ${
                    check.passed
                      ? 'bg-slate-950/60 border-slate-800/80'
                      : 'bg-amber-950/20 border-amber-800/40'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {check.passed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold ${check.passed ? 'text-slate-200' : 'text-amber-300'}`}>
                          {check.title}
                        </span>
                        <span className="text-[10px] text-slate-500 font-mono">+{check.weight} pts</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{check.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
          >
            Got It, Back to Editing
          </button>
        </div>
      </div>
    </div>
  );
};
