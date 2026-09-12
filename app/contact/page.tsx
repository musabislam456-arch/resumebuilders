import React from 'react';
import { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | ResumeBuilder Pro',
  description: 'Get in touch with the ResumeBuilder Pro team.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Contact Us</h1>
        <p className="text-lg text-slate-400 mb-12">
          Have a question about ATS compatibility, need technical support, or want to share feedback? We're here to help.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <Mail className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
            <p className="text-slate-400 text-sm mb-4">
              For technical issues, bug reports, or general inquiries. We aim to respond within 24 hours.
            </p>
            <a href="mailto:support@resumebuilderpro.app" className="text-blue-400 hover:text-blue-300 font-semibold">
              support@resumebuilderpro.app
            </a>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <MapPin className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Corporate Office</h3>
            <p className="text-slate-400 text-sm mb-4">
              ResumeBuilder Pro Technologies<br />
              100 Innovation Drive, Suite 400<br />
              San Francisco, CA 94111<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-y"
              />
            </div>
            <button
              type="button"
              className="px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
            >
              Send Message
            </button>
            <p className="text-xs text-slate-500 mt-3">
              This form is for demonstration purposes. In a production environment, this would submit via API.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
