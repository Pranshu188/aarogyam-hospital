import React, { useState } from 'react';
import { ArrowRight, Clock, User, X, BookOpen, AlertCircle } from 'lucide-react';
import { ARTICLES } from '../../data/articles';
import { Article } from '../../types';

export const ArticlesPreview: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Evidence-Based Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 mt-3 tracking-tight">
              Health & Wellness Library
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mt-2">
              Practical medical advice written by Aarogyam's senior doctors for patients and families.
            </p>
          </div>

          <span className="text-[11px] text-slate-400 font-medium">
            *Demonstration health awareness articles
          </span>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-soft hover:shadow-card-hover transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy-950 group-hover:text-teal-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-navy-100 text-navy-800 font-bold flex items-center justify-center text-[10px]">
                    {article.authorDoctor[4]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-950 text-[11px]">{article.authorDoctor}</div>
                  </div>
                </div>

                <span className="font-bold text-teal-700 group-hover:text-teal-800 flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {selectedArticle.category}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.publishedDate}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-navy-950 leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy-900 text-teal-400 font-bold flex items-center justify-center text-sm shrink-0">
                    Dr
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy-950">{selectedArticle.authorDoctor}</h4>
                    <p className="text-[11px] text-slate-500">{selectedArticle.doctorRole}</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Demonstration medical article created for website presentation purposes.</span>
                </div>

                <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
