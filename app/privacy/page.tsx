import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ResumeBuilder Pro',
  description: 'Our commitment to your data privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-slate-400 mb-8 font-mono text-sm">Last Updated: September 12, 2026</p>
        
        <div className="prose prose-invert prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-300 font-medium mb-8">
            Your privacy is our priority. Our core tool operates entirely within your browser, ensuring your sensitive career data remains under your control.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Data Storage and Processing</h2>
          <p className="text-slate-400">
            <strong>Client-Side Execution:</strong> The ResumeBuilder Pro application is designed to operate primarily on the client-side (in your web browser). When you enter information into the resume builder (such as your name, contact details, work history, and education), this data is stored locally on your device using browser APIs (like <code>localStorage</code>).
          </p>
          <p className="text-slate-400">
            <strong>No Server Retention:</strong> We do not transmit, upload, or store your resume content on our servers. The PDF generation process (using HTML to Canvas techniques) happens entirely on your machine.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Information We Collect</h2>
          <p className="text-slate-400">
            Because our core application runs locally, we collect minimal data:
          </p>
          <ul className="text-slate-400 space-y-2 list-disc pl-6 mb-6">
            <li><strong>Analytics Data:</strong> We may use standard web analytics tools to collect anonymized usage data (e.g., page views, browser type, referral sources) to improve our website's performance and user experience.</li>
            <li><strong>Contact Information:</strong> If you voluntarily reach out to us via email or a contact form, we collect your name, email address, and the contents of your message solely to respond to your inquiry.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Third-Party Services</h2>
          <p className="text-slate-400">
            We may utilize third-party services to host our website or provide customer support features (such as live chat widgets). These third parties may collect anonymized interaction data as per their respective privacy policies. They do not have access to the resume data you type into the builder form.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Selling Data</h2>
          <p className="text-slate-400 font-semibold text-white">
            We do not sell, rent, or lease your personal information to third parties. We do not broker resume databases.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Changes to this Policy</h2>
          <p className="text-slate-400">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal obligations. We will notify users of significant changes by updating the "Last Updated" date at the top of this page.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. Contact Us</h2>
          <p className="text-slate-400">
            If you have questions regarding this Privacy Policy, please contact us at: <a href="mailto:privacy@resumebuilderpro.app" className="text-blue-400 hover:underline">privacy@resumebuilderpro.app</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
