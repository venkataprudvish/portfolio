import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 lg:py-32 bg-[#F8F5ED] text-[#292D29] border-b border-[#174B38]/12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Section Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <motion.p
              variants={fadeInUp}
              className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2"
            >
              05 · Academic Progression
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#174B38] leading-[1.1] text-balance mb-4"
            >
              Education Timeline
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-[#292D29]/80 leading-relaxed"
            >
              A disciplined academic journey centered on Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.
            </motion.p>
          </motion.div>

          {/* Right Column: Vertical Forest-Green Timeline */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10 border-l border-[#174B38]/30 space-y-12">
            {EDUCATION_TIMELINE.map((entry, idx) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Marker Node */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F8F5ED] border-2 border-[#174B38] group-hover:border-[#80649B] group-hover:scale-110 transition-all"
                />

                <div className="bg-[#FFFFFF] border border-[#174B38]/15 rounded-xl p-6 sm:p-8 shadow-[0_8px_24px_rgba(23,75,56,0.04)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#174B38]/10">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#80649B] font-semibold">
                      0{idx + 1} · {entry.stage}
                    </span>
                    {entry.institution && (
                      <span className="text-xs font-medium text-[#263B31]">
                        {entry.institution}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#174B38] mb-1">
                    {entry.program}
                  </h3>

                  {entry.specialization && (
                    <p className="font-display text-lg sm:text-xl italic text-[#263B31] mb-4">
                      {entry.specialization}
                    </p>
                  )}

                  <p className="text-sm sm:text-base text-[#292D29]/85 leading-relaxed mb-6">
                    {entry.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#174B38]/10">
                    {entry.metrics.map((m) => (
                      <div key={m.label} className="flex items-baseline gap-2.5">
                        <span className="font-mono text-xs text-[#292D29]/70">
                          {m.label}:
                        </span>
                        <span className="font-mono text-sm sm:text-base font-bold text-[#174B38] tabular-nums">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
