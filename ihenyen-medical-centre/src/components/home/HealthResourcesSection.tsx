import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, UserCheck } from 'lucide-react';
import { healthArticles } from '../../data/hospitalConfig';
import { PremiumCard } from '../common/PremiumCard';

export const HealthResourcesSection: React.FC = () => {
  return (
    <section
      id="health-resources-section"
      className="py-16 md:py-20 bg-white border-b border-[#d8e3ec]"
      aria-label="Health Resources and Patient Guides"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
              Patient Education
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading">
              Evidence-based health resources for your family.
            </h2>
            <p className="text-sm sm:text-base text-[#5f6f7f] mt-2">
              Understand symptoms, preventive screening guidelines, and clinical recommendations reviewed by medical practitioners.
            </p>
          </div>

          <Link
            to="/health-resources"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors self-start md:self-auto"
          >
            <span>Browse health library</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthArticles.map((article) => (
            <PremiumCard
              key={article.id}
              id={`article-card-${article.slug}`}
              className="flex flex-col justify-between h-full p-5"
            >
              <div>
                {/* Article Image Container with Zoom */}
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

                {/* Meta info: Reading Time & Date */}
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

                {/* Article Title */}
                <h3 className="text-base font-extrabold text-[#083b78] mb-2 font-heading leading-snug">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#5f6f7f] line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              {/* Author & Read Link */}
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
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
};
