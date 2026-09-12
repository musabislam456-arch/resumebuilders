'use client';

import React, { useState } from 'react';
import { ResumeData, ResumeSettings, TemplateId, FontFamily, SpacingScale } from '@/types/resume';
import { exportResumeToPdf } from '@/lib/pdf-export';
import {
  Palette,
  Download,
  Printer,
  Copy,
  FileJson,
  Upload,
  Check,
  Loader2,
  Sparkles,
  LayoutTemplate,
  Type,
  Maximize2,
} from 'lucide-react';

interface DesignExportStepProps {
  data: ResumeData;
  onSettingsChange: (settings: ResumeSettings) => void;
  onDataImport: (importedData: ResumeData) => void;
}

const TEMPLATES: { id: TemplateId; name: string; tag: string; description: string }[] = [
  {
    id: 'modern-executive',
    name: 'Modern Executive',
    tag: 'Recommended',
    description: 'Clean two-tone accent header with high typographic contrast. Perfect for Tech, Product, & Startups.',
  },
  {
    id: 'ats-minimal',
    name: 'ATS Minimalist',
    tag: '99.9% Parser Score',
    description: 'Pure linear single-column architecture. Guaranteed flawless ingestion in Taleo, Workday, and Lever.',
  },
  {
    id: 'classic-corporate',
    name: 'Classic Corporate',
    tag: 'Formal / Prestige',
    description: 'Refined serif layout with traditional centered header and hairline dividers. Ideal for Finance, Law, & Consulting.',
  },
];

const ACCENT_COLORS = [
  { name: 'Executive Charcoal', hex: '#1e293b' },
  { name: 'Sapphire Cobalt', hex: '#2563eb' },
  { name: 'Emerald Forest', hex: '#059669' },
  { name: 'Bordeaux Wine', hex: '#881337' },
  { name: 'Deep Indigo', hex: '#4f46e5' },
  { name: 'Slate Gray', hex: '#475569' },
];

export const DesignExportStep: React.FC<DesignExportStepProps> = ({ data, onSettingsChange, onDataImport }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState<string>('');
  const [copiedText, setCopiedText] = useState(false);

  const { settings } = data;

  const handleTemplateSelect = (id: TemplateId) => {
    onSettingsChange({ ...settings, templateId: id });
  };

  const handleFontSelect = (font: FontFamily) => {
    onSettingsChange({ ...settings, fontFamily: font });
  };

  const handleAccentSelect = (hex: string) => {
    onSettingsChange({ ...settings, accentColor: hex });
  };

  const handleSpacingSelect = (spacing: SpacingScale) => {
    onSettingsChange({ ...settings, spacing });
  };

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    setExportStatus('Rendering printable A4 canvas...');
    try {
      const sanitizedName = data.personalInfo.fullName
        ? data.personalInfo.fullName.replace(/[^a-zA-Z0-9]/g, '_')
        : 'Resume';
      const filename = `${sanitizedName}_Resume.pdf`;

      await exportResumeToPdf({
        elementId: 'resume-document',
        filename,
        onProgress: (status) => setExportStatus(status),
      });
      setExportStatus('Download complete!');
      setTimeout(() => {
        setExportStatus('');
        setIsExporting(false);
      }, 1500);
    } catch (err) {
      console.error(err);
      setExportStatus('Error generating PDF. Please use the Print option as fallback.');
      setTimeout(() => setIsExporting(false), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlaintext = () => {
    const lines = [
      data.personalInfo.fullName.toUpperCase(),
      data.personalInfo.title,
      `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.location}`,
      data.personalInfo.linkedin,
      '\n--- PROFESSIONAL SUMMARY ---',
      data.summary,
      '\n--- EXPERIENCE ---',
      ...data.experience.flatMap((e) => [
        `\n${e.role} - ${e.company} (${e.startDate} - ${e.current ? 'Present' : e.endDate})`,
        ...e.bullets.map((b) => `  * ${b}`),
      ]),
      '\n--- EDUCATION ---',
      ...data.education.map((ed) => `${ed.institution}: ${ed.degree} in ${ed.field} (${ed.graduationDate})`),
      '\n--- SKILLS ---',
      ...data.skills.map((s) => `${s.category}: ${s.items.join(', ')}`),
    ];

    navigator.clipboard.writeText(lines.join('\n'));
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.personalInfo.fullName.replace(/\s+/g, '_') || 'Resume'}_data.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.personalInfo) {
          onDataImport(parsed);
        }
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-7">
      <div className="border-b border-slate-800 pb-3">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <Palette className="w-4 h-4 text-blue-400" />
          <span>Visual Styling & Document Export</span>
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Select proven ATS layouts, typography pairings, and export high-resolution vector PDF.
        </p>
      </div>

      {/* 1. Template Picker */}
      <div className="space-y-3">
        <label className="text-xs font-semibold text-slate-200 uppercase tracking-wider block">
          Select Resume Template
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TEMPLATES.map((tmpl) => {
            const isSelected = settings.templateId === tmpl.id;
            return (
              <button
                key={tmpl.id}
                type="button"
                onClick={() => handleTemplateSelect(tmpl.id)}
                className={`text-left p-3.5 rounded-xl border transition-all relative ${
                  isSelected
                    ? 'bg-blue-950/40 border-blue-500 ring-1 ring-blue-500'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex justify-between items-start mb-1.5">
                  <span className="font-semibold text-xs text-white">{tmpl.name}</span>
                  {isSelected && <Check className="w-4 h-4 text-blue-400 shrink-0" />}
                </div>
                <span className="inline-block px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-blue-300 mb-1.5">
                  {tmpl.tag}
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">{tmpl.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color & Typography Styling */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Accent Color */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2.5">
          <label className="text-xs font-semibold text-slate-300 block">Accent Header Color</label>
          <div className="flex flex-wrap items-center gap-2">
            {ACCENT_COLORS.map((col) => {
              const active = settings.accentColor === col.hex;
              return (
                <button
                  key={col.hex}
                  type="button"
                  onClick={() => handleAccentSelect(col.hex)}
                  title={col.name}
                  className={`w-7 h-7 rounded-full transition-transform flex items-center justify-center ${
                    active ? 'scale-110 ring-2 ring-white' : 'hover:scale-105 opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: col.hex }}
                >
                  {active && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>
          <span className="text-[11px] text-slate-400 block mt-1 font-mono">
            Selected: {ACCENT_COLORS.find((c) => c.hex === settings.accentColor)?.name || settings.accentColor}
          </span>
        </div>

        {/* Font Family & Spacing */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Typography Family</label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['sans', 'serif', 'mono'] as FontFamily[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => handleFontSelect(f)}
                  className={`py-1.5 px-2 text-xs rounded-lg border capitalize font-medium ${
                    settings.fontFamily === f
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {f === 'sans' ? 'Modern Sans' : f === 'serif' ? 'Classic Serif' : 'Technical Mono'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">Vertical Density</label>
            <div className="grid grid-cols-3 gap-1.5">
              {(['compact', 'normal', 'relaxed'] as SpacingScale[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleSpacingSelect(s)}
                  className={`py-1.5 px-2 text-xs rounded-lg border capitalize font-medium ${
                    settings.spacing === s
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Export Action Center */}
      <div className="bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-800/40 rounded-xl p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Download & Share Your Resume</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Engineered for seamless submission into Greenhouse, Workday, Taleo, and LinkedIn.
            </p>
          </div>
        </div>

        {/* Primary PDF Download Button */}
        <button
          type="button"
          disabled={isExporting}
          onClick={handleDownloadPdf}
          id="btn-export-pdf"
          className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5 transition-all disabled:opacity-50 cursor-pointer"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{exportStatus || 'Generating High-Resolution PDF...'}</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download High-Resolution PDF (300 DPI)</span>
            </>
          )}
        </button>

        {/* Secondary Export Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
          <button
            type="button"
            onClick={handlePrint}
            className="py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5 text-slate-400" />
            <span>Print / Save Vector</span>
          </button>

          <button
            type="button"
            onClick={handleCopyPlaintext}
            className="py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
          >
            {copiedText ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Plaintext</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleExportJson}
            className="py-2 px-3 rounded-lg bg-slate-950 border border-slate-700 hover:border-slate-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
          >
            <FileJson className="w-3.5 h-3.5 text-slate-400" />
            <span>Backup Data (JSON)</span>
          </button>
        </div>

        {/* Backup Restore Input */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Need to restore a saved JSON file?</span>
          <label className="cursor-pointer text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">
            <Upload className="w-3 h-3" />
            <span>Upload JSON file</span>
            <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};
