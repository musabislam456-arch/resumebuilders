import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Guides & ATS Tips | ResumeBuilder Pro',
  description: 'Expert advice on resume writing, passing ATS parsers, and executive career strategy.',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-extrabold text-white mb-4">Career Strategy Guides</h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Actionable insights from veteran recruiters and hiring managers. Learn how to beat the ATS and craft high-converting bullet points.
          </p>
        </div>

        <div className="grid gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.slug}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors group"
            >
              <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <span className="text-blue-400">{post.category}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.publishedDate}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-xs">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200">{post.author.name}</div>
                      <div className="text-xs text-slate-500">{post.author.role}</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:shrink-0 flex items-center">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white group-hover:bg-blue-600 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
