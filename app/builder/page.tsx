'use client';

import React, { useState, useEffect } from 'react';
import { ResumeData, ResumeSettings } from '@/types/resume';
import {
  TECH_SAMPLE_RESUME,
  MARKETING_SAMPLE_RESUME,
  FINANCE_SAMPLE_RESUME,
  EMPTY_RESUME,
} from '@/lib/sample-data';
import { evaluateResumeAts, AtsCheckResult } from '@/lib/ats-score';
import { exportResumeToPdf } from '@/lib/pdf-export';
import { ResumeDocument } from '@/components/resume-templates/ResumeDocument';
import { PersonalInfoStep } from '@/components/builder/PersonalInfoStep';
import { SummaryStep } from '@/components/builder/SummaryStep';
import { ExperienceStep } from '@/components/builder/ExperienceStep';
import { EducationStep } from '@/components/builder/EducationStep';
import { SkillsStep } from '@/components/builder/SkillsStep';
import { ProjectsCertificationsStep } from '@/components/builder/ProjectsCertificationsStep';
import { DesignExportStep } from '@/components/builder/DesignExportStep';
import { AtsScoreModal } from '@/components/builder/AtsScoreModal';
import {
  User,
  AlignLeft,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  Palette,
  Download,
  Printer,
  RotateCcw,
  Sparkles,
  Eye,
  Edit3,
  ZoomIn,
  ZoomOut,
  ShieldCheck,
  CheckCircle,
  Loader2,
} from 'lucide-react';

const STORAGE_KEY = 'resumebuilder_pro_v1_draft';

const STEPS = [
  { id: 'personal', name: 'Personal', icon: User },
  { id: 'summary', name: 'Summary', icon: AlignLeft },
  { id: 'experience', name: 'Experience', icon: Briefcase },
  { id: 'education', name: 'Education', icon: GraduationCap },
  { id: 'skills', name: 'Skills', icon: Wrench },
  { id: 'projects', name: 'Projects', icon: FolderGit2 },
  { id: 'export', name: 'Design & Export', icon: Palette },
];

export default function BuilderPage() {
  const [data, setData] = useState<ResumeData>(TECH_SAMPLE_RESUME);
  const [currentStep, setCurrentStep] = useState<string>('personal');
  const [previewScale, setPreviewScale] = useState<number>(0.9);
  const [mobileView, setMobileView] = useState<'edit' | 'preview'>('edit');
  const [isAtsModalOpen, setIsAtsModalOpen] = useState(false);
  const [lastSaved, setLastSaved] = useState<string>('');
  const [isExporting, setIsExporting] = useState(false);
  const [exportMessage, setExportMessage] = useState('');

  // Load draft from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.personalInfo) {
          setData(parsed);
          setLastSaved('Restored draft from browser');
        }
      }
    } catch (e) {
      console.error('Failed to parse saved resume:', e);
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      const now = new Date();
      setLastSaved(`Saved ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
    } catch (e) {
      console.error('LocalStorage write failed:', e);
    }
  }, [data]);

  // Adjust preview scale for smaller screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setPreviewScale(0.75);
      } else {
        setPreviewScale(0.85);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const atsResult: AtsCheckResult = evaluateResumeAts(data);

  const handleResetToSample = (presetType: 'tech' | 'marketing' | 'finance' | 'empty') => {
    if (confirm('Load sample template? Any unsaved edits will be replaced.')) {
      if (presetType === 'tech') setData(TECH_SAMPLE_RESUME);
      if (presetType === 'marketing') setData(MARKETING_SAMPLE_RESUME);
      if (presetType === 'finance') setData(FINANCE_SAMPLE_RESUME);
      if (presetType === 'empty') setData(EMPTY_RESUME);
    }
  };

  const handleQuickDownloadPdf = async () => {
    setIsExporting(true);
    setExportMessage('Generating PDF...');
    try {
      const sanitized = data.personalInfo.fullName.replace(/[^a-zA-Z0-9]/g, '_') || 'Resume';
      await exportResumeToPdf({
        elementId: 'resume-document',
        filename: `${sanitized}_Resume.pdf`,
        onProgress: (status) => setExportMessage(status),
      });
      setTimeout(() => setIsExporting(false), 1200);
    } catch (err) {
      console.error(err);
      setIsExporting(false);
      alert('PDF generation encountered an issue. Using native print as fallback.');
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Builder Control Sub-bar */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Preset loaders & saved status */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 hidden sm:inline">Presets:</span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleResetToSample('tech')}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
              >
                Tech Lead
              </button>
              <button
                type="button"
                onClick={() => handleResetToSample('marketing')}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
              >
                Marketing
              </button>
              <button
                type="button"
                onClick={() => handleResetToSample('finance')}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium"
              >
                Finance
              </button>
              <button
                type="button"
                onClick={() => handleResetToSample('empty')}
                className="px-2 py-1 rounded bg-slate-950 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-slate-800"
              >
                Clear
              </button>
            </div>
            {lastSaved && (
              <span className="text-[11px] text-slate-500 font-mono hidden md:inline ml-2">
                ✓ {lastSaved}
              </span>
            )}
          </div>

          {/* Right: ATS score badge & Quick Download */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsAtsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 text-xs text-slate-200 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ATS Score:</span>
              <span
                className={`font-bold ${
                  atsResult.score >= 85 ? 'text-emerald-400' : atsResult.score >= 70 ? 'text-blue-400' : 'text-amber-400'
                }`}
              >
                {atsResult.score}/100
              </span>
            </button>

            <button
              type="button"
              disabled={isExporting}
              onClick={handleQuickDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-600/20 disabled:opacity-50"
            >
              {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isExporting ? 'Exporting...' : 'Download PDF'}</span>
            </button>

            {/* Mobile View Toggle */}
            <div className="flex lg:hidden bg-slate-800 rounded-lg p-0.5 border border-slate-700">
              <button
                type="button"
                onClick={() => setMobileView('edit')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                  mobileView === 'edit' ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5 inline mr-1" />
                Form
              </button>
              <button
                type="button"
                onClick={() => setMobileView('preview')}
                className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                  mobileView === 'preview' ? 'bg-blue-600 text-white' : 'text-slate-400'
                }`}
              >
                <Eye className="w-3.5 h-3.5 inline mr-1" />
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dual-Column Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Multi-step Form (Visible on desktop or when mobileView === 'edit') */}
        <div
          className={`lg:col-span-6 flex flex-col space-y-4 ${
            mobileView === 'preview' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* Step Pill Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-800 scrollbar-none text-xs">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setCurrentStep(step.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 sm:p-6 min-h-[500px]">
            {currentStep === 'personal' && (
              <PersonalInfoStep
                data={data.personalInfo}
                onChange={(updated) => setData({ ...data, personalInfo: updated })}
              />
            )}

            {currentStep === 'summary' && (
              <SummaryStep
                summary={data.summary}
                onChange={(updated) => setData({ ...data, summary: updated })}
              />
            )}

            {currentStep === 'experience' && (
              <ExperienceStep
                items={data.experience}
                onChange={(updated) => setData({ ...data, experience: updated })}
              />
            )}

            {currentStep === 'education' && (
              <EducationStep
                items={data.education}
                onChange={(updated) => setData({ ...data, education: updated })}
              />
            )}

            {currentStep === 'skills' && (
              <SkillsStep
                categories={data.skills}
                onChange={(updated) => setData({ ...data, skills: updated })}
              />
            )}

            {currentStep === 'projects' && (
              <ProjectsCertificationsStep
                projects={data.projects}
                certifications={data.certifications}
                settings={data.settings}
                onProjectsChange={(projects) => setData({ ...data, projects })}
                onCertificationsChange={(certifications) => setData({ ...data, certifications })}
                onSettingsChange={(settings) => setData({ ...data, settings })}
              />
            )}

            {currentStep === 'export' && (
              <DesignExportStep
                data={data}
                onSettingsChange={(settings) => setData({ ...data, settings })}
                onDataImport={(imported) => setData(imported)}
              />
            )}

            {/* Step Next / Back Footer */}
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-800">
              <button
                type="button"
                disabled={currentStep === STEPS[0].id}
                onClick={() => {
                  const idx = STEPS.findIndex((s) => s.id === currentStep);
                  if (idx > 0) setCurrentStep(STEPS[idx - 1].id);
                }}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30"
              >
                ← Previous Step
              </button>

              <button
                type="button"
                onClick={() => {
                  const idx = STEPS.findIndex((s) => s.id === currentStep);
                  if (idx < STEPS.length - 1) {
                    setCurrentStep(STEPS[idx + 1].id);
                  } else {
                    setCurrentStep('export');
                  }
                }}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
              >
                {currentStep === 'export' ? 'Download PDF' : 'Next Step →'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Document Preview Stage (Visible on desktop or when mobileView === 'preview') */}
        <div
          className={`lg:col-span-6 flex flex-col space-y-3 ${
            mobileView === 'edit' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* Preview Controls Bar */}
          <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-medium">
              <Eye className="w-4 h-4 text-blue-400" />
              <span>Live A4 Preview</span>
              <span className="text-[11px] text-slate-500 capitalize font-mono">
                ({data.settings.templateId.replace('-', ' ')})
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setPreviewScale((s) => Math.max(0.5, s - 0.1))}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-slate-400 px-1">
                {Math.round(previewScale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setPreviewScale((s) => Math.min(1.2, s + 0.1))}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scrollable Stage Wrapper */}
          <div className="flex-1 bg-slate-950/70 border border-slate-800/80 rounded-2xl p-4 overflow-auto flex justify-center items-start min-h-[600px] shadow-inner">
            <ResumeDocument data={data} scale={previewScale} />
          </div>
        </div>
      </div>

      {/* ATS Score Diagnostic Modal */}
      <AtsScoreModal
        isOpen={isAtsModalOpen}
        onClose={() => setIsAtsModalOpen(false)}
        result={atsResult}
      />
    </div>
  );
}
