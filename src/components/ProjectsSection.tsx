import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Github,
  Layers,
  X,
  CheckCircle2,
  Clock,
  Compass,
} from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { JarvisDesktopPreview } from './JarvisDesktopPreview';
import { HospitalSystemPreview } from './HospitalSystemPreview';
import { fadeInUp, staggerContainer } from '../utils/animations';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 lg:py-32 bg-[#F8F5ED] text-[#292D29] border-b border-[#174B38]/12"
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.18em] uppercase text-[#80649B] mb-2"
          >
            03 · Featured Engineering Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#174B38] leading-[1.1] text-balance mb-4"
          >
            Selected Software &amp; AI Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base text-[#292D29]/80 leading-relaxed"
          >
            Practical systems built to explore local AI integration, voice-driven desktop interaction, modular Python architecture, and web backend engineering.
          </motion.p>
        </motion.div>

        {/* Projects Stack */}
        <div className="space-y-20 lg:space-y-28">
          {FEATURED_PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#E9DCC3]/45 border border-[#174B38]/15 rounded-2xl p-6 sm:p-8 lg:p-12"
            >
              {/* Project Top Metadata Header (Clean unboxed typography with separators) */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#174B38]/15">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#174B38]">
                  <span className="font-semibold text-[#80649B]">
                    PROJECT {project.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.status}</span>
                </div>

                {/* Unboxed Technology Stack List */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#263B31]">
                  {project.technologies.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-medium">{tech}</span>
                      {idx < project.technologies.length - 1 && (
                        <span className="text-[#80649B]" aria-hidden="true">
                          /
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Project Title & Description Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
                <div className="lg:col-span-5 space-y-4">
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174B38] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-display text-xl sm:text-2xl italic text-[#263B31] leading-snug">
                    {project.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-semibold text-[#F8F5ED] bg-[#174B38] hover:bg-[#263B31] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80649B]"
                      >
                        <Github className="w-4 h-4 text-[#E9DCC3]" />
                        <span>{project.githubLabel || 'Explore on GitHub'}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#E9DCC3]" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#174B38] bg-[#F8F5ED] hover:bg-[#FFFFFF] border border-[#174B38]/25 hover:border-[#80649B] rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#80649B]"
                    >
                      <Layers className="w-4 h-4 text-[#80649B]" />
                      <span>Inspect Architecture &amp; Roadmap</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-3 text-base text-[#292D29]/90 leading-relaxed">
                    {project.description.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Key Project Areas Grid */}
                  <div className="pt-4 border-t border-[#174B38]/12">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#80649B] mb-3">
                      Key Engineering Areas
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#174B38] font-medium">
                      {project.keyAreas.map((area, idx) => (
                        <div
                          key={area}
                          className="py-1.5 border-b border-[#174B38]/10 flex items-center gap-2.5"
                        >
                          <span className="font-mono text-xs text-[#80649B] tabular-nums">
                            0{idx + 1}.
                          </span>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Custom Interactive Project Visual */}
              <div className="mt-8">
                {project.id === 'jarvis' ? (
                  <JarvisDesktopPreview />
                ) : (
                  <HospitalSystemPreview />
                )}
              </div>

              {/* Inline Feature Status Summary for Transparency */}
              <div className="mt-8 pt-6 border-t border-[#174B38]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#263B31]">
                <p className="leading-relaxed max-w-3xl">
                  <strong className="font-semibold text-[#174B38]">
                    Architecture Summary:{' '}
                  </strong>
                  {project.architectureSummary}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-xs font-semibold text-[#80649B] hover:text-[#174B38] underline underline-offset-4 whitespace-nowrap shrink-0 self-start sm:self-auto"
                >
                  View Full Feature Status Breakdown →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Detailed Project View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#174B38]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F8F5ED] text-[#292D29] border border-[#174B38]/25 rounded-2xl max-w-4xl w-full max-h-[88vh] overflow-y-auto shadow-2xl p-6 sm:p-8 lg:p-10"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-6 mb-6 border-b border-[#174B38]/15">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#80649B] mb-1">
                    Project {selectedProject.index} · Detailed Technical Specification
                  </p>
                  <h3
                    id="modal-project-title"
                    className="font-display text-3xl sm:text-4xl font-bold text-[#174B38]"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#263B31] mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="w-10 h-10 rounded-lg bg-[#E9DCC3]/70 hover:bg-[#174B38] text-[#174B38] hover:text-[#F8F5ED] flex items-center justify-center transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Feature Status Breakdown (Implemented vs In Development vs Planned) */}
              <div className="space-y-8">
                {selectedProject.featureBreakdown.map((group) => (
                  <div
                    key={group.status}
                    className="bg-[#FFFFFF] border border-[#174B38]/15 rounded-xl p-5 sm:p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#174B38]/10">
                      <div className="flex items-center gap-2">
                        {group.status === 'Implemented' && (
                          <CheckCircle2 className="w-4 h-4 text-[#174B38]" />
                        )}
                        {group.status === 'In Development' && (
                          <Clock className="w-4 h-4 text-[#80649B]" />
                        )}
                        {group.status === 'Planned' && (
                          <Compass className="w-4 h-4 text-[#263B31]" />
                        )}
                        <h4 className="font-display text-2xl font-bold text-[#174B38]">
                          {group.status} Capabilities
                        </h4>
                      </div>
                      <span className="text-xs text-[#292D29]/70">
                        {group.description}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.items.map((item) => (
                        <div
                          key={item.title}
                          className="p-4 rounded-lg bg-[#F8F5ED] border border-[#174B38]/10 flex flex-col justify-between"
                        >
                          <div>
                            <h5 className="font-semibold text-[#174B38] text-sm sm:text-base mb-1.5">
                              {item.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-[#292D29]/85 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                          {item.moduleRef && (
                            <p className="mt-3 pt-2 border-t border-[#174B38]/10 font-mono text-[11px] text-[#80649B]">
                              {item.moduleRef}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-[#174B38]/15 flex flex-wrap items-center justify-between gap-4">
                {selectedProject.githubUrl ? (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#F8F5ED] bg-[#174B38] hover:bg-[#263B31] rounded-md transition-colors"
                  >
                    <Github className="w-4 h-4 text-[#E9DCC3]" />
                    <span>Explore Source Repository on GitHub</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E9DCC3]" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-[#263B31]/75">
                    Academic Django Backend Project
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#174B38] bg-[#E9DCC3] hover:bg-[#E9DCC3]/80 rounded-md transition-colors"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
