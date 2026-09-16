import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Calendar, Stethoscope, Navigation, ArrowRight } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

export const QuickActionsSection: React.FC = () => {
  const quickActions = [
    {
      id: 'action-emergency',
      title: 'Emergency Care',
      subtitle: 'Available 24/7',
      description: 'Immediate medical attention for acute trauma, critical illness, and urgent crises.',
      link: '/emergency',
      icon: AlertCircle,
      iconBg: 'bg-red-50 text-[#c83b3b]',
      hoverBorder: 'hover:border-red-300',
      badge: 'Open 24/7',
      badgeClass: 'bg-red-100/80 text-red-800',
      isEmergency: true,
    },
    {
      id: 'action-book',
      title: 'Book Appointment',
      subtitle: 'Schedule online',
      description: 'Consult our family physicians, paediatricians, and obstetrics specialists.',
      link: '/appointments',
      icon: Calendar,
      iconBg: 'bg-blue-50 text-[#1476e8]',
      hoverBorder: 'hover:border-[#0f6bd9]',
      badge: 'Fast Booking',
      badgeClass: 'bg-[#edf5fc] text-[#0f6bd9]',
      isEmergency: false,
    },
    {
      id: 'action-services',
      title: 'Find a Service',
      subtitle: 'Comprehensive care',
      description: 'Explore diagnostic laboratory tests, maternity suites, and surgical care.',
      link: '/services',
      icon: Stethoscope,
      iconBg: 'bg-teal-50 text-[#0b7a75]',
      hoverBorder: 'hover:border-[#0b7a75]',
      badge: '6 Departments',
      badgeClass: 'bg-teal-50 text-[#0b7a75]',
      isEmergency: false,
    },
    {
      id: 'action-directions',
      title: 'Get Directions',
      subtitle: 'Visit our centre',
      description: 'Easily locate our centre in Benin City, 3 mins from Ring Road & Central Plaza.',
      link: hospitalInfo.address.googleMapsUrl,
      isExternal: true,
      icon: Navigation,
      iconBg: 'bg-orange-50 text-orange-600',
      hoverBorder: 'hover:border-orange-300',
      badge: 'Benin City',
      badgeClass: 'bg-orange-50 text-orange-700',
      isEmergency: false,
    },
  ];

  return (
    <section
      id="quick-actions-section"
      className="py-10 sm:py-12 bg-white relative z-20 border-b border-[#d8e3ec]"
      aria-label="Quick Patient Actions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#edf5fc] rounded-full text-[#0f6bd9] text-xs font-bold uppercase tracking-wider mb-2">
            <span>Immediate Patient Access</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#083b78] font-heading">
            How can we assist you today?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            const cardContent = (
              <div className={`action-card p-5 sm:p-6 flex flex-col justify-between h-full group ${action.hoverBorder}`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-105 ${action.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${action.badgeClass}`}>
                      {action.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base sm:text-lg text-[#083b78] font-heading group-hover:text-[#0f6bd9] transition-colors">
                    {action.title}
                  </h3>
                  <div className="text-xs font-medium text-[#5f6f7f] mb-2">{action.subtitle}</div>
                  <p className="text-xs text-[#5f6f7f] leading-relaxed mb-4">{action.description}</p>
                </div>

                <div
                  className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors pt-3 border-t border-[#d8e3ec]/70 ${
                    action.isEmergency
                      ? 'text-[#c83b3b] group-hover:text-red-700'
                      : 'text-[#0f6bd9] group-hover:text-[#083b78]'
                  }`}
                >
                  <span>{action.isEmergency ? 'Access 24/7 Triage' : 'Proceed'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );

            if (action.isExternal) {
              return (
                <a
                  key={action.id}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6bd9] rounded-[18px]"
                  id={action.id}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={action.id}
                to={action.link}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f6bd9] rounded-[18px]"
                id={action.id}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

