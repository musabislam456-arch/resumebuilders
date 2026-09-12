'use client';

import React, { useState } from 'react';
import { ExperienceItem } from '@/types/resume';
import { POWER_ACTION_VERBS } from '@/lib/ats-score';
import { Briefcase, Plus, Trash2, ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';

interface ExperienceStepProps {
  items: ExperienceItem[];
  onChange: (updated: ExperienceItem[]) => void;
}

export const ExperienceStep: React.FC<ExperienceStepProps> = ({ items, onChange }) => {
  const [activeVerbIndex, setActiveVerbIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    const newItem: ExperienceItem = {
      id: `exp-${Date.now()}`,
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      bullets: [''],
    };
    onChange([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (index: number, field: keyof ExperienceItem, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const handleBulletChange = (itemIndex: number, bulletIndex: number, value: string) => {
    const updated = [...items];
    const updatedBullets = [...updated[itemIndex].bullets];
    updatedBullets[bulletIndex] = value;
    updated[itemIndex] = { ...updated[itemIndex], bullets: updatedBullets };
    onChange(updated);
  };

  const handleAddBullet = (itemIndex: number) => {
    const updated = [...items];
    updated[itemIndex] = {
      ...updated[itemIndex],
      bullets: [...updated[itemIndex].bullets, ''],
    };
    onChange(updated);
  };

  const handleRemoveBullet = (itemIndex: number, bulletIndex: number) => {
    const updated = [...items];
    const updatedBullets = updated[itemIndex].bullets.filter((_, idx) => idx !== bulletIndex);
    updated[itemIndex] = {
      ...updated[itemIndex],
      bullets: updatedBullets.length > 0 ? updatedBullets : [''],
    };
    onChange(updated);
  };

  const insertActionVerb = (itemIndex: number, bulletIndex: number, verb: string) => {
    const current = items[itemIndex].bullets[bulletIndex] || '';
    const newText = current ? `${verb} ${current}` : `${verb} `;
    handleBulletChange(itemIndex, bulletIndex, newText);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Work & Professional Experience</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Document your professional roles in reverse-chronological order with quantified achievements.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddItem}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Position</span>
        </button>
      </div>

      {/* XYZ Formula Hint Box */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 text-xs text-slate-300">
        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Pro Tip: Google's "XYZ" Formula</span>
        </div>
        <p className="text-slate-400 leading-relaxed">
          Frame accomplishments as:{' '}
          <strong className="text-white">Accomplished [X] as measured by [Y], by doing [Z]</strong>. Include concrete
          numbers, percentages (%), dollar amounts ($), or team scale.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="p-8 text-center border-2 border-dashed border-slate-800 rounded-xl">
          <Briefcase className="w-8 h-8 mx-auto text-slate-600 mb-2" />
          <p className="text-sm font-medium text-slate-300">No positions added yet</p>
          <p className="text-xs text-slate-500 mt-1 mb-4">Add your current or most recent job experience</p>
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add First Position</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {items.map((item, itemIdx) => (
            <div
              key={item.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4 relative"
            >
              {/* Header bar of job card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Role #{itemIdx + 1}: {item.role || 'Untitled Role'}{' '}
                  {item.company ? `at ${item.company}` : ''}
                </span>

                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-500/10 flex items-center gap-1"
                  title="Remove this role"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    value={item.company}
                    onChange={(e) => handleItemChange(itemIdx, 'company', e.target.value)}
                    placeholder="e.g. Apex Cloud Solutions"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Job Title *</label>
                  <input
                    type="text"
                    value={item.role}
                    onChange={(e) => handleItemChange(itemIdx, 'role', e.target.value)}
                    placeholder="e.g. Senior Software Engineer"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={item.location}
                    onChange={(e) => handleItemChange(itemIdx, 'location', e.target.value)}
                    placeholder="e.g. San Francisco, CA / Remote"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-slate-300 mb-1">Start Date</label>
                    <input
                      type="text"
                      value={item.startDate}
                      onChange={(e) => handleItemChange(itemIdx, 'startDate', e.target.value)}
                      placeholder="e.g. 2022-03 or Mar 2022"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-medium text-slate-300">End Date</label>
                      <label className="flex items-center gap-1 text-[11px] text-blue-400 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={item.current}
                          onChange={(e) => handleItemChange(itemIdx, 'current', e.target.checked)}
                          className="rounded border-slate-700 text-blue-600 focus:ring-0"
                        />
                        <span>Current</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      disabled={item.current}
                      value={item.current ? 'Present' : item.endDate}
                      onChange={(e) => handleItemChange(itemIdx, 'endDate', e.target.value)}
                      placeholder="e.g. 2024-08"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-300">Accomplishments & Key Results (Bullets)</label>
                  <button
                    type="button"
                    onClick={() => handleAddBullet(itemIdx)}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Bullet</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-xs text-slate-500 mt-2 font-mono">•</span>
                        <textarea
                          rows={2}
                          value={bullet}
                          onChange={(e) => handleBulletChange(itemIdx, bIdx, e.target.value)}
                          placeholder="e.g. Spearheaded redesign of core billing engine handling $48M+ annual volume, reducing latency by 35%..."
                          className="flex-1 bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 leading-relaxed"
                        />
                        {item.bullets.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveBullet(itemIdx, bIdx)}
                            className="p-1.5 text-slate-500 hover:text-rose-400 rounded hover:bg-slate-800"
                            title="Remove bullet"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      {/* Quick action verb suggestions for empty/new bullets */}
                      {!bullet && (
                        <div className="flex flex-wrap items-center gap-1 ml-5 text-[10px] text-slate-400">
                          <span className="text-slate-500">Insert power verb:</span>
                          {['Spearheaded', 'Engineered', 'Accelerated', 'Overhauled', 'Orchestrated', 'Reduced'].map(
                            (verb) => (
                              <button
                                key={verb}
                                type="button"
                                onClick={() => insertActionVerb(itemIdx, bIdx, verb)}
                                className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors text-slate-300"
                              >
                                + {verb}
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
