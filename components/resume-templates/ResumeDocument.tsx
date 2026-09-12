'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface ResumeDocumentProps {
  data: ResumeData;
  scale?: number;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ data, scale = 1 }) => {
  const { personalInfo, summary, experience, education, skills, projects, certifications, settings } = data;

  const fontClass =
    settings.fontFamily === 'serif'
      ? 'font-serif'
      : settings.fontFamily === 'mono'
      ? 'font-mono'
      : 'font-sans';

  const spacingClass =
    settings.spacing === 'compact'
      ? 'space-y-3 text-[13px] leading-relaxed'
      : settings.spacing === 'relaxed'
      ? 'space-y-6 text-[15px] leading-loose'
      : 'space-y-4 text-[14px] leading-normal';

  const accent = settings.accentColor || '#1e293b';

  return (
    <div
      id="resume-document"
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: 'top center',
      }}
      className={`w-full max-w-[800px] min-h-[1050px] bg-white text-slate-900 shadow-xl border border-slate-200 print:border-0 print:shadow-none print:m-0 print:p-0 transition-all duration-200 ${fontClass}`}
    >
      {settings.templateId === 'ats-minimal' ? (
        <AtsMinimalView data={data} spacingClass={spacingClass} />
      ) : settings.templateId === 'classic-corporate' ? (
        <ClassicCorporateView data={data} spacingClass={spacingClass} accent={accent} />
      ) : (
        <ModernExecutiveView data={data} spacingClass={spacingClass} accent={accent} />
      )}
    </div>
  );
};

// ==========================================
// TEMPLATE 1: Modern Executive
// ==========================================
function ModernExecutiveView({
  data,
  spacingClass,
  accent,
}: {
  data: ResumeData;
  spacingClass: string;
  accent: string;
}) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, settings } = data;

  return (
    <div className="p-8 sm:p-12">
      {/* Header */}
      <header className="border-b-2 pb-5 mb-5" style={{ borderColor: accent }}>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {personalInfo.fullName || 'Your Full Name'}
            </h1>
            <p className="text-lg font-semibold mt-1" style={{ color: accent }}>
              {personalInfo.title || 'Professional Title / Target Role'}
            </p>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-xs sm:text-[13px] text-slate-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.email}</span>
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.phone}</span>
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.location}</span>
            </span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.website.replace(/^https?:\/\//, '')}</span>
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, '')}</span>
            </span>
          )}
          {personalInfo.github && (
            <span className="flex items-center gap-1">
              <Github className="w-3.5 h-3.5 opacity-75" />
              <span>{personalInfo.github.replace(/^https?:\/\/(www\.)?github\.com\//, '')}</span>
            </span>
          )}
        </div>
      </header>

      <div className={spacingClass}>
        {/* Summary */}
        {summary && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-1.5 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Professional Summary</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>
            <p className="text-slate-700 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && experience.some((e) => e.company || e.role) && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-2 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Work Experience</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>

            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-slate-900">{item.role || 'Job Role'}</span>
                      <span className="text-slate-600 font-medium"> · {item.company || 'Company'}</span>
                    </div>
                    <div className="text-xs text-slate-500 sm:text-right font-medium">
                      {item.startDate} – {item.current ? 'Present' : item.endDate || 'Present'}
                      {item.location && <span className="ml-2">| {item.location}</span>}
                    </div>
                  </div>

                  {item.bullets.length > 0 && (
                    <ul className="mt-1.5 space-y-1 list-disc list-outside ml-4 text-slate-700">
                      {item.bullets.map(
                        (bullet, idx) =>
                          bullet.trim() && (
                            <li key={idx} className="leading-snug">
                              {bullet}
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && education.some((e) => e.institution || e.degree) && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-2 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Education</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>

            <div className="space-y-2.5">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <span className="font-bold text-slate-900">{edu.institution}</span>
                    <span className="text-slate-700">
                      {' '}
                      — {edu.degree} {edu.field && `in ${edu.field}`}
                    </span>
                    {edu.honors && <span className="text-xs text-slate-500 ml-1">({edu.honors})</span>}
                    {edu.gpa && <span className="text-xs text-slate-500 ml-1 font-semibold">· GPA: {edu.gpa}</span>}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && skills.some((s) => s.items.length > 0) && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-2 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Skills & Competencies</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>

            <div className="space-y-1.5">
              {skills.map((skillCat) =>
                skillCat.items.length > 0 ? (
                  <div key={skillCat.id} className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                    <span className="font-semibold text-slate-800 sm:min-w-[140px] text-xs sm:text-sm">
                      {skillCat.category}:
                    </span>
                    <span className="text-slate-700 text-xs sm:text-sm">{skillCat.items.join(' • ')}</span>
                  </div>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Projects (if enabled) */}
        {settings.showProjects && projects.length > 0 && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-2 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Projects & Technical Initiatives</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>

            <div className="space-y-2.5">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="font-bold text-slate-900">{proj.name}</span>
                      {proj.role && <span className="text-xs text-slate-600 ml-1.5 font-medium">({proj.role})</span>}
                      {proj.link && (
                        <span className="text-xs text-slate-500 ml-2">
                          <ExternalLink className="w-3 h-3 inline mr-0.5" />
                          {proj.link}
                        </span>
                      )}
                    </div>
                    {proj.date && <span className="text-xs text-slate-500">{proj.date}</span>}
                  </div>
                  {proj.bullets.length > 0 && (
                    <ul className="mt-1 list-disc list-outside ml-4 space-y-0.5 text-slate-700 text-xs sm:text-[13px]">
                      {proj.bullets.map(
                        (b, i) =>
                          b.trim() && (
                            <li key={i} className="leading-snug">
                              {b}
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications (if enabled) */}
        {settings.showCertifications && certifications.length > 0 && (
          <section>
            <h2
              className="text-xs uppercase font-bold tracking-widest mb-2 flex items-center gap-2"
              style={{ color: accent }}
            >
              <span>Certifications & Honors</span>
              <span className="h-px bg-slate-200 flex-1" />
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline border-b border-slate-100 pb-1">
                  <div>
                    <span className="font-semibold text-slate-800">{cert.name}</span>
                    <span className="text-slate-500 text-xs"> — {cert.issuer}</span>
                  </div>
                  <span className="text-slate-400 text-xs ml-2 font-medium">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// ==========================================
// TEMPLATE 2: ATS Minimalist (100% Parser Compliant)
// ==========================================
function AtsMinimalView({ data, spacingClass }: { data: ResumeData; spacingClass: string }) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, settings } = data;

  return (
    <div className="p-8 sm:p-12 text-slate-900 font-sans">
      {/* Header - Simple Left/Center linear flow */}
      <header className="border-b border-slate-900 pb-3 mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-slate-950">
          {personalInfo.fullName || 'FULL NAME'}
        </h1>
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-800 mt-0.5">
          {personalInfo.title || 'TARGET JOB TITLE'}
        </p>
        <div className="text-xs text-slate-700 mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.email && <span>• {personalInfo.email}</span>}
          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
          {personalInfo.website && <span>• {personalInfo.website}</span>}
        </div>
      </header>

      <div className={spacingClass}>
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-1.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-800 leading-relaxed text-xs sm:text-[13.5px]">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && experience.some((e) => e.company || e.role) && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-3.5">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-baseline text-xs sm:text-[13.5px]">
                    <div>
                      <strong className="text-slate-950">{item.company}</strong>
                      {item.location && <span> — {item.location}</span>}
                    </div>
                    <div className="font-semibold text-slate-700">
                      {item.startDate} – {item.current ? 'Present' : item.endDate || 'Present'}
                    </div>
                  </div>
                  <div className="italic text-slate-800 text-xs sm:text-[13px] mb-1">{item.role}</div>

                  {item.bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 text-xs sm:text-[13px]">
                      {item.bullets.map(
                        (b, idx) =>
                          b.trim() && (
                            <li key={idx} className="leading-snug">
                              {b}
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && education.some((e) => e.institution || e.degree) && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs sm:text-[13.5px]">
                  <div>
                    <strong className="text-slate-950">{edu.institution}</strong>
                    <span>
                      {' '}
                      — {edu.degree} {edu.field && `in ${edu.field}`}
                    </span>
                    {edu.gpa && <span> (GPA: {edu.gpa})</span>}
                  </div>
                  <div className="font-semibold text-slate-700">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && skills.some((s) => s.items.length > 0) && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
              TECHNICAL & FUNCTIONAL SKILLS
            </h2>
            <div className="space-y-1 text-xs sm:text-[13.5px]">
              {skills.map((skillCat) =>
                skillCat.items.length > 0 ? (
                  <div key={skillCat.id}>
                    <strong className="text-slate-950">{skillCat.category}: </strong>
                    <span className="text-slate-800">{skillCat.items.join(', ')}</span>
                  </div>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Projects */}
        {settings.showProjects && projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
              KEY PROJECTS & INITIATIVES
            </h2>
            <div className="space-y-2 text-xs sm:text-[13.5px]">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <strong className="text-slate-950">{proj.name}</strong>
                    {proj.date && <span className="text-slate-700 font-medium">{proj.date}</span>}
                  </div>
                  {proj.bullets.map(
                    (b, i) =>
                      b.trim() && (
                        <p key={i} className="text-slate-800 ml-3 text-xs leading-snug">
                          • {b}
                        </p>
                      )
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {settings.showCertifications && certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-950 border-b border-slate-300 pb-0.5 mb-2">
              CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="space-y-1 text-xs sm:text-[13.5px]">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-slate-950">{cert.name}</strong>
                    <span className="text-slate-700"> — {cert.issuer}</span>
                  </div>
                  <span className="text-slate-600 font-medium">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// ==========================================
// TEMPLATE 3: Classic Corporate (Executive / Finance / Legal)
// ==========================================
function ClassicCorporateView({
  data,
  spacingClass,
  accent,
}: {
  data: ResumeData;
  spacingClass: string;
  accent: string;
}) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, settings } = data;

  return (
    <div className="p-8 sm:p-12 font-serif text-slate-900">
      {/* Centered Formal Header */}
      <header className="text-center pb-4 mb-4 border-b-2 border-slate-800">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
          {personalInfo.fullName || 'Full Name'}
        </h1>
        <p className="text-sm font-semibold tracking-widest uppercase text-slate-700 mt-1">
          {personalInfo.title || 'Professional Title'}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-sans">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && <span>·</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.email && <span>·</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.linkedin && <span>·</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </header>

      <div className={spacingClass}>
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Executive Profile
            </h2>
            <p className="text-slate-800 leading-relaxed text-xs sm:text-sm italic">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && experience.some((e) => e.company || e.role) && (
          <section>
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between items-baseline">
                    <div className="text-xs sm:text-sm font-bold text-slate-950">
                      {item.role}, <span className="font-semibold text-slate-800">{item.company}</span>
                    </div>
                    <div className="text-xs text-slate-600 font-sans font-medium">
                      {item.startDate} – {item.current ? 'Present' : item.endDate || 'Present'}
                    </div>
                  </div>
                  {item.location && <div className="text-xs text-slate-500 italic mb-1">{item.location}</div>}

                  {item.bullets.length > 0 && (
                    <ul className="list-disc list-outside ml-4 space-y-1 text-slate-800 text-xs sm:text-[13px]">
                      {item.bullets.map(
                        (b, idx) =>
                          b.trim() && (
                            <li key={idx} className="leading-snug">
                              {b}
                            </li>
                          )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && education.some((e) => e.institution || e.degree) && (
          <section>
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education & Academic Credentials
            </h2>

            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs sm:text-sm">
                  <div>
                    <strong className="text-slate-950">{edu.institution}</strong>
                    <span>
                      {' '}
                      — {edu.degree} {edu.field && `in ${edu.field}`}
                    </span>
                    {edu.honors && <span className="italic text-xs text-slate-600 ml-1">({edu.honors})</span>}
                  </div>
                  <div className="text-xs text-slate-600 font-sans font-medium">{edu.graduationDate}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && skills.some((s) => s.items.length > 0) && (
          <section>
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Core Competencies & Expertise
            </h2>

            <div className="space-y-1 text-xs sm:text-sm">
              {skills.map((s) =>
                s.items.length > 0 ? (
                  <div key={s.id} className="flex flex-col sm:flex-row gap-1">
                    <span className="font-bold text-slate-900 sm:w-44">{s.category}:</span>
                    <span className="text-slate-800 flex-1">{s.items.join(' | ')}</span>
                  </div>
                ) : null
              )}
            </div>
          </section>
        )}

        {/* Certifications */}
        {settings.showCertifications && certifications.length > 0 && (
          <section>
            <h2 className="text-xs uppercase font-bold tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Designations & Licensures
            </h2>

            <div className="space-y-1 text-xs sm:text-sm">
              {certifications.map((c) => (
                <div key={c.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-slate-950">{c.name}</span>
                    <span className="text-slate-700">, {c.issuer}</span>
                  </div>
                  <span className="text-xs text-slate-600 font-sans font-medium">{c.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
