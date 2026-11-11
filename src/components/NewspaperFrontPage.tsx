import React from 'react';
import {
  StarburstMark,
  BiohazardGlyph,
} from './NewspaperGraphics';
import { PERSONAL_INFO, PortfolioPageId } from '../data/portfolioData';
import { Download, FileText, ArrowRight } from 'lucide-react';

interface NewspaperFrontPageProps {
  onNavigatePage: (pageId: PortfolioPageId) => void;
}

export const NewspaperFrontPage: React.FC<NewspaperFrontPageProps> = ({
  onNavigatePage,
}) => {
  return (
    <div className="relative min-h-screen bg-newsprint text-[#111111] p-2 sm:p-4 lg:p-6 flex flex-col justify-between selection:bg-[#B52A1C] selection:text-[#F8F5ED]">
      {/* Outer Aged Border Frame (vintage newsprint rounded border from reference image) */}
      <div className="relative border-4 border-[#111111] bg-[#D6C4A5] newsprint-aging p-3 sm:p-5 lg:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex flex-col justify-between rounded-2xl">
        
        {/* =========================================================================
            HEADER / MASTHEAD SECTION (With starburst decoration and PORTFOLIO title)
        ========================================================================== */}
        <header className="border-b-4 border-[#111111] pb-3 mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Masthead Left/Center: Huge Starburst Logo + Ornate Old English Blackletter "Portfolio" title */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 flex items-center justify-center">
                <StarburstMark className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-[#B52A1C] drop-shadow-sm" />
              </div>
              <div className="text-center sm:text-left flex-1 min-w-0">
                <div className="relative inline-block">
                  <h1
                    className="font-blackletter text-6xl sm:text-7xl lg:text-[7.75rem] tracking-normal leading-[0.92] text-[#111111] select-none"
                    style={{
                      textShadow: '1.5px 1.5px 0px rgba(181, 42, 28, 0.18)',
                    }}
                  >
                    Portfolio
                  </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-0.5 mt-1 font-headline font-bold text-xs sm:text-sm tracking-[0.22em] text-[#B52A1C] uppercase">
                  <span>CHIDELLA VENKATA PRUDVISH</span>
                  <span className="text-[#111111]">·</span>
                  <span className="text-[#111111]">THE DEVELOPER CHRONICLE</span>
                </div>
              </div>
            </div>

            {/* Masthead Right: Clean Black & White RESUME Feature Card with Download Action */}
            <div className="lg:col-span-4 border-2 border-[#111111] bg-[#FFFFFF] text-[#000000] p-3 flex flex-col justify-between shadow-sm">
              <div className="flex items-center justify-between border-b-2 border-[#111111] pb-1.5 mb-2">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#111111]" />
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#111111]">
                    OFFICIAL CURRICULUM VITAE
                  </span>
                </div>
                <span className="font-mono text-[10px] bg-[#111111] text-[#FFFFFF] px-1.5 py-0.5 font-bold">
                  B&amp;W EDITION
                </span>
              </div>

              <div className="space-y-1 mb-3 font-sans">
                <p className="font-bold text-xs sm:text-sm uppercase tracking-tight text-[#000000]">
                  CHIDELLA VENKATA PRUDVISH
                </p>
                <p className="text-[11px] text-[#333333] leading-snug">
                  B.Tech CSE (AI &amp; ML) · Jain University · SGPA: 9.13 &amp; 9.05 · Python &amp; Local AI
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#E5E5E5]">
                <button
                  type="button"
                  onClick={() => onNavigatePage('resume')}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#000000] hover:bg-[#333333] text-[#FFFFFF] text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigatePage('resume')}
                  className="px-2 py-1.5 border border-[#000000] hover:bg-[#F0F0F0] text-[#000000] text-xs font-mono font-bold rounded-xs transition-colors cursor-pointer"
                  title="View full resume"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* =========================================================================
            MAIN 3-COLUMN NEWSPAPER BODY (Left Editorial | Center Photo | Right Panels)
        ========================================================================== */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch flex-1">
          
          {/* -----------------------------------------------------------------------
              LEFT EDITORIAL COLUMN (Narrow, Dramatic headlines, biohazard, hex dump)
          ------------------------------------------------------------------------ */}
          <aside className="lg:col-span-3 border-2 border-[#111111] p-3 sm:p-4 bg-[#D6C4A5] flex flex-col justify-between">
            <div>
              {/* Dramatic Headline Stack */}
              <div className="border-b-2 border-[#111111] pb-3 mb-3">
                <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[2.65rem] leading-[0.92] tracking-tighter text-[#111111] uppercase">
                  BUILD.
                  <br />
                  CREATE.
                  <br />
                  <span className="text-[#B52A1C]">INNOVATE.</span>
                </h2>
              </div>

              {/* Manifesto Introduction */}
              <div className="space-y-3 font-typewriter text-xs leading-relaxed text-[#111111] border-b-2 border-[#111111] pb-3 mb-3">
                <p className="font-bold">
                  &ldquo;A journey through artificial intelligence, software development, and continuous learning.&rdquo;
                </p>
                <div className="flex items-start gap-2.5 pt-1">
                  <BiohazardGlyph className="w-7 h-7 shrink-0 text-[#B52A1C]" />
                  <p className="text-[11px] leading-tight text-[#222222]">
                    WE BUILT THE CODE
                    <br />
                    THAT RUNS THE MODEL.
                    <br />
                    WE WRITE OUR LOGIC,
                    <br />
                    WE SHIP OUR DREAMS.
                  </p>
                </div>
              </div>

              {/* Vintage Hex Dump & Terminal Debug Box */}
              <div className="bg-[#111111] text-[#D6C4A5] p-2.5 font-mono text-[10px] leading-tight space-y-1 rounded-sm border border-[#111111]">
                <p className="text-[#B52A1C] font-bold">&gt;&gt; SYS_OURLD: OK</p>
                <p>&gt;&gt; MODEL: OLLAMA_AI</p>
                <p>&gt;&gt; CODE: PYTHON_3.12</p>
                <p>&gt;&gt; REPO: JARVIS_V4.5</p>
                <div className="border-t border-[#D6C4A5]/30 pt-1 text-[#D6C4A5]/80 space-y-0.5">
                  <p>0x00 0x44 0x33 0xA1</p>
                  <p>0xFF 0x91 0x2A 0x7E</p>
                  <p>0xDE 0xAD 0x00 0xBF</p>
                  <p>0xBA 0xBE 0xEF 0x17</p>
                </div>
              </div>
            </div>

            {/* Left Column Bottom: Resume Link & Core Specs */}
            <div className="pt-3 mt-3 border-t-2 border-[#111111] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onNavigatePage('resume')}
                className="w-full py-2 px-3 border border-[#111111] bg-[#FFFFFF] hover:bg-[#111111] hover:text-[#FFFFFF] text-[#000000] font-mono text-xs font-bold uppercase transition-colors flex items-center justify-between"
              >
                <span>RESUME CURRICULUM</span>
                <Download className="w-3.5 h-3.5" />
              </button>
              <div className="text-[10px] font-mono text-center text-[#111111] font-bold uppercase">
                ENGINEERING / BANGALORE
              </div>
            </div>
          </aside>

          {/* -----------------------------------------------------------------------
              CENTRAL MAIN FEATURE — VERY LARGE AUTHENTIC PORTRAIT PHOTOGRAPH
              (Preserves actual face and identity, huge and dominant in printed frame)
          ------------------------------------------------------------------------ */}
          <section className="lg:col-span-5 border-2 border-[#111111] bg-[#111111] p-1.5 flex flex-col justify-between relative overflow-hidden group">
            {/* Vintage printed overlay graphics inside portrait area */}
            <div className="relative flex-1 w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden bg-[#222222] flex items-center justify-center">
              {/* Actual Professional Photograph wearing Navy-Blue Blazer & White Shirt */}
              <img
                src={PERSONAL_INFO.portraitUrl}
                alt="Chidella Venkata Prudvish wearing a navy-blue blazer and white shirt"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_16%] vintage-photo-filter grayscale contrast-125 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-105"
              />

              {/* Halftone / Newsprint texture overlay */}
              <div className="absolute inset-0 pointer-events-none bg-radial-gradient opacity-30 mix-blend-multiply" />

              {/* System Specs Box in bottom right corner of photo */}
              <div className="absolute bottom-2 right-2 bg-[#111111]/90 border border-[#D6C4A5] p-2 text-right font-mono text-[9px] sm:text-[10px] leading-tight text-[#D6C4A5] pointer-events-none">
                <p className="text-[#B52A1C] font-bold">SYSTEM: JARVIS_CORE</p>
                <p>STATUS: ACTIVE / DEPLOYED</p>
                <p>DEV: C_VENKATA_PRUDVISH</p>
                <p>CODE: 0x00FF-2026</p>
              </div>
            </div>

            {/* Prominent Editorial Caption directly beneath photograph */}
            <div className="bg-[#D6C4A5] border-t-2 border-[#111111] p-2 sm:p-2.5 mt-1 text-center font-typewriter">
              <h3 className="font-headline font-extrabold text-base sm:text-lg tracking-wider text-[#111111] uppercase">
                CHIDELLA VENKATA PRUDVISH
              </h3>
              <p className="font-mono text-[11px] font-bold text-[#B52A1C] tracking-widest uppercase">
                COMPUTER SCIENCE &amp; ENGINEERING | AI &amp; ML
              </p>
              <p className="text-[10px] text-[#111111]/80 mt-0.5">
                Jain Deemed-to-be University, Bengaluru · Software Developer &amp; AI Builder
              </p>
            </div>
          </section>

          {/* -----------------------------------------------------------------------
              RIGHT-SIDE NEWSPAPER PANELS (01 to 06, authentic newspaper layout, genuine links)
          ------------------------------------------------------------------------ */}
          <nav
            aria-label="Newspaper Sections"
            className="lg:col-span-4 flex flex-col justify-between gap-2.5"
          >
            {/* Panel 01: ABOUT ME */}
            <button
              type="button"
              onClick={() => onNavigatePage('about')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                <span className="text-[#B52A1C]">SECTION 01 // DISPATCH</span>
                <span className="group-hover:translate-x-1 transition-transform">READ ARTICLE →</span>
              </div>
              <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                THE PERSON BEHIND THE CODE.
              </h4>
              <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                Discover my background, interests, education, and journey into technology.
              </p>
            </button>

            {/* Panel 02: TECHNICAL SKILLS */}
            <button
              type="button"
              onClick={() => onNavigatePage('skills')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                <span className="text-[#B52A1C]">SECTION 02 // TOOLKIT</span>
                <span className="group-hover:translate-x-1 transition-transform">READ ARTICLE →</span>
              </div>
              <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                THE ENGINEER'S TOOLKIT.
              </h4>
              <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                Programming, DSA, libraries, frameworks, and development tools.
              </p>
            </button>

            {/* Panel 03: PROJECTS */}
            <button
              type="button"
              onClick={() => onNavigatePage('projects')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                    <span className="text-[#B52A1C]">SECTION 03 // FEATURED WORK</span>
                    <span className="group-hover:translate-x-1 transition-transform">READ →</span>
                  </div>
                  <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                    IDEAS BECOME REALITY.
                  </h4>
                  <p className="font-headline font-bold text-xs text-[#B52A1C] uppercase tracking-wide">
                    JARVIS AI &amp; HOSPITAL SYSTEM.
                  </p>
                  <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                    Explore JARVIS AI Desktop Assistant and Hospital Management System.
                  </p>
                </div>
              </div>
            </button>

            {/* Panel 04: ACHIEVEMENTS */}
            <button
              type="button"
              onClick={() => onNavigatePage('achievements')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                <span className="text-[#B52A1C]">SECTION 04 // HONOURS</span>
                <span className="group-hover:translate-x-1 transition-transform">READ ARTICLE →</span>
              </div>
              <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                MILESTONES THAT MATTER.
              </h4>
              <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                Academic achievements and Smart India Hackathon qualification.
              </p>
            </button>

            {/* Panel 05: EDUCATION */}
            <button
              type="button"
              onClick={() => onNavigatePage('education')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                <span className="text-[#B52A1C]">SECTION 05 // ACADEMICS</span>
                <span className="group-hover:translate-x-1 transition-transform">READ ARTICLE →</span>
              </div>
              <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                KNOWLEDGE IN THE MAKING.
              </h4>
              <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                Jain University, academic performance, and education.
              </p>
            </button>

            {/* Panel 06: CONTACT */}
            <button
              type="button"
              onClick={() => onNavigatePage('contact')}
              className="group text-left border-2 border-[#111111] bg-[#D6C4A5] hover:bg-[#E4D7BE] p-2.5 transition-colors cursor-pointer relative"
            >
              <div className="flex items-center justify-between text-[10px] font-mono font-bold border-b border-[#111111] pb-1 mb-1 text-[#111111]">
                <span className="text-[#B52A1C]">SECTION 06 // CORRESPONDENCE</span>
                <span className="group-hover:translate-x-1 transition-transform">CONNECT →</span>
              </div>
              <h4 className="font-headline font-black text-lg sm:text-xl text-[#111111] leading-tight uppercase group-hover:text-[#B52A1C] transition-colors">
                LET'S CONNECT.
              </h4>
              <p className="font-typewriter text-[11px] text-[#222222] leading-snug mt-0.5">
                Get in touch for opportunities, projects, and collaborations.
              </p>

              {/* 4 Mini Newspaper Stamp Icons */}
              <div className="grid grid-cols-4 gap-1 pt-2 mt-2 border-t border-[#111111] text-center font-mono text-[9px] font-bold uppercase text-[#111111]">
                <div className="border border-[#111111] p-1 bg-[#D9C8A9] group-hover:bg-[#111111] group-hover:text-[#D6C4A5] transition-colors">
                  <span>EMAIL</span>
                </div>
                <div className="border border-[#111111] p-1 bg-[#D9C8A9] group-hover:bg-[#111111] group-hover:text-[#D6C4A5] transition-colors">
                  <span>PHONE</span>
                </div>
                <div className="border border-[#111111] p-1 bg-[#D9C8A9] group-hover:bg-[#111111] group-hover:text-[#D6C4A5] transition-colors">
                  <span>GITHUB</span>
                </div>
                <div className="border border-[#111111] p-1 bg-[#D9C8A9] group-hover:bg-[#111111] group-hover:text-[#D6C4A5] transition-colors">
                  <span>LINKEDIN</span>
                </div>
              </div>
            </button>
          </nav>
        </main>

        {/* =========================================================================
            BOTTOM RUNNING TICKER STRIP
        ========================================================================== */}
        <footer className="mt-4 pt-2 border-t-4 border-[#111111]">
          <div className="border-t border-b border-[#111111] py-1 font-typewriter text-[10px] sm:text-xs font-bold tracking-[0.24em] text-[#B52A1C] uppercase text-center overflow-hidden whitespace-nowrap">
            BUILD CODE — SHIP IDEAS — SOLVE PROBLEMS — BREAK LIMITS — BUILD CODE — SHIP IDEAS — SOLVE PROBLEMS — BREAK LIMITS — WAKE UP — LOG OUT
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-[10px] text-[#111111]">
            <span>© 2026 CHIDELLA VENKATA PRUDVISH. ALL RIGHTS RESERVED.</span>
            <span>PUBLISHED AT JAIN UNIVERSITY, BENGALURU</span>
            <span className="text-[#B52A1C] font-bold">PORTFOLIO BROADSHEET // SPECIAL EDITION</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
