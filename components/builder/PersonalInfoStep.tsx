'use client';

import React from 'react';
import { PersonalInfo } from '@/types/resume';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github, Briefcase } from 'lucide-react';

interface PersonalInfoStepProps {
  data: PersonalInfo;
  onChange: (updated: PersonalInfo) => void;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-5">
      <div className="border-b border-slate-800 pb-3">
        <h3 className="text-base font-semibold text-white flex items-center gap-2">
          <User className="w-4 h-4 text-blue-400" />
          <span>Contact & Identification Details</span>
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Enter verified contact info. ATS parsers extract these directly into candidate records.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-fullname">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-fullname"
              type="text"
              value={data.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              placeholder="e.g. Alexander Vance"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Target Job Title */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-title">
            Professional Title / Target Role <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <Briefcase className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-title"
              type="text"
              value={data.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="e.g. Senior Full-Stack Engineer"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-email">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-email"
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="e.g. alex.vance@example.com"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-phone">
            Phone Number <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              placeholder="e.g. +1 (415) 555-0182"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Location */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-location">
            Location (City, State/Country) <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-location"
              type="text"
              value={data.location}
              onChange={(e) => handleChange('location', e.target.value)}
              placeholder="e.g. San Francisco, CA (or Remote)"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-linkedin">
            LinkedIn Profile
          </label>
          <div className="relative">
            <Linkedin className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-linkedin"
              type="text"
              value={data.linkedin}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="linkedin.com/in/alexvance"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Portfolio / Website */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-website">
            Portfolio / Website URL
          </label>
          <div className="relative">
            <Globe className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-website"
              type="text"
              value={data.website}
              onChange={(e) => handleChange('website', e.target.value)}
              placeholder="alexvance.dev"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* GitHub */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-slate-300 mb-1.5" htmlFor="field-github">
            GitHub / Code Repository
          </label>
          <div className="relative">
            <Github className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input
              id="field-github"
              type="text"
              value={data.github}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="github.com/alexvance"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
