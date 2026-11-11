import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Terminal,
  Wrench,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { SKILL_CATEGORIES, SkillItem } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code2 className="w-5 h-5 text-[#174B38]" />,
  dsa: <Cpu className="w-5 h-5 text-[#174B38]" />,
  libraries: <Database className="w-5 h-5 text-[#174B38]" />,
  frameworks: <Layers className="w-5 h-5 text-[#174B38]" />,
  tools: <Wrench className="w-5 h-5 text-[#174B38]" />,
  'ai-dev': <Sparkles className="w-5 h-5 text-[#80649B]" />,
};

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<{
    categoryTitle: string;
    skill: SkillItem;
  }>({
    categoryTitle: SKILL_CATEGORIES[0].title,
    skill: SKILL_CATEGORIES[0].skills[0],
  });

  const filteredCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeFilter);

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 lg:py-32 bg-[#E9DCC3]/55 text-[#292D29] border-b border-[#174B38]/12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header & Interactive Category Filter Bar */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2">
              02 · Technical Competencies
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#174B38] leading-[1.1] text-balance mb-3">
              Technical Skills &amp; Engineering Stack
            </h2>
            <p className="text-sm sm:text-base text-[#292D29]/80 leading-relaxed">
              Organized across core programming languages, algorithmic foundations, Python data libraries, frameworks, and local AI development practices. Select any skill below to inspect how it is applied.
            </p>
          </motion.div>

          {/* Interactive Filter Controls */}
          <motion.div
            variants={fadeInUp}
            role="tablist"
            aria-label="Filter skill categories"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F8F5ED] border border-[#174B38]/15 rounded-lg self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === 'all'
                  ? 'bg-[#174B38] text-[#F8F5ED]'
                  : 'text-[#292D29]/80 hover:text-[#174B38] hover:bg-[#E9DCC3]/50'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === category.id
                    ? 'bg-[#174B38] text-[#F8F5ED]'
                    : 'text-[#292D29]/80 hover:text-[#174B38] hover:bg-[#E9DCC3]/50'
                }`}
              >
                {category.title.split(' ')[0]}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Context Spotlight Bar */}
        <div className="mb-10 bg-[#174B38] text-[#F8F5ED] rounded-xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(23,75,56,0.12)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E9DCC3]/80">
                <Terminal className="w-3.5 h-3.5 text-[#80649B]" />
                <span>Selected Competency Spotlight</span>
                <span aria-hidden="true">·</span>
                <span>{selectedSkill.categoryTitle}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#FFFFFF]">
                {selectedSkill.skill.name}
              </h3>
            </div>
            <p className="text-sm text-[#E9DCC3]/95 max-w-2xl leading-relaxed">
              {selectedSkill.skill.context}
            </p>
          </div>
        </div>

        {/* Category Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.article
                layout
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-[#F8F5ED] border border-[#174B38]/15 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#174B38]/35 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#174B38]/10">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#80649B] block mb-0.5">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-[#174B38]">
                        {category.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#E9DCC3]/70 flex items-center justify-center shrink-0">
                      {CATEGORY_ICONS[category.id]}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#292D29]/75 leading-relaxed mb-5">
                    {category.subtitle}
                  </p>

                  {/* Interactive Skill Items List */}
                  <div className="space-y-2">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill.skill.name === skill.name;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() =>
                            setSelectedSkill({
                              categoryTitle: category.title,
                              skill,
                            })
                          }
                          onMouseEnter={() =>
                            setSelectedSkill({
                              categoryTitle: category.title,
                              skill,
                            })
                          }
                          className={`w-full text-left px-3.5 py-2.5 rounded-lg border transition-all duration-150 flex items-center justify-between gap-3 ${
                            isSelected
                              ? 'bg-[#174B38] text-[#F8F5ED] border-[#174B38]'
                              : 'bg-[#FFFFFF] text-[#292D29] border-[#174B38]/10 hover:border-[#80649B]'
                          }`}
                        >
                          <span className="text-sm font-semibold">{skill.name}</span>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              isSelected
                                ? 'text-[#E9DCC3] translate-x-0.5'
                                : 'text-[#80649B]/70'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {category.note && (
                  <p className="mt-5 pt-4 border-t border-[#174B38]/10 text-[11px] text-[#263B31]/75 leading-relaxed">
                    {category.note}
                  </p>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
