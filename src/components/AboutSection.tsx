import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_CONTENT, PERSONAL_INFO } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-[#F8F5ED] text-[#292D29] border-b border-[#174B38]/12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Section Kicker, Portrait Aspect & Personal Highlight */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2">
                {ABOUT_CONTENT.sectionIndex} · {ABOUT_CONTENT.sectionTitle}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#174B38] leading-[1.12] text-balance">
                {ABOUT_CONTENT.headline}
              </h2>
            </div>

            {/* Secondary Editorial Portrait Composition */}
            <div className="bg-[#E9DCC3]/65 p-4 sm:p-5 rounded-xl border border-[#174B38]/15">
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-5">
                  <div className="aspect-[3/3.6] overflow-hidden rounded-lg bg-[#263B31] border border-[#174B38]/15">
                    <img
                      src={PERSONAL_INFO.portraitUrl}
                      alt="Chidella Venkata Prudvish portrait"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_15%]"
                    />
                  </div>
                </div>
                <div className="col-span-7 space-y-2.5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#80649B]">
                    Personal Ethos
                  </p>
                  <p className="font-display text-xl sm:text-2xl font-semibold italic text-[#174B38] leading-snug">
                    &ldquo;{ABOUT_CONTENT.personalHighlight}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Prose & Structured Identity Facts */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8 lg:pt-6">
            <div className="space-y-5 text-base sm:text-lg text-[#292D29]/90 leading-[1.75]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'text-lg sm:text-xl font-medium text-[#174B38] leading-[1.6]'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Clean Hairline Architectural Fact Sheet */}
            <div className="pt-6 border-t border-[#174B38]/15">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {ABOUT_CONTENT.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="pb-4 border-b border-[#174B38]/10 flex flex-col justify-between"
                  >
                    <dt className="font-mono text-xs uppercase tracking-wider text-[#263B31]/70 mb-1.5">
                      {fact.label}
                    </dt>
                    <dd className="text-sm sm:text-base font-semibold text-[#174B38]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
