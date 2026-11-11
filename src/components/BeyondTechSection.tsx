import React from 'react';
import { motion } from 'motion/react';
import { BEYOND_TECH_CONTENT } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const BeyondTechSection: React.FC = () => {
  return (
    <section
      id="beyond-technology"
      className="py-20 sm:py-28 bg-[#E9DCC3]/45 text-[#292D29] border-b border-[#174B38]/12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          {/* Left: Minimalist Court Geometry & Intro */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2">
                {BEYOND_TECH_CONTENT.sectionIndex} · {BEYOND_TECH_CONTENT.title}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#174B38] leading-[1.12] mb-3">
                {BEYOND_TECH_CONTENT.activity} — {BEYOND_TECH_CONTENT.headline}
              </h2>
              <p className="text-sm sm:text-base text-[#292D29]/85 leading-relaxed">
                {BEYOND_TECH_CONTENT.description}
              </p>
            </div>

            {/* Minimal Architectural Badminton Court & Shuttlecock Vector */}
            <div className="p-6 rounded-xl bg-[#174B38] text-[#E9DCC3] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E9DCC3]/80">
                  Extracurricular Pursuit
                </span>
                <span className="font-mono text-xs text-[#A6B7A0]">
                  Court Discipline
                </span>
              </div>
              <svg
                aria-hidden="true"
                className="w-full h-28 text-[#E9DCC3]/35"
                viewBox="0 0 400 120"
                fill="none"
              >
                {/* Court Boundary Lines */}
                <rect
                  x="16"
                  y="12"
                  width="368"
                  height="96"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line x1="200" y1="12" x2="200" y2="108" stroke="#80649B" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="140" y1="12" x2="140" y2="108" stroke="currentColor" strokeWidth="1" />
                <line x1="260" y1="12" x2="260" y2="108" stroke="currentColor" strokeWidth="1" />
                <line x1="16" y1="60" x2="140" y2="60" stroke="currentColor" strokeWidth="1" />
                <line x1="260" y1="60" x2="384" y2="60" stroke="currentColor" strokeWidth="1" />
                {/* Trajectory Arc */}
                <path
                  d="M70 82 Q 200 10 330 68"
                  stroke="#E9DCC3"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="330" cy="68" r="4.5" fill="#E9DCC3" />
              </svg>
            </div>
          </motion.div>

          {/* Right: 4 Core Values Grid */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {BEYOND_TECH_CONTENT.values.map((val, idx) => (
              <div
                key={val.title}
                className="bg-[#F8F5ED] border border-[#174B38]/15 rounded-xl p-6 flex flex-col justify-between hover:border-[#80649B] transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-[#80649B] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#174B38] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292D29]/80 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
