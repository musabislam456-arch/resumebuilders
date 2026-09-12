import { ResumeData } from '@/types/resume';

export const POWER_ACTION_VERBS = [
  'Architected',
  'Accelerated',
  'Achieved',
  'Administered',
  'Advanced',
  'Analyzed',
  'Authored',
  'Automated',
  'Built',
  'Championed',
  'Coached',
  'Collaborated',
  'Consolidated',
  'Constructed',
  'Decreased',
  'Delivered',
  'Designed',
  'Developed',
  'Directed',
  'Eliminated',
  'Engineered',
  'Enhanced',
  'Established',
  'Evaluated',
  'Exceeded',
  'Executed',
  'Expanded',
  'Formulated',
  'Generated',
  'Grew',
  'Identified',
  'Implemented',
  'Improved',
  'Increased',
  'Initiated',
  'Instituted',
  'Integrated',
  'Launched',
  'Led',
  'Managed',
  'Mentored',
  'Modernized',
  'Negotiated',
  'Optimized',
  'Orchestrated',
  'Overhauled',
  'Pioneered',
  'Produced',
  'Programmed',
  'Reduced',
  'Refactored',
  'Restructured',
  'Scaled',
  'Secured',
  'Simplified',
  'Slashing',
  'Spearheaded',
  'Standardized',
  'Streamlined',
  'Supervised',
  'Trained',
  'Transformed',
  'Unified',
  'Upgraded',
  'Yielded',
];

export interface AtsCheckResult {
  score: number;
  grade: 'A+' | 'A' | 'B' | 'C' | 'Needs Work';
  checks: {
    id: string;
    title: string;
    passed: boolean;
    recommendation: string;
    weight: number;
  }[];
  metricsFoundCount: number;
  actionVerbsCount: number;
  wordCount: number;
}

export function evaluateResumeAts(resume: ResumeData): AtsCheckResult {
  const checks: AtsCheckResult['checks'] = [];
  let score = 0;

  // 1. Contact Information
  const hasName = Boolean(resume.personalInfo.fullName.trim());
  const hasEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resume.personalInfo.email.trim());
  const hasPhone = resume.personalInfo.phone.trim().length >= 7;
  const hasLocation = Boolean(resume.personalInfo.location.trim());
  const contactPassed = hasName && hasEmail && hasPhone && hasLocation;

  checks.push({
    id: 'contact_info',
    title: 'Essential Contact Information',
    passed: contactPassed,
    recommendation: contactPassed
      ? 'All essential contact data (Name, Email, Phone, City/State) present.'
      : 'Ensure full name, valid email, phone number, and location (City, State) are provided.',
    weight: 20,
  });
  if (contactPassed) score += 20;

  // 2. Professional Summary
  const summaryWords = resume.summary.trim() ? resume.summary.trim().split(/\s+/).length : 0;
  const summaryPassed = summaryWords >= 25 && summaryWords <= 120;
  checks.push({
    id: 'summary_length',
    title: 'Tailored Professional Summary',
    passed: summaryPassed,
    recommendation: summaryPassed
      ? `Summary is optimal (${summaryWords} words, target: 30-100 words).`
      : summaryWords === 0
      ? 'Add a 2-4 sentence executive summary highlighting key career achievements.'
      : `Summary is ${summaryWords} words. Aim for 30 to 100 words to maximize recruiter retention.`,
    weight: 15,
  });
  if (summaryPassed) score += 15;
  else if (summaryWords > 0) score += 7;

  // 3. Work Experience Count
  const expCount = resume.experience.filter((e) => e.company.trim() && e.role.trim()).length;
  const expPassed = expCount >= 1;
  checks.push({
    id: 'work_experience',
    title: 'Documented Work Experience',
    passed: expPassed,
    recommendation: expPassed
      ? `Listed ${expCount} relevant career positions with titles and companies.`
      : 'Add at least one professional position with company, title, dates, and accomplishments.',
    weight: 15,
  });
  if (expPassed) score += 15;

  // 4. Quantified Metrics (XYZ Formula)
  const allBullets = resume.experience.flatMap((e) => e.bullets).filter((b) => b.trim().length > 0);
  const metricRegex = /(\d+[%$€£]|\$\d+|\d+\+|\b\d+\b|reduced by|increased by|scaled|grow)/i;
  const quantifiedBullets = allBullets.filter((b) => metricRegex.test(b));
  const metricsCount = quantifiedBullets.length;
  const metricsPassed = metricsCount >= 2;

  checks.push({
    id: 'quantified_metrics',
    title: 'Quantified Impact & Metrics',
    passed: metricsPassed,
    recommendation: metricsPassed
      ? `Found ${metricsCount} bullet points with measurable numbers, percentages, or financial impact.`
      : 'Recruiters favor metrics. Add concrete percentages, dollar figures, team sizes, or speedups (e.g., "Increased sales by 24%").',
    weight: 20,
  });
  if (metricsPassed) score += 20;
  else if (metricsCount === 1) score += 10;

  // 5. Action Verbs
  const lowerBullets = allBullets.map((b) => b.toLowerCase());
  let actionVerbsFound = 0;
  POWER_ACTION_VERBS.forEach((verb) => {
    if (lowerBullets.some((b) => b.includes(verb.toLowerCase()))) {
      actionVerbsFound++;
    }
  });
  const actionPassed = actionVerbsFound >= 3;
  checks.push({
    id: 'action_verbs',
    title: 'Strong Action Verbs',
    passed: actionPassed,
    recommendation: actionPassed
      ? `High dynamic phrasing (${actionVerbsFound} power verbs detected).`
      : 'Begin bullets with strong action verbs (e.g., Spearheaded, Engineered, Overhauled, Orchestrated).',
    weight: 15,
  });
  if (actionPassed) score += 15;
  else if (actionVerbsFound > 0) score += 8;

  // 6. Skills & Education
  const totalSkills = resume.skills.reduce((acc, cat) => acc + cat.items.length, 0);
  const hasEducation = resume.education.some((e) => e.institution.trim() && e.degree.trim());
  const skillsPassed = totalSkills >= 5 && hasEducation;
  checks.push({
    id: 'skills_and_education',
    title: 'Core Skills & Education Sections',
    passed: skillsPassed,
    recommendation: skillsPassed
      ? `Comprehensive foundation (${totalSkills} skills indexed and accredited education).`
      : 'List at least 5 relevant technical/functional skills and complete your educational background.',
    weight: 15,
  });
  if (skillsPassed) score += 15;
  else if (totalSkills >= 3 || hasEducation) score += 7;

  // Calculate total words in entire document
  const totalText = [
    resume.personalInfo.fullName,
    resume.personalInfo.title,
    resume.summary,
    ...resume.experience.flatMap((e) => [e.company, e.role, ...e.bullets]),
    ...resume.education.map((e) => `${e.institution} ${e.degree} ${e.field}`),
    ...resume.skills.flatMap((s) => s.items),
  ].join(' ');

  const totalWords = totalText.trim().split(/\s+/).filter(Boolean).length;

  let grade: AtsCheckResult['grade'] = 'Needs Work';
  if (score >= 90) grade = 'A+';
  else if (score >= 80) grade = 'A';
  else if (score >= 65) grade = 'B';
  else if (score >= 50) grade = 'C';

  return {
    score: Math.min(100, score),
    grade,
    checks,
    metricsFoundCount: metricsCount,
    actionVerbsCount: actionVerbsFound,
    wordCount: totalWords,
  };
}
