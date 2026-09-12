'use client';

import React from 'react';
import { ProjectItem, CertificationItem, ResumeSettings } from '@/types/resume';
import { FolderGit2, Award, Plus, Trash2, Check } from 'lucide-react';

interface ProjectsCertificationsStepProps {
  projects: ProjectItem[];
  certifications: CertificationItem[];
  settings: ResumeSettings;
  onProjectsChange: (updated: ProjectItem[]) => void;
  onCertificationsChange: (updated: CertificationItem[]) => void;
  onSettingsChange: (updated: ResumeSettings) => void;
}

export const ProjectsCertificationsStep: React.FC<ProjectsCertificationsStepProps> = ({
  projects,
  certifications,
  settings,
  onProjectsChange,
  onCertificationsChange,
  onSettingsChange,
}) => {
  // Projects handlers
  const handleAddProject = () => {
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      name: '',
      role: '',
      link: '',
      date: '',
      bullets: [''],
    };
    onProjectsChange([...projects, newProj]);
  };

  const handleRemoveProject = (id: string) => {
    onProjectsChange(projects.filter((p) => p.id !== id));
  };

  const handleProjectChange = (idx: number, field: keyof ProjectItem, val: any) => {
    const updated = [...projects];
    updated[idx] = { ...updated[idx], [field]: val };
    onProjectsChange(updated);
  };

  const handleProjectBulletChange = (pIdx: number, bIdx: number, val: string) => {
    const updated = [...projects];
    const updatedBullets = [...updated[pIdx].bullets];
    updatedBullets[bIdx] = val;
    updated[pIdx] = { ...updated[pIdx], bullets: updatedBullets };
    onProjectsChange(updated);
  };

  // Certifications handlers
  const handleAddCert = () => {
    const newCert: CertificationItem = {
      id: `cert-${Date.now()}`,
      name: '',
      issuer: '',
      date: '',
    };
    onCertificationsChange([...certifications, newCert]);
  };

  const handleRemoveCert = (id: string) => {
    onCertificationsChange(certifications.filter((c) => c.id !== id));
  };

  const handleCertChange = (idx: number, field: keyof CertificationItem, val: string) => {
    const updated = [...certifications];
    updated[idx] = { ...updated[idx], [field]: val };
    onCertificationsChange(updated);
  };

  return (
    <div className="space-y-8">
      {/* Projects Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-semibold text-white">Projects & Key Initiatives</h3>
              <label className="flex items-center gap-1.5 ml-3 text-xs text-slate-300 cursor-pointer bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                <input
                  type="checkbox"
                  checked={settings.showProjects}
                  onChange={(e) => onSettingsChange({ ...settings, showProjects: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>Include on Resume</span>
              </label>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Highlight notable open-source repositories, portfolio systems, or enterprise initiatives.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddProject}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Project</span>
          </button>
        </div>

        {projects.map((proj, pIdx) => (
          <div key={proj.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-slate-300">Project #{pIdx + 1}</span>
              <button
                type="button"
                onClick={() => handleRemoveProject(proj.id)}
                className="text-xs text-rose-400 hover:text-rose-300"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Project Name</label>
                <input
                  type="text"
                  value={proj.name}
                  onChange={(e) => handleProjectChange(pIdx, 'name', e.target.value)}
                  placeholder="e.g. OmniStream Visualizer"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Role / Tech Stack</label>
                <input
                  type="text"
                  value={proj.role || ''}
                  onChange={(e) => handleProjectChange(pIdx, 'role', e.target.value)}
                  placeholder="e.g. Creator & Maintainer (TypeScript, React)"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Link / URL</label>
                <input
                  type="text"
                  value={proj.link || ''}
                  onChange={(e) => handleProjectChange(pIdx, 'link', e.target.value)}
                  placeholder="e.g. github.com/username/project"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-400 mb-1">Date / Duration</label>
                <input
                  type="text"
                  value={proj.date || ''}
                  onChange={(e) => handleProjectChange(pIdx, 'date', e.target.value)}
                  placeholder="e.g. 2024"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-slate-400 mb-1">Key Description Bullet</label>
              <textarea
                rows={2}
                value={proj.bullets[0] || ''}
                onChange={(e) => handleProjectBulletChange(pIdx, 0, e.target.value)}
                placeholder="Engineered high-concurrency event stream processor serving 100k data points/sec..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-semibold text-white">Certifications & Licenses</h3>
              <label className="flex items-center gap-1.5 ml-3 text-xs text-slate-300 cursor-pointer bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                <input
                  type="checkbox"
                  checked={settings.showCertifications}
                  onChange={(e) => onSettingsChange({ ...settings, showCertifications: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>Include on Resume</span>
              </label>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Certifications validate technical readiness and industry-standard proficiency.
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddCert}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Certification</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certifications.map((cert, cIdx) => (
            <div key={cert.id} className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
              <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span className="text-xs font-bold text-slate-300">Cert #{cIdx + 1}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveCert(cert.id)}
                  className="text-xs text-rose-400 hover:text-rose-300"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <label className="block text-[10px] font-medium text-slate-400">Certification Name</label>
                <input
                  type="text"
                  value={cert.name}
                  onChange={(e) => handleCertChange(cIdx, 'name', e.target.value)}
                  placeholder="e.g. AWS Certified Solutions Architect"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-medium text-slate-400">Issuing Body</label>
                  <input
                    type="text"
                    value={cert.issuer}
                    onChange={(e) => handleCertChange(cIdx, 'issuer', e.target.value)}
                    placeholder="e.g. Amazon Web Services"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-medium text-slate-400">Date</label>
                  <input
                    type="text"
                    value={cert.date}
                    onChange={(e) => handleCertChange(cIdx, 'date', e.target.value)}
                    placeholder="e.g. 2024"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
