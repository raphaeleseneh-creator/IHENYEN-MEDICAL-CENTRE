import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MessageSquare, Calendar, HeartPulse, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { hospitalInfo } from '../../data/hospitalConfig';

const careSignals = [
  { label: 'Urgent care guidance', value: 'Call now', icon: HeartPulse },
  { label: 'Outpatient clinic', value: 'Mon to Sat', icon: Clock },
  { label: 'Patient privacy', value: 'NDPA aligned', icon: ShieldCheck },
];

export const HeroSection: React.FC = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hospital-hero-section"
      className="relative min-h-[calc(100dvh-112px)] overflow-hidden bg-[#03152b] text-white"
      aria-label="Welcome to Ihenyen Medical Centre"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2200&auto=format&fit=crop"
          alt="Doctor giving attentive care during a patient consultation"
          className="h-full w-full object-cover object-[63%_center]"
          loading="eager"
        />
        <div className="hero-photo-vignette absolute inset-0" />
        <div className="hero-fine-grid absolute inset-0 opacity-45" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-112px)] w-full max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <motion.div
            className="max-w-3xl lg:col-span-7"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: reduceMotion ? 0 : 0.08 }}
          >
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-blue-100"
            >
              Ihenyen Medical Centre
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[76px]"
            >
              Quality healthcare you can trust.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base leading-8 text-blue-50/88 sm:text-lg"
            >
              General and specialist care in a serene, patient-friendly environment at Ihenyen Medical Centre, Benin City.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to="/appointments"
                className="btn-primary min-h-14 px-7 text-base font-extrabold"
                id="hero-book-appointment-cta"
              >
                <Calendar className="mr-2 h-5 w-5" />
                <span>Start Your Care</span>
              </Link>

              <a
                href={`tel:${hospitalInfo.contact.mainPhone}`}
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/28 bg-white/12 px-7 text-base font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-white hover:text-[#083b78] active:scale-[0.98]"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span>Call the Hospital</span>
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap items-center gap-3 text-sm text-blue-50/85"
            >
              <a
                href={hospitalInfo.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-4 py-2 font-semibold backdrop-blur-md transition-colors hover:bg-white/18"
                aria-label="Chat with patient support team on WhatsApp"
              >
                <MessageSquare className="h-4 w-4 text-emerald-200" />
                <span>WhatsApp support</span>
              </a>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/10 px-4 py-2 font-semibold backdrop-blur-md">
                <MapPin className="h-4 w-4 text-blue-200" />
                <span>{hospitalInfo.address.city}, {hospitalInfo.address.state}</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="care-glass rounded-2xl p-4 sm:p-5">
              <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/16 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100/75">Today at IMC</p>
                  <p className="mt-1 text-lg font-extrabold text-white">Care teams are ready</p>
                </div>
                <a
                  href={`tel:${hospitalInfo.contact.emergencyPhone}`}
                  className="rounded-xl bg-[#c83b3b] px-3 py-2 text-sm font-extrabold text-white shadow-lg shadow-red-950/20 transition-transform active:scale-[0.98]"
                >
                  Urgent Call
                </a>
              </div>

              <div className="space-y-3">
                {careSignals.map((signal) => {
                  const Icon = signal.icon;
                  return (
                    <div key={signal.label} className="flex items-center justify-between gap-4 rounded-xl bg-white/10 p-3">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#083b78]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-blue-50">{signal.label}</span>
                      </div>
                      <span className="text-sm font-extrabold text-white">{signal.value}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl bg-white p-4 text-[#10243e]">
                <p className="text-sm font-extrabold text-[#083b78]">Need urgent guidance?</p>
                <p className="mt-1 text-sm text-[#5f6f7f]">
                  Call {hospitalInfo.contact.emergencyPhoneDisplay} before arrival for sudden severe symptoms or injuries.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
