import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ShieldCheck, ArrowRight, ArrowLeft, Heart, CheckCircle2 } from 'lucide-react';
import { healthArticles } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const ArticleDetailPage: React.FC = () => {
  const { articleSlug } = useParams<{ articleSlug: string }>();

  const article = healthArticles.find((a) => a.slug === articleSlug);

  if (!article) {
    return <Navigate to="/health-resources" replace />;
  }

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title={`${article.title} - Health Resources`}
        description={article.summary}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs
          items={[
            { label: 'Health Resources', path: '/health-resources' },
            { label: article.title },
          ]}
        />

        {/* Back Button */}
        <div className="my-4">
          <Link
            to="/health-resources"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#083b78] hover:text-[#0f6bd9] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Health Library</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white border border-[#d8e3ec] rounded-2xl overflow-hidden shadow-sm p-6 sm:p-10 mb-10">
          {/* Category & Title */}
          <span className="text-xs font-bold text-[#0f6bd9] bg-[#edf5fc] px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            {article.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading leading-tight mb-4">
            {article.title}
          </h1>

          {/* Author & Review Meta Box */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-[#d8e3ec] text-xs text-[#5f6f7f] mb-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#083b78]">Reviewed by:</span>
              <span>{article.author} ({article.authorQualifications})</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0b7a75]" />
                <span>Reviewed: {article.reviewDate}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0f6bd9]" />
                <span>{article.readingTimeMinutes} min read</span>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="h-64 sm:h-80 w-full bg-[#edf5fc] rounded-xl overflow-hidden mb-8">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Lead Summary */}
          <div className="p-4 bg-[#edf5fc]/50 border-l-4 border-[#0f6bd9] rounded-r-xl text-sm text-[#083b78] font-medium leading-relaxed mb-8">
            {article.summary}
          </div>

          {/* Formatted Article Body */}
          <div className="space-y-6 text-sm sm:text-base text-[#10243e] leading-relaxed">
            {article.contentMarkdown.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#083b78] font-heading mt-6 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold text-[#083b78] font-heading mt-8 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* Clinical Disclaimer */}
          <div className="mt-10 pt-6 border-t border-[#d8e3ec] text-xs text-[#5f6f7f] flex items-start gap-3 bg-[#fbf8f2] p-4 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#0b7a75] flex-shrink-0 mt-0.5" />
            <span>
              This article is provided for educational and community awareness purposes only and should not be used as a substitute for clinical medical advice from a qualified doctor.
            </span>
          </div>
        </article>

        {/* Schedule Consultation Callout */}
        <div className="bg-[#edf5fc] border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold text-[#083b78] font-heading">
              Have questions about your health?
            </h2>
            <p className="text-xs text-[#5f6f7f] mt-1">
              Speak with a medical practitioner at Ihenyen Medical Centre today.
            </p>
          </div>

          <Link
            to="/appointments"
            className="px-5 py-2.5 rounded-xl bg-[#0f6bd9] hover:bg-[#083b78] text-white text-xs font-bold transition-colors shadow-2xs whitespace-nowrap"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};
