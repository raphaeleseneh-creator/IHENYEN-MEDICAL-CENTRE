import React from 'react';
import { ShieldCheck, CreditCard, CheckCircle2, Phone, Mail, HelpCircle, AlertCircle } from 'lucide-react';
import { draftHmoList, hospitalInfo } from '../data/hospitalConfig';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/common/SeoHead';

export const HmoPaymentsPage: React.FC = () => {
  return (
    <div className="bg-[#fbf8f2]/30 min-h-screen pb-16">
      <SeoHead
        title="HMO & Health Insurance Coverage - Payment Methods"
        description="Learn about accepted HMOs, NHIA health insurance policies, and transparent payment options at Ihenyen Medical Centre in Benin City."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'HMO & Payments' }]} />

        {/* Page Header */}
        <div className="py-8 md:py-12 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f6bd9] block mb-2">
            Insurance & Financial Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#083b78] font-heading leading-tight">
            HMO Insurance & Payment Options
          </h1>
          <p className="text-base sm:text-lg text-[#5f6f7f] mt-3 leading-relaxed">
            We partner with national, state, and private Health Maintenance Organizations to deliver seamless medical care. For private-pay patients, we support transparent payment channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: HMO Schemes & Verification */}
          <div className="lg:col-span-7 space-y-8">
            {/* Accepted HMO List */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#083b78] font-heading flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0f6bd9]" />
                  <span>Accepted Health Insurance Providers</span>
                </h2>
                <span className="text-xs text-[#5f6f7f] bg-gray-100 px-2.5 py-1 rounded-full font-semibold">
                  Draft Roster
                </span>
              </div>

              <p className="text-xs text-[#5f6f7f] mb-6">
                Below are the primary health insurance schemes and HMO networks currently recognized by our administrative desk:
              </p>

              <div className="space-y-3">
                {draftHmoList.map((hmo) => (
                  <div
                    key={hmo.id}
                    className="p-4 rounded-xl border border-[#d8e3ec] bg-[#edf5fc]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0b7a75]" />
                        <h3 className="text-sm font-bold text-[#083b78]">{hmo.name}</h3>
                      </div>
                      <p className="text-xs text-[#5f6f7f] pl-6">{hmo.coverageNotes}</p>
                    </div>

                    <div className="pl-6 sm:pl-0 flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#083b78] bg-white border border-[#d8e3ec] px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {hmo.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step HMO Authorization Flow */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-[#083b78] font-heading">
                Step-by-Step HMO Coverage Confirmation
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78]">Present Your HMO Credentials</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      On arrival at the reception desk, present your physical HMO card, enrollee ID number, or corporate healthcare identification.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78]">Verification & Pre-Authorization (PA)</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      Our desk contacts your HMO provider portal for authorization codes required for specialized diagnostics, admissions, or surgical procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#083b78] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#083b78]">Co-payments (If Applicable)</h3>
                    <p className="text-xs text-[#5f6f7f] mt-0.5">
                      Depending on your specific plan tier, your HMO may require a nominal 10% drug co-payment as mandated by NHIA guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Private-Pay Methods & Billing Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* Private Payment Methods */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#083b78] uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-[#0f6bd9]" />
                <span>Private Patient Payment Options</span>
              </div>

              <p className="text-xs text-[#5f6f7f]">
                For patients accessing services privately, we support multiple transparent and secure payment methods:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Debit Card / POS Terminals</p>
                  <p className="text-[#5f6f7f]">Visa, Mastercard, and Verve cards accepted at our central cashier.</p>
                </div>

                <div className="p-3 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Direct Bank Transfer</p>
                  <p className="text-[#5f6f7f]">Instant electronic bank transfers to official hospital corporate accounts.</p>
                </div>

                <div className="p-3 bg-[#edf5fc]/60 rounded-xl border border-[#d8e3ec]">
                  <p className="font-bold text-[#083b78]">Corporate Retainership</p>
                  <p className="text-[#5f6f7f]">Structured monthly billing accounts for registered companies in Edo State.</p>
                </div>
              </div>
            </div>

            {/* Direct Billing Support Desk */}
            <div className="bg-white border border-[#d8e3ec] rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-sm font-bold text-[#083b78] uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-[#0b7a75]" />
                <span>Billing & HMO Coordination Desk</span>
              </h3>
              <p className="text-xs text-[#5f6f7f]">
                Need to confirm if your specific HMO plan covers a procedure before visiting?
              </p>

              <div className="space-y-2 pt-2 text-xs font-medium">
                <a
                  href={`tel:${hospitalInfo.contact.mainPhone}`}
                  className="flex items-center gap-2 text-[#083b78] hover:text-[#0f6bd9] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0f6bd9]" />
                  <span>Call Desk: {hospitalInfo.contact.mainPhoneDisplay}</span>
                </a>

                <a
                  href={`mailto:${hospitalInfo.contact.billingEmail}`}
                  className="flex items-center gap-2 text-[#083b78] hover:text-[#0f6bd9] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#083b78]" />
                  <span>{hospitalInfo.contact.billingEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
