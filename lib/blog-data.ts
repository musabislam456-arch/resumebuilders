export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ats-friendly-resume-tips-2026',
    title: 'ATS-Friendly Resume Tips 2026: How Modern Algorithms Parse Your Application',
    excerpt:
      'Discover how enterprise applicant tracking systems (Workday, Greenhouse, Taleo) parse documents in 2026, and learn the essential formatting rules that prevent silent rejections.',
    category: 'ATS & Compliance',
    readTime: '6 min read',
    publishedDate: '2026-02-18',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Talent Acquisition Lead',
    },
    content: `
### What Changed in Applicant Tracking Systems for 2026?

Over 98% of Fortune 500 corporations and more than 70% of high-growth technology startups utilize Applicant Tracking Systems (ATS) to filter candidate pipelines before a human recruiter ever sees a resume. In 2026, modern platforms like Workday, Greenhouse, Lever, and SmartRecruiters have integrated semantic vector parsing alongside traditional keyword boolean matching.

Yet, despite advancements in machine intelligence, millions of qualified candidates are still silently filtered out due to simple formatting pitfalls. Understanding how the parser ingests your resume is the single highest-ROI step in your job search.

---

### The 5 Golden Rules of ATS Formatting

#### 1. Avoid Multi-Column and Complex Table Layouts
While multi-column Canva templates look aesthetically pleasing in graphic design portfolios, they are algorithmic kryptonite for ATS parsers. 
- When an ATS reads a multi-column PDF, it often reads across the entire page horizontally rather than down each column separately.
- This scrambles job titles, dates, and bullet points into an unintelligible slurry of fragmented text.
- **Rule:** Stick to a clean, single-column linear layout or standard structured sections.

#### 2. Stick to Universal Standard Section Headings
Algorithmic parsers look for specific structural anchors to populate relational database fields:
- Use **"Work Experience"** or **"Professional Experience"** instead of creative phrases like *"Where I've Made Magic"* or *"Career Journey"*.
- Use **"Education"** instead of *"Academic Foundation"*.
- Use **"Skills"** or **"Technical Competencies"** instead of *"Tools & Superpowers"*.

#### 3. Match Contextual Keywords With Exact Phrasing
Modern parsers do not just count keyword frequency—they analyze keyword context.
- If a job listing requires **"Kubernetes cluster administration"**, writing simply *"cloud tools"* will not trigger the matching threshold.
- Mirror the exact terminology from the target job specification in your skills list and within your work experience bullet points.
- Never "keyword stuff" or hide white text in the background (modern ATS parsers detect invisible text and flag your file for immediate disqualification).

#### 4. Clean Contact Info: Keep It Out of the Header/Footer
Many word processors place contact details in the document header or footer layer. Standard ATS parsers systematically discard headers and footers to avoid parsing repeating page numbers and confidential watermarks.
- Place your name, phone number, email, and location directly in the **body** of the document at the very top.

#### 5. Choose the Right File Format
- Standard **PDF** created from text or cleanly rasterized layouts is the universal gold standard.
- Avoid scanned image PDFs or flattened canvas files without OCR text layers. When you highlight the text in a PDF viewer, you should be able to select and copy individual words cleanly.

---

### Key Takeaway for 2026 Candidates

The goal of your resume is not to win an art award—it is to clearly convey your quantifiable business value to both a software parser and a busy hiring manager spending an average of 6.2 seconds on an initial screen. Keep the layout crisp, the hierarchy logical, and the numbers front and center.
`,
  },
  {
    slug: 'common-resume-mistakes-to-avoid',
    title: '10 Fatal Resume Mistakes That Quietly Kill Interview Rates (And How to Fix Them)',
    excerpt:
      'From passive verbs and unquantified job duties to confusing timeline gaps, these are the 10 most damaging resume blunders reported by veteran corporate recruiters.',
    category: 'Resume Strategy',
    readTime: '7 min read',
    publishedDate: '2026-01-29',
    author: {
      name: 'Sarah Chen, PHR',
      role: 'Head of Executive Recruiting',
    },
    content: `
### Why Most Resumes Get Ignored in Under 10 Seconds

Recruiters review hundreds of candidate submissions every week. When skimming through a stack, they are not looking for reasons to hire you—they are looking for rapid filters to narrow down the candidate pool from 300 to 5 interviewees.

Avoiding the following 10 common resume mistakes will immediately place your application in the top 10% of candidates.

---

### Mistake 1: Listing "Job Responsibilities" Instead of Business Outcomes
The single most frequent mistake is copy-pasting your internal job description.
- **Weak:** *"Responsible for managing digital marketing campaigns and posting on social media."*
- **Strong:** *"Managed $120K quarterly paid acquisition budget, generating 1,450 enterprise leads and cutting cost-per-acquisition (CPA) by 31%."*

### Mistake 2: Missing Quantifiable Metrics
If your resume has no numbers, percentages, dollar signs, or timeframes, it is impossible for a hiring manager to evaluate the scale or impact of your work. Always quantify team size, budget scale, percentage growth, latency reductions, or revenue generated.

### Mistake 3: Starting Bullets With Passive Verbs
Words like *"Helped with"*, *"Assisted in"*, *"Worked on"*, or *"Was tasked with"* communicate passivity and dilute your leadership. 
Replace them with active, decisive verbs:
- Instead of *"Assisted with new website rollout"*, write: **"Orchestrated cross-functional deployment of customer web portal across 4 departments."**

### Mistake 4: Overloading the Resume to 3+ Pages
Unless you are a senior academic with dozens of peer-reviewed publications or an executive with 25+ years of board experience, keep your resume to **1 or 2 pages maximum**.
- 0 to 8 years experience: **1 page**
- 8+ years experience with multiple senior roles: **2 pages**

### Mistake 5: Vague or Unprofessional Contact Information
Ensure your email address is a clean, professional address (e.g., \`first.last@gmail.com\`). You do not need to include your full street address—city and state are sufficient and protect your personal privacy.

### Mistake 6: Unexplained Chronological Gaps
Unexplained employment gaps of more than 6 months can cause recruiters to make negative assumptions. Briefly frame sabbatical periods cleanly: *"Career Break – Family Caregiver / Full-time Independent Upskilling (2023–2024)"*.

### Mistake 7: Generic "One-Size-Fits-All" Submissions
Sending the exact same resume to 50 distinct positions yields low conversion. Tailor the top professional summary and prioritize the most relevant 3-4 bullet points for each specific target industry.

### Mistake 8: Listing Outdated or Irrelevant Technologies
Including technologies that haven't been standard in modern workflows (such as Microsoft Word 2003 or Macromedia Flash) dates your skill set. Focus on current industry standards and modern architectures.

### Mistake 9: Inconsistent Date and Location Formatting
Switching between *"Jan 2024"*, *"01/2024"*, and *"January 2024"* throughout the same document suggests a lack of attention to detail. Select one convention and maintain strict consistency across all entries.

### Mistake 10: Grammatical Errors and Typographical Slips
A single typographical error in a role where attention to detail is required (e.g., software engineering, compliance, finance, healthcare) can eliminate you from contention. Always run your resume through a multi-pass grammar check and review every date manually.
`,
  },
  {
    slug: 'how-to-write-impactful-work-bullets-xyz-formula',
    title: 'The Google XYZ Formula: Transforming Vague Job Duties Into High-Impact Career Bullets',
    excerpt:
      'Learn how Google recruiters recommend formatting every single bullet point on your resume using the proven formula: Accomplished [X], as measured by [Y], by doing [Z].',
    category: 'Bullet Writing',
    readTime: '5 min read',
    publishedDate: '2026-03-04',
    author: {
      name: 'David Aris',
      role: 'Former Staff Engineering Recruiter',
    },
    content: `
### The Power of the Google "XYZ" Formula

Laszlo Bock, former Senior Vice President of People Operations at Google, famously popularized a simple yet transformative formula for every single accomplishment listed on a resume:

> **"Accomplished [X] as measured by [Y], by doing [Z]."**

Most resumes only state what the person did (Z). Some state what happened (X). But high-performing candidates clearly articulate all three components together in a concise, punchy sentence.

---

### Breaking Down the Components

1. **[X] The Accomplishment / Business Result:** What did you achieve or build? What problem did you solve?
2. **[Y] The Measurement / Metric:** How was that success objectively measured? (Dollars saved, % throughput gained, hours slashed, adoption rate).
3. **[Z] The Action / Methodology:** What specific tools, leadership strategies, or technical choices did you implement to bring that result to life?

---

### Real Before-and-After Transformations

#### Example 1: Software Engineering
- **Before:** *"Wrote backend APIs in Go for client authentication."*
- **After (XYZ):** **"Reduced API authentication latency by 35% [X/Y] by architecting an in-memory Redis caching cluster and optimizing database indexing [Z]."**

#### Example 2: Product & Operations
- **Before:** *"Managed customer onboarding and resolved ticket backlog."*
- **After (XYZ):** **"Accelerated new customer onboarding from 14 days to 4 days [X/Y] by designing automated self-serve email workflows and onboarding checklists [Z]."**

#### Example 3: Sales & Account Management
- **Before:** *"Exceeded sales target and pitched software to corporate clients."*
- **After (XYZ):** **"Delivered $1.8M in net new ARR, exceeding annual quota by 124% [X/Y], by targeting mid-market healthcare accounts with customized ROI presentations [Z]."**

---

### The Power Action Verb Bank

When starting your XYZ bullet, eliminate passive introductions. Begin with one of these high-velocity action verbs:

- **For Growth & Revenue:** *Expanded, Accelerated, Generated, Captured, Exceeded, Maximized*
- **For Cost & Efficiency:** *Streamlined, Consolidated, Decreased, Slashed, Automated, Eliminated*
- **For Technical & Engineering:** *Architected, Engineered, Refactored, Deployed, Standardized, Integrated*
- **For Leadership & Mentorship:** *Spearheaded, Championed, Orchestrated, Mentored, Directed, Mobilized*

Applying the XYZ formula to just 4 or 5 bullet points in your most recent role will instantly upgrade your resume from an ordinary duty list into an executive achievement dossier.
`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
