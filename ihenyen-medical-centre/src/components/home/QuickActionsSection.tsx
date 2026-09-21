import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { AlertCircle, Calendar, Stethoscope, Navigation, ArrowRight } from 'lucide-react';
import { draftServices, hospitalInfo } from '../../data/hospitalConfig';

export const QuickActionsSection: React.FC = () => {
  const quickActions = [
    {
      id: 'action-emergency',
      title: 'Urgent Care Guidance',
      subtitle: 'Call before arrival',
      description: 'Quick phone guidance for sudden severe symptoms, injuries, and urgent clinical concerns.',
      link: '/emergency',
      icon: AlertCircle,
      iconBg: 'bg-red-50 text-[#c83b3b]',
      hoverBorder: 'hover:border-red-300',
      badge: 'Call Now',
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
      description: 'Explore general care, women’s health, dental care, diagnostics, and paediatric support.',
      link: '/services',
      icon: Stethoscope,
      iconBg: 'bg-teal-50 text-[#0b7a75]',
      hoverBorder: 'hover:border-[#0b7a75]',
      badge: `${draftServices.length} Departments`,
      badgeClass: 'bg-teal-50 text-[#0b7a75]',
      isEmergency: false,
    },
    {
      id: 'action-directions',
      title: 'Get Directions',
      subtitle: 'Visit our centre',
      description: 'Find us at 4 Jemide Drive, Off Goodwill Street, Benin City.',
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
      className="relative z-20 border-b border-[#d8e3ec] bg-white py-12 sm:py-14"
      aria-label="Quick Patient Actions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="section-kicker mb-3">Immediate Patient Access</p>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#083b78] sm:text-4xl">
            Choose the right next step in seconds.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#5f6f7f] sm:text-base">
            Fast routes for urgent guidance, appointments, services and directions to the centre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            const cardContent = (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`action-card group flex h-full flex-col justify-between p-5 sm:p-6 ${action.hoverBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold transition-transform group-hover:scale-105 ${action.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${action.badgeClass}`}>
                      {action.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[#083b78] transition-colors group-hover:text-[#0d5cbd] sm:text-lg">
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
                  <span>{action.isEmergency ? 'Call for Guidance' : 'Proceed'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
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

