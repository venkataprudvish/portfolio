import React from 'react';
import { ArrowLeft, Star, Printer, Bookmark } from 'lucide-react';
import { PortfolioPageId } from '../data/portfolioData';

interface NewspaperPageShellProps {
  pageId: PortfolioPageId;
  sectionNumber: string;
  headline: string;
  subheadline: string;
  categoryTag: string;
  onNavigateHome: () => void;
  children: React.ReactNode;
}

export const NewspaperPageShell: React.FC<NewspaperPageShellProps> = ({
  sectionNumber,
  headline,
  subheadline,
  categoryTag,
  onNavigateHome,
  children,
}) => {
  return (
    <div className="min-h-screen bg-newsprint text-[#111111] p-3 sm:p-5 lg:p-7 selection:bg-[#B52A1C] selection:text-[#F8F5ED]">
      <div className="max-w-[1320px] mx-auto border-4 border-[#111111] bg-[#D6C4A5] newsprint-aging p-4 sm:p-6 lg:p-8 rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
        
        {/* Newspaper Top Dispatch Header */}
        <header className="border-b-4 border-[#111111] pb-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold uppercase tracking-wider text-[#111111] pb-2 border-b border-[#111111]">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#D6C4A5] hover:bg-[#B52A1C] transition-colors rounded-xs cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO FRONT PAGE</span>
            </button>
            <div className="flex items-center gap-2 text-[#B52A1C]">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>PRUDVISH // THE DEVELOPER CHRONICLE</span>
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline">SECTION {sectionNumber}</span>
              <button
                type="button"
                onClick={() => window.print()}
                className="hidden sm:inline-flex items-center gap-1 hover:text-[#B52A1C] transition-colors cursor-pointer"
                title="Print this broadsheet"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT</span>
              </button>
            </div>
          </div>

          {/* Broad Headline Area */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B52A1C] tracking-widest uppercase">
              <Bookmark className="w-3.5 h-3.5" />
              <span>{categoryTag}</span>
              <span>//</span>
              <span>SPECIAL FEATURE DISPATCH</span>
            </div>
            <h1 className="font-headline font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#111111] leading-[0.95]">
              {headline}
            </h1>
            <p className="font-typewriter text-sm sm:text-base text-[#222222] italic font-medium max-w-4xl">
              {subheadline}
            </p>
          </div>
        </header>

        {/* Content Body */}
        <div className="font-typewriter">
          {children}
        </div>

        {/* Newspaper Page Footer */}
        <footer className="mt-12 pt-4 border-t-4 border-[#111111] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#111111]">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 font-bold hover:text-[#B52A1C] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO FRONT COVER</span>
          </button>
          <span className="text-[11px] text-[#B52A1C] font-bold">
            CHIDELLA VENKATA PRUDVISH · COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)
          </span>
          <span className="text-[10px]">
            PRINTED &amp; DISPATCHED BENGALURU
          </span>
        </footer>

      </div>
    </div>
  );
};
