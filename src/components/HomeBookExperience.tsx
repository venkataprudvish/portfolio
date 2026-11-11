import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Layers,
} from 'lucide-react';
import {
  BOOK_CHAPTERS,
  HERO_CONTENT,
  PERSONAL_INFO,
  PortfolioPageId,
} from '../data/portfolioData';
import { EASE_EDITORIAL, lineReveal, staggerContainer } from '../utils/animations';

interface HomeBookExperienceProps {
  onNavigatePage: (pageId: PortfolioPageId) => void;
}

export const HomeBookExperience: React.FC<HomeBookExperienceProps> = ({
  onNavigatePage,
}) => {
  const balletRef = useRef<HTMLDivElement>(null);
  const tableSectionRef = useRef<HTMLDivElement>(null);

  const [activeBookPageIdx, setActiveBookPageIdx] = useState<number>(0);
  const [flipDirection, setFlipDirection] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: balletRef,
    offset: ['start start', 'end end'],
  });

  // Transform values for the 6 deconstructed book pieces converging into the center book on scroll
  // Piece 1: Hardcover Binding & Spine (Top-Left -> Center)
  const p1X = useTransform(scrollYProgress, [0.05, 0.72], [-270, 0]);
  const p1Y = useTransform(scrollYProgress, [0.05, 0.72], [-170, 10]);
  const p1R = useTransform(scrollYProgress, [0.05, 0.72], [-18, 0]);
  const p1Scale = useTransform(scrollYProgress, [0.05, 0.72, 0.9], [1, 0.9, 0.75]);

  // Piece 2: Portrait Frontispiece Folio (Top-Right -> Center)
  const p2X = useTransform(scrollYProgress, [0.08, 0.74], [270, 0]);
  const p2Y = useTransform(scrollYProgress, [0.08, 0.74], [-155, 4]);
  const p2R = useTransform(scrollYProgress, [0.08, 0.74], [16, 0]);

  // Piece 3: Technical Competencies Signature (Mid-Left -> Center)
  const p3X = useTransform(scrollYProgress, [0.12, 0.76], [-310, 0]);
  const p3Y = useTransform(scrollYProgress, [0.12, 0.76], [10, -2]);
  const p3R = useTransform(scrollYProgress, [0.12, 0.76], [-12, 0]);

  // Piece 4: Engineering Blueprints Signature (Mid-Right -> Center)
  const p4X = useTransform(scrollYProgress, [0.15, 0.78], [310, 0]);
  const p4Y = useTransform(scrollYProgress, [0.15, 0.78], [20, -6]);
  const p4R = useTransform(scrollYProgress, [0.15, 0.78], [14, 0]);

  // Piece 5: Hackathon & Scholastic Seal (Bottom-Left -> Center)
  const p5X = useTransform(scrollYProgress, [0.18, 0.8], [-240, 0]);
  const p5Y = useTransform(scrollYProgress, [0.18, 0.8], [175, -10]);
  const p5R = useTransform(scrollYProgress, [0.18, 0.8], [10, 0]);

  // Piece 6: Court Geometry & Colophon Leaf (Bottom-Right -> Center)
  const p6X = useTransform(scrollYProgress, [0.2, 0.82], [250, 0]);
  const p6Y = useTransform(scrollYProgress, [0.2, 0.82], [170, -14]);
  const p6R = useTransform(scrollYProgress, [0.2, 0.82], [-14, 0]);

  // Callout labels opacity (visible during the mid-scroll ballet, fade out as pieces lock into the book)
  const calloutOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.12, 0.55, 0.72],
    [0.25, 1, 1, 0]
  );

  // Deconstructed pieces opacity vs Assembled preview book opacity at the bottom of the ballet
  const piecesOpacity = useTransform(scrollYProgress, [0.0, 0.74, 0.88], [1, 1, 0]);
  const assembledScale = useTransform(scrollYProgress, [0.65, 0.92], [0.84, 1]);
  const assembledOpacity = useTransform(scrollYProgress, [0.64, 0.84], [0, 1]);
  const tableY = useTransform(scrollYProgress, [0.58, 0.88], [80, 0]);

  const scrollToBookTable = () => {
    tableSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToBallet = () => {
    balletRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFlipPage = (nextIdx: number) => {
    setFlipDirection(nextIdx > activeBookPageIdx ? 1 : -1);
    setActiveBookPageIdx(nextIdx);
  };

  const activeChapter = BOOK_CHAPTERS[activeBookPageIdx];

  return (
    <div className="bg-[#F8F5ED] text-[#292D29]">
      {/* =====================================================================
          ACT I: EDITORIAL HERO STAGE (Deep Forest Green #174B38 — ROSSO Style)
      ====================================================================== */}
      <section className="relative min-h-[94vh] bg-[#174B38] text-[#F8F5ED] pt-24 sm:pt-28 lg:pt-32 pb-16 overflow-hidden flex flex-col justify-between border-b border-[#E9DCC3]/15">
        {/* Left Vertical Editorial Rail (matching 01 | EDITION 01 from reference video) */}
        <div
          aria-hidden="true"
          className="hidden xl:flex fixed-rail absolute left-6 top-28 bottom-12 w-10 flex-col items-center justify-between border-r border-[#E9DCC3]/15 py-6 z-20"
        >
          <span className="font-mono text-xs text-[#E9DCC3]/80 tracking-widest">
            01
          </span>
          <div className="h-24 w-px bg-[#E9DCC3]/25" />
          <span
            className="font-mono text-[11px] tracking-[0.28em] uppercase text-[#E9DCC3]/75"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            EDITION 01 · MONOGRAPH
          </span>
          <div className="h-24 w-px bg-[#E9DCC3]/25" />
          <span className="font-mono text-xs text-[#80649B]">CVP</span>
        </div>

        {/* Subtle Architectural Background Rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <svg
            className="absolute -right-24 -top-24 w-[520px] h-[520px] text-[#E9DCC3]/[0.06]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.6" />
            <circle
              cx="100"
              cy="100"
              r="68"
              stroke="#80649B"
              strokeOpacity="0.35"
              strokeWidth="0.75"
              strokeDasharray="3 4"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-14 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Expressive Editorial Typography */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 space-y-6"
            >
              <motion.div variants={lineReveal} className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#E9DCC3]" aria-hidden="true" />
                <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#E9DCC3]">
                  {HERO_CONTENT.introLabel}
                </p>
              </motion.div>

              <h1 className="font-display font-bold text-[#F8F5ED] tracking-[-0.02em] leading-[0.92] text-[clamp(2.85rem,6.3vw,5.5rem)]">
                {HERO_CONTENT.headlineLines.map((line, idx) => (
                  <span key={line} className="block overflow-hidden">
                    <motion.span
                      variants={lineReveal}
                      className={`block ${
                        idx === 2 ? 'text-[#E9DCC3] italic font-semibold' : ''
                      }`}
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                variants={lineReveal}
                className="font-display text-xl sm:text-2xl lg:text-[1.7rem] text-[#E9DCC3] leading-snug max-w-2xl text-balance"
              >
                {HERO_CONTENT.supportingHeadline}
              </motion.p>

              <motion.p
                variants={lineReveal}
                className="text-sm sm:text-base text-[#F8F5ED]/85 leading-[1.75] max-w-[60ch]"
              >
                {HERO_CONTENT.introduction}
              </motion.p>

              {/* Hero CTAs */}
              <motion.div
                variants={lineReveal}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <button
                  type="button"
                  onClick={scrollToBookTable}
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#E9DCC3] text-[#174B38] hover:bg-[#FFFFFF] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 shadow-[0_10px_30px_rgba(0,0,0,0.22)] cursor-pointer whitespace-nowrap shrink-0"
                >
                  <BookOpen className="w-4 h-4 text-[#174B38]" />
                  <span>Open The Book on Table</span>
                  <ArrowDown className="w-4 h-4 text-[#80649B] group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={scrollToBallet}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#263B31] text-[#F8F5ED] hover:bg-[#263B31]/80 border border-[#E9DCC3]/30 hover:border-[#80649B] text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Watch Book Assembly</span>
                  <ArrowDown className="w-4 h-4 text-[#E9DCC3]" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Authentic Portrait Frontispiece & Floating Book Spine */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE_EDITORIAL }}
              className="lg:col-span-5 relative flex flex-col items-center"
            >
              <div className="relative w-full max-w-[410px]">
                {/* Back Hardcover Book Board Shadow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 bg-[#263B31] border border-[#E9DCC3]/25 rounded-r-2xl rounded-l-md rotate-2 shadow-2xl"
                />
                {/* Gold / Sand Page Edges Effect */}
                <div
                  aria-hidden="true"
                  className="absolute -right-2 top-3 bottom-3 w-3 bg-gradient-to-r from-[#E9DCC3] to-[#F8F5ED] rounded-r-sm opacity-90"
                />

                {/* Frontispiece Portrait Plate */}
                <div className="relative bg-[#F8F5ED] text-[#174B38] p-3.5 sm:p-4 rounded-r-xl rounded-l-sm border-l-8 border-l-[#263B31] border border-[#E9DCC3]/40 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#174B38]/75 pb-2.5 mb-2.5 border-b border-[#174B38]/12">
                    <span>FRONTISPIECE · EDITION I</span>
                    <span className="text-[#80649B] font-semibold">VOL. I — VII</span>
                  </div>

                  <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-md bg-[#263B31]">
                    <img
                      src={PERSONAL_INFO.portraitUrl}
                      alt="Chidella Venkata Prudvish wearing a navy-blue blazer and white shirt"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_18%]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#174B38]/40 to-transparent pointer-events-none"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <p className="font-display text-base font-bold text-[#174B38]">
                        Chidella Venkata Prudvish
                      </p>
                      <p className="text-[11px] text-[#263B31]/80">
                        B.Tech CSE (AI &amp; ML) · Jain University
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <a
                        href={PERSONAL_INFO.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="text-[#174B38] hover:text-[#80649B] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={PERSONAL_INFO.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="text-[#174B38] hover:text-[#80649B] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bookmark Ribbon Extending Downward into the Next Section (like the video at 0:01) */}
                <div
                  aria-hidden="true"
                  className="hidden sm:flex flex-col items-center absolute left-1/2 -translate-x-1/2 -bottom-24 z-20"
                >
                  <div className="w-3.5 h-24 bg-gradient-to-b from-[#80649B] to-[#E9DCC3] shadow-md rounded-b-sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Transition Bar */}
        <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 lg:px-14 pt-8 border-t border-[#E9DCC3]/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#E9DCC3]/85">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Computer Science &amp; Engineering Student</span>
            <span className="text-[#80649B]" aria-hidden="true">
              ·
            </span>
            <span>AI &amp; ML Enthusiast</span>
            <span className="text-[#80649B]" aria-hidden="true">
              ·
            </span>
            <span>Software Developer</span>
          </div>
          <span className="font-mono uppercase tracking-widest text-[11px] text-[#E9DCC3]">
            Scroll to assemble the monograph ↓
          </span>
        </div>
      </section>

      {/* =====================================================================
          ACT II: THE MONOGRAPH BALLET — BOOK COMING TOGETHER FROM PIECES
          (Scroll-Choreographed Assembly matching 0:02–0:05 of the video)
      ====================================================================== */}
      <div ref={balletRef} className="relative h-[250vh] bg-[#E9DCC3]">
        <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] w-full overflow-hidden flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-8">
          {/* Top Center Kicker & Dynamic Headline */}
          <div className="text-center max-w-2xl mx-auto z-20">
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#80649B] mb-1.5">
              THE MONOGRAPH BALLET · CHAPTER ARCHITECTURE
            </p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#174B38] leading-tight">
              Every chapter, coming together from pieces.
            </h2>
          </div>

          {/* Center Choreographed Assembly Stage */}
          <div className="relative flex-1 w-full max-w-[1200px] mx-auto flex items-center justify-center">
            {/* Flowing Central Binding Ribbon / S-Curve Spine (like the swirling ribbon in 0:03-0:04) */}
            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 560"
              fill="none"
            >
              <path
                d="M 500 20 C 310 130, 690 250, 500 370 C 370 445, 580 500, 500 540"
                stroke="#174B38"
                strokeOpacity="0.14"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <path
                d="M 500 20 C 340 140, 660 260, 500 380"
                stroke="#80649B"
                strokeOpacity="0.25"
                strokeWidth="1.5"
              />
            </svg>

            {/* DECONSTRUCTED BOOK PIECES LAYER */}
            <motion.div
              style={{ opacity: piecesOpacity }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Piece 1: Forest Green Hardcover Binding & Spine */}
              <motion.div
                style={{ x: p1X, y: p1Y, rotate: p1R, scale: p1Scale }}
                className="absolute z-10 flex items-center gap-4"
              >
                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-right max-w-[190px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    01. Hardcover Spine
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    Forest-green cloth binding &amp; folio structure
                  </p>
                  <div className="mt-1 ml-auto w-14 h-px bg-[#174B38]/40" />
                </motion.div>

                <button
                  type="button"
                  onClick={() => onNavigatePage('about')}
                  className="w-40 sm:w-48 p-3.5 rounded-lg bg-[#174B38] text-[#F8F5ED] border border-[#E9DCC3]/40 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#E9DCC3]/80 block">
                    PIECE I · BINDING
                  </span>
                  <p className="font-display text-base sm:text-lg font-bold text-[#FFFFFF] mt-0.5">
                    The Monograph Cover
                  </p>
                  <p className="text-[11px] text-[#E9DCC3]/80 mt-1">
                    Chidella Venkata Prudvish
                  </p>
                </button>
              </motion.div>

              {/* Piece 2: Frontispiece & About Me Folio */}
              <motion.div
                style={{ x: p2X, y: p2Y, rotate: p2R }}
                className="absolute z-20 flex items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => onNavigatePage('about')}
                  className="w-40 sm:w-48 p-3 rounded-lg bg-[#F8F5ED] text-[#174B38] border border-[#174B38]/25 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer flex items-center gap-3"
                >
                  <img
                    src={PERSONAL_INFO.portraitUrl}
                    alt="Prudvish portrait miniature"
                    className="w-11 h-13 rounded object-cover object-top shrink-0 border border-[#174B38]/20"
                  />
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] text-[#80649B] block">
                      PAGE 01 · ABOUT
                    </span>
                    <p className="font-display text-sm sm:text-base font-bold text-[#174B38] truncate">
                      About Me Folio
                    </p>
                    <p className="text-[10px] text-[#263B31]/80 truncate">
                      Identity &amp; Ethos
                    </p>
                  </div>
                </button>

                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-left max-w-[190px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    02. Frontispiece Plate
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    Directs to About Me page
                  </p>
                  <div className="mt-1 w-14 h-px bg-[#174B38]/40" />
                </motion.div>
              </motion.div>

              {/* Piece 3: Technical Competencies Signature */}
              <motion.div
                style={{ x: p3X, y: p3Y, rotate: p3R }}
                className="absolute z-20 flex items-center gap-4"
              >
                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-right max-w-[190px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    03. Technical Signatures
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    Python · C · SQL · Django · Ollama
                  </p>
                  <div className="mt-1 ml-auto w-14 h-px bg-[#80649B]/60" />
                </motion.div>

                <button
                  type="button"
                  onClick={() => onNavigatePage('skills')}
                  className="w-44 sm:w-52 p-3.5 rounded-lg bg-[#F8F5ED] text-[#174B38] border border-[#174B38]/25 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#80649B] block">
                    PAGE 02 · COMPETENCIES
                  </span>
                  <p className="font-display text-base font-bold text-[#174B38] mt-0.5">
                    Technical Competencies
                  </p>
                  <p className="font-mono text-[10px] text-[#263B31]/80 mt-1">
                    6 Categories · DSA · Local AI
                  </p>
                </button>
              </motion.div>

              {/* Piece 4: Featured Engineering Work Blueprint */}
              <motion.div
                style={{ x: p4X, y: p4Y, rotate: p4R }}
                className="absolute z-30 flex items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => onNavigatePage('projects')}
                  className="w-44 sm:w-52 p-3.5 rounded-lg bg-[#263B31] text-[#F8F5ED] border border-[#E9DCC3]/35 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#E9DCC3] block">
                    PAGE 03 · SYSTEMS
                  </span>
                  <p className="font-display text-base font-bold text-[#FFFFFF] mt-0.5">
                    Featured Engineering Work
                  </p>
                  <p className="font-mono text-[10px] text-[#A6B7A0] mt-1">
                    JARVIS v4.5 · Django HMS
                  </p>
                </button>

                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-left max-w-[195px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    04. Blueprint Plates
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    JARVIS AI &amp; Hospital Management System
                  </p>
                  <div className="mt-1 w-14 h-px bg-[#80649B]/60" />
                </motion.div>
              </motion.div>

              {/* Piece 5: Milestones, Achievements & Education Parchment */}
              <motion.div
                style={{ x: p5X, y: p5Y, rotate: p5R }}
                className="absolute z-20 flex items-center gap-4"
              >
                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-right max-w-[190px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    05. Honours &amp; Chronicle
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    SIH Qualification &amp; 9.13 SGPA
                  </p>
                  <div className="mt-1 ml-auto w-14 h-px bg-[#174B38]/40" />
                </motion.div>

                <button
                  type="button"
                  onClick={() => onNavigatePage('achievements')}
                  className="w-40 sm:w-48 p-3.5 rounded-lg bg-[#F8F5ED] text-[#174B38] border border-[#174B38]/25 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#80649B] block">
                    PAGES 04 &amp; 05
                  </span>
                  <p className="font-display text-base font-bold text-[#174B38] mt-0.5">
                    Achievements &amp; Education
                  </p>
                  <p className="font-mono text-[10px] text-[#263B31]/80 mt-1">
                    SIH Qualified · 9.13 / 9.05 SGPA
                  </p>
                </button>
              </motion.div>

              {/* Piece 6: Beyond Tech & Contact Leaf */}
              <motion.div
                style={{ x: p6X, y: p6Y, rotate: p6R }}
                className="absolute z-20 flex items-center gap-4"
              >
                <button
                  type="button"
                  onClick={() => onNavigatePage('contact')}
                  className="w-40 sm:w-48 p-3.5 rounded-lg bg-[#F8F5ED] text-[#174B38] border border-[#174B38]/25 shadow-xl text-left hover:border-[#80649B] transition-colors cursor-pointer"
                >
                  <span className="font-mono text-[10px] text-[#80649B] block">
                    PAGES 06 &amp; 07
                  </span>
                  <p className="font-display text-base font-bold text-[#174B38] mt-0.5">
                    Beyond Tech &amp; Contact
                  </p>
                  <p className="font-mono text-[10px] text-[#263B31]/80 mt-1">
                    Badminton · Direct Dispatch
                  </p>
                </button>

                <motion.div
                  style={{ opacity: calloutOpacity }}
                  className="hidden md:block text-left max-w-[190px]"
                >
                  <p className="font-display italic text-lg font-semibold text-[#174B38]">
                    06. Epilogue &amp; Colophon
                  </p>
                  <p className="text-[11px] text-[#263B31]/80">
                    Court discipline &amp; correspondence
                  </p>
                  <div className="mt-1 w-14 h-px bg-[#174B38]/40" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* ASSEMBLED CLOSED/OPENING BOOK ON THE TABLE PREVIEW (Appears as pieces lock together) */}
            <motion.div
              style={{
                opacity: assembledOpacity,
                scale: assembledScale,
                y: tableY,
              }}
              className="absolute z-30 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="w-[300px] sm:w-[440px] p-6 rounded-xl bg-[#174B38] text-[#F8F5ED] border-2 border-[#E9DCC3] shadow-[0_30px_60px_rgba(23,75,56,0.38)] text-center">
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#E9DCC3]/80 mb-1">
                  MONOGRAPH ASSEMBLED ON TABLE
                </p>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                  CHIDELLA VENKATA PRUDVISH
                </p>
                <p className="font-display italic text-sm sm:text-base text-[#E9DCC3] mt-1">
                  7 Chapters Ready to Explore Below ↓
                </p>
              </div>
              {/* Sculpted Table Plinth Under Book */}
              <div className="w-[340px] sm:w-[540px] h-5 bg-gradient-to-r from-[#263B31] via-[#174B38] to-[#263B31] rounded-b-2xl shadow-2xl border-t border-[#E9DCC3]/40" />
            </motion.div>
          </div>

          {/* Bottom Scroll Progress Hint */}
          <div className="text-center z-20">
            <button
              type="button"
              onClick={scrollToBookTable}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#174B38] hover:text-[#80649B] transition-colors cursor-pointer"
            >
              <span>Continue to the Open Book on the Table</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#80649B]" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          ACT III: THE ASSEMBLED BOOK ON THE TABLE — INTERACTIVE PAGES
          (Inspired by 0:05–0:07 "YOUR TABLE IS WAITING", where each page of the
           open book on the table directs to its separate dedicated page)
      ====================================================================== */}
      <section
        ref={tableSectionRef}
        id="book-table"
        className="relative py-20 sm:py-28 lg:py-32 bg-[#F8F5ED] border-t border-[#174B38]/15 overflow-hidden"
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Centerpiece Title (Matching "THE MASTERPIECE / YOUR TABLE IS WAITING.") */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="font-mono text-xs tracking-[0.22em] uppercase text-[#80649B] mb-2">
              THE ASSEMBLED MONOGRAPH · INTERACTIVE FOLIO
            </p>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#174B38] tracking-tight leading-[1.05] mb-4">
              YOUR BOOK IS ON THE TABLE.
            </h2>
            <p className="text-sm sm:text-base text-[#292D29]/80 leading-relaxed">
              Turn the pages of the assembled monograph below to preview each chapter, or click any page to open its dedicated standalone view.
            </p>
          </div>

          {/* THE ARCHITECTURAL TABLE & OPEN HARDCOVER BOOK SPREAD */}
          <div className="relative mx-auto max-w-[1140px]">
            {/* Sculpted Study Table Surface Backdrop */}
            <div className="relative rounded-3xl bg-gradient-to-b from-[#E9DCC3] via-[#DECBB0] to-[#C9B393] p-4 sm:p-8 lg:p-12 border border-[#174B38]/25 shadow-[0_32px_80px_rgba(23,75,56,0.18)]">
              {/* Subtle Architectural Table Inlay Line */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 sm:inset-5 rounded-2xl border border-[#174B38]/12"
              />

              {/* Outer Forest-Green Hardcover Book Casing */}
              <div className="relative rounded-2xl bg-[#174B38] p-2.5 sm:p-4 shadow-[0_24px_50px_rgba(23,75,56,0.35)] border border-[#263B31]">
                {/* Stacked Paper Page Edges Effect */}
                <div className="relative rounded-xl bg-[#E9DCC3] p-1 sm:p-1.5">
                  {/* Open Two-Page Book Spread */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#F8F5ED] rounded-lg overflow-hidden border border-[#174B38]/20 shadow-inner min-h-[540px]">
                    {/* LEFT PAGE: Engraved Table of Contents & Chapter Selector */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 bg-[#F8F5ED] border-b lg:border-b-0 lg:border-r border-[#174B38]/15 flex flex-col justify-between relative">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#80649B] pb-3 mb-5 border-b border-[#174B38]/12">
                          <span>FOLIO INDEX</span>
                          <span>7 CHAPTERS</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#174B38] mb-1">
                          Table of Contents
                        </h3>
                        <p className="text-xs text-[#263B31]/80 mb-6">
                          Select a page to inspect on the right, or click twice to enter immediately.
                        </p>

                        {/* Interactive Chapter Pages List */}
                        <div
                          role="tablist"
                          aria-label="Monograph book pages"
                          className="space-y-1.5"
                        >
                          {BOOK_CHAPTERS.map((chap, idx) => {
                            const isCurrent = idx === activeBookPageIdx;
                            return (
                              <div
                                key={chap.id}
                                className={`group flex items-center justify-between rounded-lg transition-all ${
                                  isCurrent
                                    ? 'bg-[#174B38] text-[#F8F5ED] shadow-sm'
                                    : 'hover:bg-[#E9DCC3]/60 text-[#292D29]'
                                }`}
                              >
                                <button
                                  type="button"
                                  role="tab"
                                  aria-selected={isCurrent}
                                  onClick={() => handleFlipPage(idx)}
                                  className="flex-1 text-left px-3.5 py-2.5 flex items-center gap-3 cursor-pointer min-w-0"
                                >
                                  <span
                                    className={`font-mono text-xs tabular-nums ${
                                      isCurrent ? 'text-[#E9DCC3]' : 'text-[#80649B]'
                                    }`}
                                  >
                                    p.{chap.pageNumber}
                                  </span>
                                  <span className="font-display text-base sm:text-lg font-bold truncate">
                                    {chap.title}
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => onNavigatePage(chap.id)}
                                  title={`Open ${chap.title} separate page`}
                                  className={`mr-2 px-2.5 py-1 rounded text-[11px] font-mono inline-flex items-center gap-1 transition-colors cursor-pointer shrink-0 ${
                                    isCurrent
                                      ? 'bg-[#263B31] text-[#E9DCC3] hover:bg-[#80649B] hover:text-[#FFFFFF]'
                                      : 'text-[#174B38]/75 hover:bg-[#174B38] hover:text-[#F8F5ED]'
                                  }`}
                                >
                                  <span>Open</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[#174B38]/12 flex items-center justify-between text-[11px] font-mono text-[#263B31]/75">
                        <span>CHIDELLA VENKATA PRUDVISH</span>
                        <span>EX LIBRIS</span>
                      </div>
                    </div>

                    {/* RIGHT PAGE: Turnable Chapter Leaf with Direct Page Navigation */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#FFFFFF] via-[#F8F5ED] to-[#F3EDE0] flex flex-col justify-between relative overflow-hidden">
                      {/* Center Spine Crease Shadow on Desktop */}
                      <div
                        aria-hidden="true"
                        className="hidden lg:block absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#174B38]/[0.07] to-transparent pointer-events-none"
                      />

                      {/* Top Page Folio Header */}
                      <div className="flex items-center justify-between text-xs font-mono text-[#263B31]/80 pb-3 mb-6 border-b border-[#174B38]/12">
                        <span className="text-[#80649B] font-semibold">
                          {activeChapter.kicker}
                        </span>
                        <span className="tabular-nums">
                          PAGE {activeChapter.pageNumber} OF 07
                        </span>
                      </div>

                      {/* Animated Turning Page Body */}
                      <div className="my-auto py-2">
                        <AnimatePresence mode="wait" custom={flipDirection}>
                          <motion.div
                            key={activeChapter.id}
                            custom={flipDirection}
                            initial={{
                              opacity: 0,
                              rotateY: flipDirection > 0 ? 14 : -14,
                              x: flipDirection > 0 ? 24 : -24,
                            }}
                            animate={{ opacity: 1, rotateY: 0, x: 0 }}
                            exit={{
                              opacity: 0,
                              rotateY: flipDirection > 0 ? -14 : 14,
                              x: flipDirection > 0 ? -24 : 24,
                            }}
                            transition={{ duration: 0.32, ease: EASE_EDITORIAL }}
                            className="space-y-6"
                          >
                            <div className="flex items-baseline justify-between gap-4">
                              <div>
                                <span className="font-mono text-xs uppercase tracking-widest text-[#80649B] block mb-1">
                                  Chapter {activeChapter.roman} · {activeChapter.pieceName}
                                </span>
                                <h4 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#174B38] leading-tight">
                                  {activeChapter.title}
                                </h4>
                              </div>
                              <span className="font-display text-4xl sm:text-5xl italic text-[#174B38]/20 select-none shrink-0">
                                {activeChapter.roman}
                              </span>
                            </div>

                            <p className="text-sm sm:text-base text-[#292D29]/90 leading-[1.75]">
                              {activeChapter.excerpt}
                            </p>

                            {/* Highlights inside this Chapter */}
                            <div className="p-4 sm:p-5 rounded-xl bg-[#E9DCC3]/45 border border-[#174B38]/15 space-y-2.5">
                              <p className="font-mono text-[11px] uppercase tracking-wider text-[#174B38] font-semibold">
                                Inside This Page
                              </p>
                              <ul className="space-y-2 text-xs sm:text-sm text-[#292D29]">
                                {activeChapter.highlights.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2.5">
                                    <span className="font-mono text-xs text-[#80649B] font-semibold tabular-nums">
                                      0{i + 1}.
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Primary Action: Direct to Separate Page */}
                            <div className="pt-2 flex flex-wrap items-center gap-4">
                              <button
                                type="button"
                                onClick={() => onNavigatePage(activeChapter.id)}
                                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-[#174B38] hover:bg-[#263B31] text-[#F8F5ED] text-xs sm:text-sm font-semibold transition-all shadow-[0_10px_24px_rgba(23,75,56,0.18)] cursor-pointer whitespace-nowrap shrink-0"
                              >
                                <span>{activeChapter.ctaLabel}</span>
                                <ArrowUpRight className="w-4 h-4 text-[#E9DCC3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </button>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Bottom Page Turn Controls */}
                      <div className="pt-6 mt-6 border-t border-[#174B38]/12 flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            handleFlipPage(
                              (activeBookPageIdx - 1 + BOOK_CHAPTERS.length) %
                                BOOK_CHAPTERS.length
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#E9DCC3]/60 hover:bg-[#E9DCC3] text-[#174B38] text-xs font-mono font-semibold transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>Previous Page</span>
                        </button>

                        <span className="font-mono text-[11px] text-[#263B31]/75 hidden sm:inline">
                          {activeChapter.pieceSubtitle}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            handleFlipPage(
                              (activeBookPageIdx + 1) % BOOK_CHAPTERS.length
                            )
                          }
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#E9DCC3]/60 hover:bg-[#E9DCC3] text-[#174B38] text-xs font-mono font-semibold transition-colors cursor-pointer"
                        >
                          <span>Turn Next Page</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Silk Bookmark Ribbon Draping Off the Table Edge */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute -bottom-5 left-5/12 w-5 h-10 bg-[#80649B] shadow-md rounded-b-sm"
              />
            </div>
          </div>

          {/* Direct Chapter Cards Grid Below the Table for One-Click Access to Any Separate Page */}
          <div className="mt-16 pt-12 border-t border-[#174B38]/15">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#80649B] mb-1">
                  DIRECT CHAPTER INDEX
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#174B38]">
                  Jump Directly to Any Separate Page
                </h3>
              </div>
              <p className="text-xs font-mono text-[#263B31]/80">
                Click any folio card to open its dedicated view
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BOOK_CHAPTERS.map((chap) => (
                <button
                  key={chap.id}
                  type="button"
                  onClick={() => onNavigatePage(chap.id)}
                  className="group text-left p-5 rounded-xl bg-[#FFFFFF] hover:bg-[#174B38] text-[#292D29] hover:text-[#F8F5ED] border border-[#174B38]/15 hover:border-[#174B38] transition-all duration-200 flex flex-col justify-between shadow-sm cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-[#80649B] group-hover:text-[#E9DCC3]">
                        PAGE {chap.pageNumber} · {chap.roman}
                      </span>
                      <Layers className="w-3.5 h-3.5 text-[#174B38]/50 group-hover:text-[#E9DCC3]" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-[#174B38] group-hover:text-[#FFFFFF] mb-1.5">
                      {chap.title}
                    </h4>
                    <p className="text-xs text-[#292D29]/75 group-hover:text-[#E9DCC3]/85 line-clamp-2 leading-relaxed">
                      {chap.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#174B38]/10 group-hover:border-[#E9DCC3]/20 flex items-center justify-between text-xs font-mono font-semibold text-[#174B38] group-hover:text-[#E9DCC3]">
                    <span>Enter Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
