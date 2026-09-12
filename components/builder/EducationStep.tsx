'use client';

import React from 'react';
import { EducationItem } from '@/types/resume';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface EducationStepProps {
  items: EducationItem[];
  onChange: (updated: EducationItem[]) => void;
}

export const EducationStep: React.FC<EducationStepProps> = ({ items, onChange }) => {
  const handleAddItem = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      institution: '',
      degree: '',
      field: '',
      location: '',
      graduationDate: '',
      gpa: '',
      honors: '',
    };
    onChange([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    onChange(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (index: number, field: keyof EducationItem, value: string) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h3 className="text-base font-semibold text-white flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span>Academic Background & Credentials</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            List higher education, degrees, certificates, and academic awards.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAddItem}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Education</span>
        </button>
      </div>

      {items.length === 0 ? (
        <div className="p-8 text-center border-2 border-dashed border-slate-800 rounded-xl">
          <GraduationCap className="w-8 h-8 mx-auto text-slate-600 mb-2" />
          <p className="text-sm font-medium text-slate-300">No education entries added yet</p>
          <p className="text-xs text-slate-500 mt-1 mb-4">Add your degree, university, or academic credentials</p>
          <button
            type="button"
            onClick={handleAddItem}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Education</span>
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {items.map((item, idx) => (
            <div key={item.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Entry #{idx + 1}: {item.degree || 'Degree'} {item.institution ? `at ${item.institution}` : ''}
                </span>

                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-xs text-rose-400 hover:text-rose-300 p-1 rounded hover:bg-rose-500/10 flex items-center gap-1"
                  title="Remove this entry"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">University / College *</label>
                  <input
                    type="text"
                    value={item.institution}
                    onChange={(e) => handleItemChange(idx, 'institution', e.target.value)}
                    placeholder="e.g. University of California, Berkeley"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Degree Title *</label>
                  <input
                    type="text"
                    value={item.degree}
                    onChange={(e) => handleItemChange(idx, 'degree', e.target.value)}
                    placeholder="e.g. Bachelor of Science"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Major / Field of Study</label>
                  <input
                    type="text"
                    value={item.field}
                    onChange={(e) => handleItemChange(idx, 'field', e.target.value)}
                    placeholder="e.g. Computer Science & Data Systems"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Graduation Year / Range</label>
                  <input
                    type="text"
                    value={item.graduationDate}
                    onChange={(e) => handleItemChange(idx, 'graduationDate', e.target.value)}
                    placeholder="e.g. 2020 or 2018 - 2022"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">GPA (Optional)</label>
                  <input
                    type="text"
                    value={item.gpa || ''}
                    onChange={(e) => handleItemChange(idx, 'gpa', e.target.value)}
                    placeholder="e.g. 3.85 / 4.0"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Honors / Distinctions</label>
                  <input
                    type="text"
                    value={item.honors || ''}
                    onChange={(e) => handleItemChange(idx, 'honors', e.target.value)}
                    placeholder="e.g. Magna Cum Laude, Dean's List"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
