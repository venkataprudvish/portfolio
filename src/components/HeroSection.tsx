import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { HERO_CONTENT, PERSONAL_INFO } from '../data/portfolioData';
import { EASE_EDITORIAL, staggerContainer, lineReveal } from '../utils/animations';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const accentRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen bg-[#E9DCC3] text-[#174B38] pt-24 sm:pt-28 lg:pt-32 pb-14 lg:pb-20 overflow-hidden flex flex-col justify-between border-b border-[#174B38]/15"
    >
      {/* Subtle architectural background geometry */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto h-full px-5 sm:px-8 lg:px-12 relative">
          <div className="hidden lg:block absolute top-0 bottom-0 left-12 w-px bg-[#174B38]/[0.07]" />
          <div className="hidden lg:block absolute top-0 bottom-0 right-12 w-px bg-[#174B38]/[0.07]" />
        </div>
        <motion.svg
          style={{ rotate: accentRotate }}
          className="absolute -top-28 -right-28 w-[420px] h-[420px] text-[#174B38]/[0.06]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.75" />
          <circle
            cx="100"
            cy="100"
            r="68"
            stroke="#80649B"
            strokeOpacity="0.22"
            strokeWidth="0.75"
            strokeDasharray="4 4"
          />
          <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" />
        </motion.svg>
      </div>

      {/* Main Split-Screen Editorial Grid */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Expressive Typography & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6"
          >
            {/* Small introductory label */}
            <motion.div variants={lineReveal} className="mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-7 h-[1.5px] bg-[#80649B]" aria-hidden="true" />
              <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.16em] text-[#174B38]">
                {HERO_CONTENT.introLabel}
              </p>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-[#174B38] tracking-[-0.02em] leading-[0.94] text-[clamp(2.75rem,6.2vw,5.35rem)] mb-6">
              {HERO_CONTENT.headlineLines.map((line, idx) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    variants={lineReveal}
                    className={`block ${
                      idx === 2 ? 'text-[#174B38] italic font-semibold' : ''
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Supporting Headline */}
            <motion.p
              variants={lineReveal}
              className="font-display text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-[#263B31] leading-snug mb-5 max-w-2xl text-balance"
            >
              {HERO_CONTENT.supportingHeadline}
            </motion.p>

            {/* Introduction Paragraph */}
            <motion.p
              variants={lineReveal}
              className="text-base sm:text-[1.0625rem] text-[#292D29]/90 leading-[1.7] max-w-[62ch] mb-8 sm:mb-10"
            >
              {HERO_CONTENT.introduction}
            </motion.p>

            {/* Two Main CTAs */}
            <motion.div
              variants={lineReveal}
              className="flex flex-wrap items-center gap-4 mb-8 lg:mb-0"
            >
              <a
                href={HERO_CONTENT.primaryCta.href}
                onClick={(e) => scrollToSection(e, HERO_CONTENT.primaryCta.href)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-semibold text-[#F8F5ED] bg-[#174B38] hover:bg-[#263B31] rounded-md transition-all duration-150 shadow-[0_8px_24px_rgba(23,75,56,0.16)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80649B]"
              >
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowDownRight className="w-4 h-4 text-[#E9DCC3] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={HERO_CONTENT.secondaryCta.href}
                onClick={(e) => scrollToSection(e, HERO_CONTENT.secondaryCta.href)}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#174B38] bg-[#F8F5ED]/80 hover:bg-[#F8F5ED] border border-[#174B38]/25 hover:border-[#80649B] rounded-md transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80649B]"
              >
                <span>{HERO_CONTENT.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#80649B] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Portrait Composition */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.2, ease: EASE_EDITORIAL }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <motion.div
              style={{ y: portraitY }}
              className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
            >
              {/* Architectural Offset Frame */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 sm:-inset-3.5 border border-[#174B38]/25 rounded-2xl translate-x-2.5 translate-y-2.5 pointer-events-none"
              />
              {/* Subtle Purple Corner Hairline Accent */}
              <div
                aria-hidden="true"
                className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[#80649B] rounded-tr-xl pointer-events-none"
              />

              {/* Portrait Container */}
              <div className="relative bg-[#F8F5ED] p-2.5 sm:p-3.5 rounded-xl border border-[#174B38]/15 shadow-[0_20px_50px_rgba(23,75,56,0.14)]">
                <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-lg bg-[#263B31]">
                  <img
                    src={PERSONAL_INFO.portraitUrl}
                    alt="Chidella Venkata Prudvish wearing a navy-blue blazer and white shirt"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                  {/* Subtle bottom vignette for natural tonal integration */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#174B38]/30 to-transparent pointer-events-none"
                  />
                </div>

                {/* Editorial Monograph Caption Bar under Portrait */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between gap-4 text-xs text-[#292D29]/80">
                  <div className="truncate">
                    <span className="font-semibold text-[#174B38]">B.Tech CSE (AI &amp; ML)</span>
                    <span className="mx-1.5 text-[#80649B]" aria-hidden="true">
                      ·
                    </span>
                    <span>Jain University</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={PERSONAL_INFO.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chidella Venkata Prudvish on GitHub"
                      className="text-[#174B38]/80 hover:text-[#80649B] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chidella Venkata Prudvish on LinkedIn"
                      className="text-[#174B38]/80 hover:text-[#80649B] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Full-Width Bottom Identity & Scroll Strip */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-12 mt-12 lg:mt-16 pt-6 border-t border-[#174B38]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#263B31]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-[#174B38]">
              Computer Science &amp; Engineering Student
            </span>
            <span className="text-[#80649B]" aria-hidden="true">
              ·
            </span>
            <span>AI &amp; ML Enthusiast</span>
            <span className="text-[#80649B]" aria-hidden="true">
              ·
            </span>
            <span>Software Developer</span>
          </div>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#174B38] hover:text-[#80649B] transition-colors self-start sm:self-auto"
          >
            <span>Scroll to explore</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-[#80649B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
