import { ResumeData } from '@/types/resume';

export const TECH_SAMPLE_RESUME: ResumeData = {
  personalInfo: {
    fullName: 'Alexander Vance',
    title: 'Senior Full-Stack Engineer & Team Lead',
    email: 'alex.vance@example.com',
    phone: '+1 (415) 555-0182',
    location: 'San Francisco, CA',
    website: 'https://alexvance.dev',
    linkedin: 'linkedin.com/in/alexvance-eng',
    github: 'github.com/alexvance',
  },
  summary:
    'Senior Full-Stack Software Engineer with 7+ years of expertise architecting high-throughput distributed web applications and modern cloud microservices. Proven record modernizing legacy systems to reduce infrastructure costs by 34% and scaling platform architecture to serve 2.5M+ active users with 99.98% uptime.',
  experience: [
    {
      id: 'exp-1',
      company: 'Apex Cloud Solutions',
      role: 'Staff Software Engineer & Technical Lead',
      location: 'San Francisco, CA',
      startDate: '2022-03',
      endDate: '',
      current: true,
      bullets: [
        'Spearheaded the redesign of core billing pipeline handling $48M+ annual transaction volume, slashing checkout latency by 420ms and eliminating checkout timeout errors.',
        'Mentored and coached 8 software engineers across two agile squads; established weekly architecture brown-bags and strict PR review standards that reduced production rollbacks by 28%.',
        'Implemented automated CI/CD canary rollout pipelines using Docker, Kubernetes, and GitHub Actions, cutting developer deployment cycle time from 45 minutes to 7 minutes.',
        'Championed migration from monolithic PostgreSQL database to sharded read-replica cluster, increasing concurrent query throughput by 210% under peak holiday traffic.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Vanguard Data Systems',
      role: 'Full-Stack Software Engineer',
      location: 'Oakland, CA',
      startDate: '2019-06',
      endDate: '2022-02',
      current: false,
      bullets: [
        'Developed customer-facing analytics dashboard using React, TypeScript, and Tailwind CSS, adopted by over 120 enterprise client organizations within 90 days.',
        'Built event-driven microservices using Node.js and Apache Kafka processing 15M+ telemetry events per day with average end-to-end latency under 65ms.',
        'Partnered with product managers and security auditors to achieve SOC 2 Type II compliance 3 weeks ahead of scheduled deadline.',
      ],
    },
    {
      id: 'exp-3',
      company: 'Meridian Tech Labs',
      role: 'Junior Frontend Developer',
      location: 'San Jose, CA',
      startDate: '2017-08',
      endDate: '2019-05',
      current: false,
      bullets: [
        'Refactored legacy jQuery application into modular Vue.js components, reducing bundle payload by 58% and boosting Lighthouse performance score from 54 to 96.',
        'Designed accessible WCAG 2.1 AA compliant design system components utilized across 5 internal client portals.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Berkeley, CA',
      graduationDate: '2017',
      gpa: '3.82',
      honors: 'Dean’s Honor List (4 semesters), Magna Cum Laude',
    },
  ],
  skills: [
    {
      id: 'skill-1',
      category: 'Languages & Core',
      items: ['TypeScript', 'JavaScript (ESNext)', 'Python', 'Go', 'SQL', 'HTML5/CSS3'],
    },
    {
      id: 'skill-2',
      category: 'Frameworks & Libraries',
      items: ['Next.js', 'React 19', 'Node.js', 'Tailwind CSS', 'Express', 'GraphQL', 'Prisma'],
    },
    {
      id: 'skill-3',
      category: 'DevOps & Cloud',
      items: ['AWS (ECS, S3, RDS)', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'Kafka', 'CI/CD Pipelines'],
    },
    {
      id: 'skill-4',
      category: 'Practices & Architecture',
      items: ['Microservices', 'Distributed Systems', 'System Design', 'Agile/Scrum', 'TDD', 'RESTful APIs'],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'OmniStream: Real-time Data Visualizer',
      role: 'Creator & Maintainer',
      link: 'github.com/alexvance/omnistream',
      date: '2023 - Present',
      bullets: [
        'Open-source WebGL-accelerated stream graph visualizer with 1,400+ GitHub stars.',
        'Processes 100,000 live data points per second with zero UI frame drops in modern browsers.',
      ],
    },
    {
      id: 'proj-2',
      name: 'CloudCost Guard: Automated FinOps CLI',
      role: 'Lead Developer',
      link: 'github.com/alexvance/cloudcost-guard',
      date: '2021',
      bullets: [
        'CLI tool that parses Terraform execution plans to predict monthly cloud cost differentials prior to deployment.',
      ],
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Solutions Architect – Professional',
      issuer: 'Amazon Web Services',
      date: '2024',
      url: 'aws.amazon.com/verification',
    },
    {
      id: 'cert-2',
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
    },
  ],
  settings: {
    templateId: 'modern-executive',
    fontFamily: 'sans',
    accentColor: '#1e293b', // Deep charcoal
    spacing: 'normal',
    showProjects: true,
    showCertifications: true,
  },
};

export const MARKETING_SAMPLE_RESUME: ResumeData = {
  personalInfo: {
    fullName: 'Elena Rostova',
    title: 'Director of Growth & Product Marketing',
    email: 'elena.rostova@example.com',
    phone: '+1 (312) 555-0144',
    location: 'Chicago, IL',
    website: 'https://elenarostova.co',
    linkedin: 'linkedin.com/in/elena-rostova-growth',
    github: '',
  },
  summary:
    'Data-driven Growth Marketing Leader with 8+ years scaling B2B SaaS ARR from $4M to $28M. Master of full-funnel acquisition, organic content engines, and product-led growth (PLG) conversion loops. Skilled in cross-functional orchestration across product, sales, and analytics.',
  experience: [
    {
      id: 'exp-m1',
      company: 'SyncScale SaaS',
      role: 'Director of Growth Marketing',
      location: 'Chicago, IL',
      startDate: '2022-01',
      endDate: '',
      current: true,
      bullets: [
        'Orchestrated multi-channel acquisition strategy driving 142% year-over-year pipeline growth, generating $14.6M in qualified ARR.',
        'Overhauled self-serve freemium product onboarding flow, increasing trial-to-paid conversion rate from 3.2% to 6.8% and adding $1.8M ARR in first 6 months.',
        'Managed a cross-functional marketing team of 9 specialists across Paid Performance, Lifecycle Automation, Content Strategy, and Design.',
        'Decreased Customer Acquisition Cost (CAC) by 29% while maintaining 118% net revenue retention (NRR) through high-intent SEO content hubs.',
      ],
    },
    {
      id: 'exp-m2',
      company: 'OmniFlow Technology',
      role: 'Senior Product Marketing Manager',
      location: 'Austin, TX',
      startDate: '2018-09',
      endDate: '2021-12',
      current: false,
      bullets: [
        'Led Go-To-Market (GTM) launches for 3 tier-1 enterprise feature tiers, resulting in 4,500+ commercial demo bookings within 60 days of launch.',
        'Designed comprehensive competitive battlecards and sales enablement playbooks that lifted enterprise win rate by 19 percentage points.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-m1',
      institution: 'Northwestern University',
      degree: 'Master of Science',
      field: 'Integrated Marketing Communications',
      location: 'Evanston, IL',
      graduationDate: '2018',
      gpa: '3.90',
      honors: 'High Honors',
    },
    {
      id: 'edu-m2',
      institution: 'University of Michigan',
      degree: 'Bachelor of Arts',
      field: 'Economics & Psychology',
      location: 'Ann Arbor, MI',
      graduationDate: '2016',
      gpa: '3.75',
    },
  ],
  skills: [
    {
      id: 'skill-m1',
      category: 'Growth & Strategy',
      items: ['Product-Led Growth (PLG)', 'GTM Strategy', 'Funnel Optimization', 'Pricing & Packaging', 'CAC/LTV Modeling'],
    },
    {
      id: 'skill-m2',
      category: 'Analytics & MarTech',
      items: ['Google Analytics 4', 'Mixpanel', 'HubSpot Enterprise', 'Segment', 'Looker', 'Tableau', 'Amplitude'],
    },
    {
      id: 'skill-m3',
      category: 'Leadership & Ops',
      items: ['Cross-Functional Leadership', 'Budget Allocation ($3M+)', 'Agency Management', 'A/B Experimentation'],
    },
  ],
  projects: [],
  certifications: [
    {
      id: 'cert-m1',
      name: 'Reforge Growth Series & Advanced Product Strategy',
      issuer: 'Reforge',
      date: '2023',
    },
  ],
  settings: {
    templateId: 'ats-minimal',
    fontFamily: 'sans',
    accentColor: '#0f172a',
    spacing: 'normal',
    showProjects: false,
    showCertifications: true,
  },
};

export const FINANCE_SAMPLE_RESUME: ResumeData = {
  personalInfo: {
    fullName: 'Marcus Sterling',
    title: 'Financial Analyst & Corporate Strategy Associate',
    email: 'marcus.sterling@example.com',
    phone: '+1 (212) 555-0199',
    location: 'New York, NY',
    website: '',
    linkedin: 'linkedin.com/in/marcus-sterling-cfa',
    github: '',
  },
  summary:
    'Results-focused Corporate Finance Analyst with 5+ years executing three-statement financial modeling, valuation analysis, and capital budgeting. Led transaction modeling on 6 completed middle-market M&A engagements totaling $680M aggregate deal value.',
  experience: [
    {
      id: 'exp-f1',
      company: 'Crestline Capital Partners',
      role: 'Private Equity / Corporate Strategy Associate',
      location: 'New York, NY',
      startDate: '2022-04',
      endDate: '',
      current: true,
      bullets: [
        'Constructed dynamic DCF, LBO, and accretion/dilution models to evaluate 15+ buyout opportunities across software and logistics verticals.',
        'Spearheaded commercial due diligence and vendor audit processes for a $210M platform acquisition, identifying $14M in post-close EBITDA synergies.',
        'Authored quarterly investment committee memorandums and partner board presentations for institutional limited partners managing $1.2B AUM.',
      ],
    },
    {
      id: 'exp-f2',
      company: 'Deloitte Financial Advisory',
      role: 'Senior Financial Analyst',
      location: 'New York, NY',
      startDate: '2019-07',
      endDate: '2022-03',
      current: false,
      bullets: [
        'Delivered 35+ valuations and purchase price allocations complying with ASC 820/805 fair value reporting standards for Fortune 500 corporations.',
        'Engineered custom Monte Carlo simulation models in Python and Excel reducing complex impairment scenario runtime by 70%.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-f1',
      institution: 'New York University, Stern School of Business',
      degree: 'Bachelor of Science in Finance and Statistics',
      field: 'Finance & Applied Statistics',
      location: 'New York, NY',
      graduationDate: '2019',
      gpa: '3.88',
      honors: 'Summa Cum Laude, Beta Gamma Sigma Honor Society',
    },
  ],
  skills: [
    {
      id: 'skill-f1',
      category: 'Financial Modeling',
      items: ['LBO Modeling', 'DCF Valuation', 'M&A Accretion/Dilution', '3-Statement Forecasting', 'Sensitivity Analysis'],
    },
    {
      id: 'skill-f2',
      category: 'Software & Tools',
      items: ['Advanced Excel / VBA', 'FactSet', 'Bloomberg Terminal', 'Capital IQ', 'Python for Finance', 'SQL'],
    },
    {
      id: 'skill-f3',
      category: 'Corporate Governance',
      items: ['US GAAP', 'ASC 805/820', 'Capital Budgeting', 'Board Reporting', 'Due Diligence Management'],
    },
  ],
  projects: [],
  certifications: [
    {
      id: 'cert-f1',
      name: 'CFA Charterholder (Chartered Financial Analyst)',
      issuer: 'CFA Institute',
      date: '2023',
    },
  ],
  settings: {
    templateId: 'classic-corporate',
    fontFamily: 'serif',
    accentColor: '#1e293b',
    spacing: 'normal',
    showProjects: false,
    showCertifications: true,
  },
};

export const EMPTY_RESUME: ResumeData = {
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
  },
  summary: '',
  experience: [
    {
      id: 'exp-empty-1',
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      bullets: [''],
    },
  ],
  education: [
    {
      id: 'edu-empty-1',
      institution: '',
      degree: '',
      field: '',
      location: '',
      graduationDate: '',
    },
  ],
  skills: [
    {
      id: 'skill-empty-1',
      category: 'Core Competencies',
      items: [],
    },
  ],
  projects: [],
  certifications: [],
  settings: {
    templateId: 'modern-executive',
    fontFamily: 'sans',
    accentColor: '#1e293b',
    spacing: 'normal',
    showProjects: true,
    showCertifications: true,
  },
};
