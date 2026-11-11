import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import {
  PERSONAL_INFO,
  PortfolioPageId,
} from '../data/portfolioData';

interface NavbarProps {
  activePage: PortfolioPageId;
  onNavigatePage: (pageId: PortfolioPageId) => void;
}

const TOP_NAV_ITEMS: { id: PortfolioPageId; label: string }[] = [
  { id: 'home', label: 'The Book' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Competencies' },
  { id: 'projects', label: 'Engineering Work' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'beyond', label: 'Beyond Tech' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleSelectPage = (pageId: PortfolioPageId) => {
    setMobileMenuOpen(false);
    onNavigatePage(pageId);
  };

  // On Home top hero (before scroll), use dark forest green header to match ROSSO-inspired dark hero stage
  const isHomeHeroTop = activePage === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isHomeHeroTop
          ? 'bg-[#174B38]/90 backdrop-blur-md border-b border-[#E9DCC3]/15 text-[#F8F5ED]'
          : 'bg-[#F8F5ED]/95 backdrop-blur-md border-b border-[#174B38]/12 text-[#292D29] shadow-[0_4px_24px_rgba(23,75,56,0.04)]'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          className={`font-display text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80649B] ${
            isHomeHeroTop ? 'text-[#F8F5ED]' : 'text-[#174B38]'
          }`}
        >
          {PERSONAL_INFO.brandMark}
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Page Navigation"
          className="hidden xl:flex items-center gap-6 text-xs sm:text-sm font-medium"
        >
          {TOP_NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelectPage(item.id)}
                className={`relative py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#80649B] ${
                  isHomeHeroTop
                    ? isActive
                      ? 'text-[#E9DCC3] font-semibold'
                      : 'text-[#F8F5ED]/75 hover:text-[#E9DCC3]'
                    : isActive
                    ? 'text-[#174B38] font-semibold'
                    : 'text-[#292D29]/75 hover:text-[#174B38]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                      isHomeHeroTop ? 'bg-[#E9DCC3]' : 'bg-[#80649B]'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + Mobile trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelectPage('contact')}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80649B] ${
              isHomeHeroTop
                ? 'bg-[#E9DCC3] text-[#174B38] hover:bg-[#FFFFFF]'
                : 'bg-[#174B38] text-[#F8F5ED] hover:bg-[#263B31]'
            }`}
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-md transition-colors cursor-pointer ${
              isHomeHeroTop
                ? 'text-[#F8F5ED] hover:bg-[#E9DCC3]/15'
                : 'text-[#174B38] hover:bg-[#174B38]/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden bg-[#F8F5ED] text-[#292D29] border-b border-[#174B38]/15 px-5 pt-4 pb-6 shadow-lg"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
              {TOP_NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectPage(item.id)}
                    className={`w-full text-left flex items-center justify-between px-3.5 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#E9DCC3]/70 text-[#174B38] font-semibold'
                        : 'text-[#292D29] hover:bg-[#E9DCC3]/40 hover:text-[#174B38]'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {item.id === 'home' && <BookOpen className="w-4 h-4 text-[#80649B]" />}
                      <span>{item.label}</span>
                    </span>
                    {isActive && (
                      <span className="text-xs font-mono text-[#80649B]">Current Page</span>
                    )}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-[#174B38]/10">
                <button
                  type="button"
                  onClick={() => handleSelectPage('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#F8F5ED] bg-[#174B38] hover:bg-[#263B31] rounded-md transition-colors cursor-pointer"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E9DCC3]" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
