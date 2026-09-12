import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, BLOG_POSTS } from '@/lib/blog-data';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { Metadata } from 'next';
import Markdown from 'react-markdown';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found | ResumeBuilder Pro',
    };
  }

  return {
    title: `${post.title} | ResumeBuilder Pro`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all articles
        </Link>
        
        <article>
          <header className="mb-12 space-y-6 border-b border-slate-800 pb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <span className="text-blue-400 px-3 py-1 bg-blue-900/20 rounded-full border border-blue-800/30">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.publishedDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 pt-4">
               <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-lg">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-base font-bold text-slate-200">{post.author.name}</div>
                  <div className="text-sm text-slate-500">{post.author.role}</div>
                </div>
            </div>
          </header>

          <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900 prose-blockquote:py-1 prose-blockquote:px-5 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-li:marker:text-slate-500">
            <Markdown>
              {post.content}
            </Markdown>
          </div>
        </article>
        
        <div className="mt-16 pt-10 border-t border-slate-800 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Ready to apply these tips?</h3>
          <Link
            href="/builder"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
          >
            Start Building Your Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
