import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, Filter, AlertCircle, ShieldCheck } from 'lucide-react';
import { healthArticles } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';
import { PremiumCard } from '../components/common/PremiumCard';

export const HealthResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(healthArticles.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === 'All'
      ? healthArticles
      : healthArticles.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="Health Resources & Medical Guides - Benin City"
        description="Evidence-based patient healthcare guides, antenatal advice, hypertension screening tips, and malaria prevention from Ihenyen Medical Centre."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Health Resources' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Patient Health Library
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            Health Resources & Clinical Guides
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            Educational articles and wellness advice reviewed by our medical advisory team to help you make informed decisions for yourself and your family.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#d8e3ec]">
          <span className="text-xs font-bold text-[#083b78] uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#0f6bd9]" />
            <span>Category:</span>
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-[#083b78] text-white shadow-2xs'
                  : 'bg-white text-[#5f6f7f] border border-[#d8e3ec] hover:bg-[#edf5fc] hover:text-[#083b78]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filteredArticles.map((article) => (
            <PremiumCard
              key={article.id}
              id={`article-card-${article.slug}`}
              className="flex flex-col justify-between h-full p-5 bg-white"
            >
              <div>
                <div className="image-zoom-container h-48 w-full bg-[#edf5fc] rounded-xl mb-4 relative">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#083b78]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[11px] text-[#5f6f7f] mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#0f6bd9]" />
                    <span>{article.readingTimeMinutes} min read</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0b7a75]" />
                    <span>{article.reviewDate}</span>
                  </span>
                </div>

                <h2 className="text-base font-extrabold text-[#083b78] mb-2 font-heading leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs text-[#5f6f7f] line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d8e3ec] mt-auto">
                <div className="flex items-center justify-between mb-3 text-[11px] text-[#5f6f7f]">
                  <span className="font-semibold text-[#083b78]">{article.author}</span>
                  <span className="text-[#0b7a75] font-mono text-[10px]">
                    {article.authorQualifications}
                  </span>
                </div>

                <Link
                  to={`/health-resources/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </PremiumCard>
          ))}
        </div>

        {/* Medical Advisory Notice */}
        <div className="p-4 bg-white border border-[#d8e3ec] rounded-xl text-xs text-[#5f6f7f] max-w-3xl flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#0b7a75] flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#083b78]">Clinical Disclaimer:</strong> Health resources published on this portal are for general community education only. They do not constitute personalized medical diagnosis or treatment prescriptions. For individual evaluation, please book a consultation with our medical practitioners.
          </span>
        </div>
      </div>
    </div>
  );
};
