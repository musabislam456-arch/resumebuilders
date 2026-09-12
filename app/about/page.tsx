import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | ResumeBuilder Pro',
  description: 'Learn about our mission to help professionals build better resumes.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">About ResumeBuilder Pro</h1>
        
        <div className="prose prose-invert prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-300 font-medium mb-8">
            We believe that a great candidate should never be rejected just because an algorithmic parser couldn't read their PDF.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Mission</h2>
          <p className="text-slate-400">
            ResumeBuilder Pro was founded in 2026 by a collective of former FAANG technical recruiters and engineering managers. After reviewing thousands of resumes and watching highly qualified candidates get filtered out by broken ATS (Applicant Tracking System) software, we decided to build a tool that guarantees structural compliance.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Why Client-Side?</h2>
          <p className="text-slate-400">
            Your career data is highly sensitive. We noticed a disturbing trend in the resume builder industry: companies holding user data hostage behind paywalls, or worse, selling applicant contact lists to third-party marketing agencies.
          </p>
          <p className="text-slate-400 mt-4">
            That is why ResumeBuilder Pro is engineered to run 100% in your local browser. When you type in our builder, the data stays on your machine. When you export a PDF, it is generated locally. We have zero database retention of your resume content.
          </p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Editorial Integrity</h2>
          <p className="text-slate-400">
            Our career guides and ATS tips are written by real industry practitioners—heads of talent acquisition, executive recruiters, and hiring managers. We do not publish generic SEO filler. Every piece of advice we provide is tested against modern screening software and human review practices.
          </p>
        </div>
      </div>
    </div>
  );
}
