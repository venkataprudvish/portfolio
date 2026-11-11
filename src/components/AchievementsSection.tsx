import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Award, GraduationCap } from 'lucide-react';
import { ACHIEVEMENTS_DATA, AcademicMetric } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const AnimatedAcademicCard: React.FC<{ metric: AcademicMetric }> = ({ metric }) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = numberRef.current;
    const container = cardRef.current;
    if (!el || !container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      el.textContent = metric.value.toFixed(metric.decimals);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const counter = { val: 0 };
            gsap.to(counter, {
              val: metric.value,
              duration: 1.4,
              ease: 'power3.out',
              onUpdate: () => {
                if (el) {
                  el.textContent = counter.val.toFixed(metric.decimals);
                }
              },
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [metric.value, metric.decimals]);

  return (
    <div
      ref={cardRef}
      className="bg-[#F8F5ED] border border-[#174B38]/15 rounded-xl p-6 flex flex-col justify-between hover:border-[#80649B] transition-colors"
    >
      <div>
        <div className="flex items-center justify-between text-xs font-mono text-[#80649B] mb-3">
          <span>{metric.sublabel}</span>
          <GraduationCap className="w-4 h-4 text-[#174B38]/70" />
        </div>
        <div className="font-display text-4xl sm:text-5xl font-bold text-[#174B38] tabular-nums tracking-tight mb-2">
          <span ref={numberRef}>{metric.value.toFixed(metric.decimals)}</span>
          <span className="text-2xl sm:text-3xl font-normal text-[#263B31]/80">
            {metric.suffix}
          </span>
        </div>
        <h4 className="text-base font-bold text-[#174B38]">{metric.label}</h4>
      </div>
      <p className="mt-4 pt-3 border-t border-[#174B38]/10 text-xs text-[#292D29]/75">
        {metric.detail}
      </p>
    </div>
  );
};

export const AchievementsSection: React.FC = () => {
  const { hackathon, academics } = ACHIEVEMENTS_DATA;

  return (
    <section
      id="achievements"
      className="py-20 sm:py-28 lg:py-32 bg-[#E9DCC3] text-[#174B38] border-b border-[#174B38]/15"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2"
          >
            04 · Milestones &amp; Academic Distinction
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#174B38] leading-[1.1] text-balance"
          >
            Hackathon Qualification &amp; Academic Performance
          </motion.h2>
        </motion.div>

        {/* Smart India Hackathon Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F8F5ED] border border-[#174B38]/20 rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 shadow-[0_16px_40px_rgba(23,75,56,0.06)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Custom SIH Visual Identity */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl bg-[#174B38] text-[#F8F5ED] relative overflow-hidden">
              <svg
                aria-hidden="true"
                className="w-24 h-24 mb-4 text-[#E9DCC3]"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  stroke="currentColor"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="#80649B"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <path
                  d="M60 28L76 52H44L60 28Z"
                  stroke="#E9DCC3"
                  strokeWidth="2"
                  fill="#263B31"
                />
                <circle cx="60" cy="72" r="10" stroke="#E9DCC3" strokeWidth="2" />
              </svg>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#E9DCC3]/85 mb-1">
                SIH · Team Milestone
              </span>
              <p className="font-display text-2xl font-bold text-center text-[#FFFFFF]">
                Smart India Hackathon
              </p>
              <span className="mt-2 font-mono text-xs text-[#E9DCC3] border-t border-[#E9DCC3]/20 pt-2">
                Qualified Participant
              </span>
            </div>

            {/* Right: Accurate Description & Highlights */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#80649B] mb-2">
                  <Award className="w-4 h-4" />
                  <span>{hackathon.badge}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#174B38] mb-3">
                  {hackathon.title}
                </h3>
                <p className="text-base sm:text-lg text-[#292D29]/90 leading-relaxed">
                  {hackathon.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#174B38]/12">
                {hackathon.highlights.map((item, idx) => (
                  <div key={item.label} className="space-y-1">
                    <span className="font-mono text-xs text-[#80649B] font-semibold">
                      0{idx + 1} · {item.label}
                    </span>
                    <p className="text-xs text-[#292D29]/80 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Performance Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#174B38]">
              Academic Performance Record
            </h3>
            <p className="font-mono text-xs text-[#263B31]/80">
              Verified university &amp; pre-university scholastic milestones
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {academics.map((metric) => (
              <AnimatedAcademicCard key={metric.id} metric={metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
