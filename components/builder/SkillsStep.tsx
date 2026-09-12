'use client';

import React, { useState } from 'react';
import { SkillCategory } from '@/types/resume';
import { Wrench, Plus, X, Tag } from 'lucide-react';

interface SkillsStepProps {
  categories: SkillCategory[];
  onChange: (updated: SkillCategory[]) => void;
}

const POPULAR_SUGGESTIONS = [
  'TypeScript',
  'JavaScript',
  'Python',
  'React',
  'Next.js',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
  'AWS',
  'Git',
  'GraphQL',
  'Tailwind CSS',
  'System Design',
  'CI/CD Pipelines',
  'Product Strategy',
  'Google Analytics',
  'Data Modeling',
  'Financial Analysis',
];

export const SkillsStep: React.FC<SkillsStepProps> = ({ categories, onChange }) => {
  const [newTagInputs, setNewTagInputs] = useState<{ [key: string]: string }>({});

  const handleAddCategory = () => {
    const newCat: SkillCategory = {
      id: `skill-${Date.now()}`,
      category: 'Core Competencies',
      items: [],
    };
    onChange([...categories, newCat]);
  };

  const handleRemoveCategory = (id: string) => {
    onChange(categories.filter((c) => c.id !== id));
  };

  const handleCategoryNameChange = (index: number, name: string) => {
    const updated = [...categories];
    updated[index] = { ...updated[index], category: name };
    onChange(updated);
  };

  const handleAddTag = (catIndex: number, tagText: string) => {
    const trimmed = tagText.trim();
    if (!trimmed) return;
    const updated = [...categories];
    const existing = updated[catIndex].items;
    if (!existing.includes(trimmed)) {
      updated[catIndex] = {
        ...updated[catIndex],
        items: [...existing, trimmed],
      };
      onChange(updated);
    }
    setNewTagInputs((prev) => ({ ...prev, [catIndex]: '' }));
  };

  const handleRemoveTag = (catIndex: number, tagIndex: number) => {
    const updated = [...categories];
    updated[catIndex] = {
      ...updated[catIndex],
      items: updated[catIndex].items.filter((_, idx) => idx !== tagIndex),
    };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <Wrench className="w-4 h-4 text-blue-400" />
            <span>Skills & Technical Competencies</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Group skills into distinct categories (e.g. Languages, Cloud, Frameworks) to score high on ATS keywords.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddCategory}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Category</span>
        </button>
      </div>

      {categories.map((cat, catIdx) => (
        <div key={cat.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Category Title</label>
              <input
                type="text"
                value={cat.category}
                onChange={(e) => handleCategoryNameChange(catIdx, e.target.value)}
                placeholder="e.g. Languages & Runtimes, DevOps, Management"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            {categories.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveCategory(cat.id)}
                className="text-xs text-rose-400 hover:text-rose-300 p-1.5 rounded hover:bg-slate-800 self-end"
                title="Remove category"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Skill items chips */}
          <div className="space-y-2">
            <label className="block text-[11px] font-medium text-slate-400">Skills in this category</label>
            <div className="flex flex-wrap gap-1.5 min-h-[36px] p-2 bg-slate-950 border border-slate-850 rounded-lg">
              {cat.items.length === 0 ? (
                <span className="text-xs text-slate-500 italic py-1 px-1">
                  Type a skill below and press Enter or comma
                </span>
              ) : (
                cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-900/40 text-blue-200 border border-blue-800/60 text-xs font-medium"
                  >
                    <span>{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(catIdx, itemIdx)}
                      className="hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Input to add tag */}
            <div className="flex gap-2">
              <input
                type="text"
                value={newTagInputs[catIdx] || ''}
                onChange={(e) => setNewTagInputs({ ...newTagInputs, [catIdx]: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    handleAddTag(catIdx, newTagInputs[catIdx] || '');
                  }
                }}
                placeholder="Type skill & press Enter (e.g. Next.js, Kubernetes)"
                className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => handleAddTag(catIdx, newTagInputs[catIdx] || '')}
                className="px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Suggested Quick Add */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
          <Tag className="w-3.5 h-3.5 text-blue-400" />
          <span>Click to Add Popular Industry Skills to Active Category:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {POPULAR_SUGGESTIONS.map((skill) => (
            <button
              key={skill}
              type="button"
              onClick={() => handleAddTag(0, skill)}
              className="px-2 py-1 rounded bg-slate-950 hover:bg-blue-600 hover:text-white border border-slate-800 text-[11px] text-slate-300 transition-colors"
            >
              + {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
