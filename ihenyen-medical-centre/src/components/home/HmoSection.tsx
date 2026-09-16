import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, ShieldCheck, CheckCircle2, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';
import { draftHmoList, hospitalInfo } from '../../data/hospitalConfig';
import { PremiumCard } from '../common/PremiumCard';

export const HmoSection: React.FC = () => {
  return (
    <section
      id="hmo-section"
      className="py-16 md:py-20 bg-white border-b border-[#d8e3ec]"
      aria-label="Health Insurance and Payment Methods"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: HMO Coverage & Steps */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block">
              Insurance & Financial Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#083b78] font-heading leading-tight">
              HMO, NHIA & Transparent Payment Options.
            </h2>
            <p className="text-sm sm:text-base text-[#5f6f7f] leading-relaxed">
              We partner with national, state, and private Health Maintenance Organizations (HMOs) to provide streamlined medical coverage for enrolled individuals and corporate staff.
            </p>

            {/* Coverage Verification Process */}
            <div className="bg-[#edf5fc]/50 border border-[#d8e3ec] rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-extrabold text-[#083b78] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0f6bd9]" />
                <span>How to Access Your HMO Coverage</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#5f6f7f]">
                <div className="bg-white p-3 rounded-xl border border-[#d8e3ec]/80">
                  <span className="w-5 h-5 rounded-full bg-[#083b78] text-white flex items-center justify-center font-bold text-[10px] mb-2">
                    1
                  </span>
                  <p className="font-bold text-[#083b78] mb-1">Present Identification</p>
                  <p>Bring your HMO card, company ID, or policy number to registration desk.</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#d8e3ec]/80">
                  <span className="w-5 h-5 rounded-full bg-[#083b78] text-white flex items-center justify-center font-bold text-[10px] mb-2">
                    2
                  </span>
                  <p className="font-bold text-[#083b78] mb-1">Authorization Check</p>
                  <p>Our desk verifies primary eligibility and obtains pre-authorization codes.</p>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#d8e3ec]/80">
                  <span className="w-5 h-5 rounded-full bg-[#083b78] text-white flex items-center justify-center font-bold text-[10px] mb-2">
                    3
                  </span>
                  <p className="font-bold text-[#083b78] mb-1">Seamless Care</p>
                  <p>Receive consultation, laboratory tests, and prescribed pharmacy care directly.</p>
                </div>
              </div>
            </div>

            {/* Direct Link */}
            <div>
              <Link
                to="/hmo-and-payments"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0f6bd9] hover:text-[#083b78] transition-colors"
              >
                <span>Read detailed insurance guidelines & accepted schemes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accepted Provider Badges & Payment Modes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fbf8f2] border border-[#d8e3ec] rounded-2xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-base font-bold text-[#083b78] mb-3 font-heading flex items-center justify-between">
                <span>Accepted Insurance Providers</span>
                <span className="text-[11px] font-medium text-[#5f6f7f]">Draft Roster</span>
              </h3>

              <div className="space-y-2.5 mb-6">
                {draftHmoList.map((hmo) => (
                  <div
                    key={hmo.id}
                    className="p-3 bg-white rounded-xl border border-[#d8e3ec] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0b7a75] flex-shrink-0" />
                      <div>
                        <p className="font-bold text-[#083b78]">{hmo.name}</p>
                        <p className="text-[11px] text-[#5f6f7f]">{hmo.coverageNotes}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#083b78] bg-[#edf5fc] px-2 py-0.5 rounded uppercase flex-shrink-0">
                      {hmo.tier}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Billing Contact */}
              <div className="p-3 bg-white rounded-xl border border-[#d8e3ec] flex items-center justify-between text-xs text-[#5f6f7f]">
                <div>
                  <p className="font-bold text-[#083b78]">Have billing or NHIA questions?</p>
                  <p className="text-[11px]">Direct billing email: {hospitalInfo.contact.billingEmail}</p>
                </div>
                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="px-3 py-1.5 rounded-lg bg-[#0f6bd9] text-white font-bold text-xs hover:bg-[#083b78] transition-colors flex-shrink-0"
                >
                  Call Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
