import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ResumeBuilder Pro',
  description: 'Terms and conditions for using ResumeBuilder Pro.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Terms of Service</h1>
        <p className="text-slate-400 mb-8 font-mono text-sm">Effective Date: September 12, 2026</p>
        
        <div className="prose prose-invert prose-slate prose-lg max-w-none">
          <p className="text-slate-400">
            Welcome to ResumeBuilder Pro ("we," "our," or "us"). By accessing or using our website and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Description of Service</h2>
          <p className="text-slate-400">
            ResumeBuilder Pro provides a web-based tool for formatting, editing, and exporting professional resumes. The Service operates primarily on the client-side within the user's web browser, offering features such as template application and PDF generation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. User Responsibilities</h2>
          <p className="text-slate-400">
            You are solely responsible for the accuracy, legality, and appropriateness of the content you input into the Service. We do not verify, endorse, or assume responsibility for any information contained within your generated documents.
          </p>
          <p className="text-slate-400 mt-4">
            You agree not to use the Service for any unlawful purpose, to generate misleading or fraudulent credentials, or in a way that infringes upon the intellectual property rights of others.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Intellectual Property</h2>
          <p className="text-slate-400">
            The layout, design, graphics, text, and source code of the ResumeBuilder Pro platform are owned by us and are protected by applicable intellectual property laws. You retain all ownership rights to the personal data and content you input into your resume.
          </p>
          <p className="text-slate-400 mt-4">
            By using the Service, you are granted a limited, non-exclusive, non-transferable license to generate and export documents for your personal, professional use. You may not resell the templates or reverse-engineer the platform.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Disclaimer of Warranties</h2>
          <p className="text-slate-400">
            The Service is provided on an "as-is" and "as available" basis. While we strive to provide a reliable tool and accurate ATS (Applicant Tracking System) guidance, we make no guarantees regarding job placement, interview rates, or the absolute compatibility of exported documents with every third-party software system.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Limitation of Liability</h2>
          <p className="text-slate-400">
            To the maximum extent permitted by law, ResumeBuilder Pro and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or employment opportunities arising out of or related to your use of the Service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Modifications</h2>
          <p className="text-slate-400">
            We reserve the right to modify or discontinue, temporarily or permanently, the Service or these Terms with or without notice. Continued use of the Service following any updates constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">7. Contact Information</h2>
          <p className="text-slate-400">
            If you have questions about these Terms, please contact us at <a href="mailto:legal@resumebuilderpro.app" className="text-blue-400 hover:underline">legal@resumebuilderpro.app</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
