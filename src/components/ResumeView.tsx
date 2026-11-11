import React from 'react';
import { Download, Printer, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeViewProps {
  onBack?: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 sm:py-10 px-3 sm:px-6 max-w-4xl mx-auto">
      {/* Action Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 bg-[#111111] text-[#FFFFFF] rounded-md print:hidden">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-[#222222] hover:bg-[#333333] text-[#FFFFFF] rounded transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}
          <span className="font-mono text-xs text-[#CCCCCC]">
            CHIDELLA_VENKATA_PRUDVISH_RESUME.PDF
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-bold bg-[#FFFFFF] hover:bg-[#EEEEEE] text-[#111111] rounded transition-colors cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download / Save PDF</span>
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-[#222222] hover:bg-[#333333] text-[#FFFFFF] rounded transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Clean Black and White Resume Sheet */}
      <div className="bg-[#FFFFFF] text-[#000000] p-8 sm:p-12 border-2 border-[#000000] shadow-2xl rounded-sm font-sans print:border-none print:shadow-none print:p-0">
        
        {/* Header */}
        <header className="border-b-2 border-[#000000] pb-6 mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#000000] mb-1">
            CHIDELLA VENKATA PRUDVISH
          </h1>
          <p className="text-sm font-semibold tracking-wide text-[#333333] mb-3 uppercase">
            Computer Science &amp; Engineering Student | AI &amp; ML Enthusiast | Software Developer
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-mono text-[#222222]">
            <a href={PERSONAL_INFO.emailHref} className="inline-flex items-center gap-1 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span aria-hidden="true">|</span>
            <a href={PERSONAL_INFO.phoneHref} className="inline-flex items-center gap-1 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span aria-hidden="true">|</span>
            <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true">|</span>
            <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase border-b border-[#000000] pb-1 mb-2 text-[#000000]">
            EDUCATION &amp; ACADEMICS
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-[#000000]">
                  Jain Deemed-to-be University, Bengaluru, Karnataka
                </h3>
                <span className="text-xs font-mono text-[#333333]">Undergraduate (Pursuing)</span>
              </div>
              <p className="text-xs text-[#222222] italic">
                Bachelor of Technology (B.Tech) — Computer Science and Engineering (Artificial Intelligence and Machine Learning)
              </p>
              <div className="mt-1 flex flex-wrap gap-4 text-xs font-mono font-semibold text-[#000000]">
                <span>Semester 1 SGPA: 9.05 / 10</span>
                <span>•</span>
                <span>Semester 2 SGPA: 9.13 / 10</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#E5E5E5] flex flex-wrap items-baseline justify-between text-xs">
              <div>
                <span className="font-bold">Intermediate Education:</span>
                <span className="text-[#333333] ml-1">Mathematics &amp; Science Foundations</span>
              </div>
              <span className="font-mono font-bold">Score: 94%</span>
            </div>

            <div className="pt-2 border-t border-[#E5E5E5] flex flex-wrap items-baseline justify-between text-xs">
              <div>
                <span className="font-bold">Secondary School (Class X):</span>
                <span className="text-[#333333] ml-1">Core Academic Curricula</span>
              </div>
              <span className="font-mono font-bold">Score: 86.17% (517 / 600)</span>
            </div>
          </div>
        </section>

        {/* Technical Competencies */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase border-b border-[#000000] pb-1 mb-2 text-[#000000]">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div>
              <span className="font-bold">Programming Languages:</span>{' '}
              <span className="text-[#333333]">Python, C, SQL</span>
            </div>
            <div>
              <span className="font-bold">Data Structures &amp; Algorithms:</span>{' '}
              <span className="text-[#333333]">Arrays, Linked Lists, Stacks, Queues, Trees, Complexity Analysis</span>
            </div>
            <div>
              <span className="font-bold">Libraries:</span>{' '}
              <span className="text-[#333333]">NumPy, Pandas, Matplotlib</span>
            </div>
            <div>
              <span className="font-bold">Frameworks &amp; Technologies:</span>{' '}
              <span className="text-[#333333]">Django (MTV Architecture), PySide6, Ollama</span>
            </div>
            <div>
              <span className="font-bold">Developer Tools:</span>{' '}
              <span className="text-[#333333]">Git, GitHub, PyCharm, Visual Studio Code, Microsoft Excel</span>
            </div>
            <div>
              <span className="font-bold">AI &amp; Engineering:</span>{' '}
              <span className="text-[#333333]">Prompt Engineering, Local LLM Integration, Modular Architecture</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase border-b border-[#000000] pb-1 mb-2 text-[#000000]">
            PROJECTS &amp; SYSTEMS
          </h2>
          <div className="space-y-4">
            {/* Project 1 */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#000000]">
                    JARVIS — Modular AI Desktop Assistant
                  </h3>
                  <a
                    href="https://github.com/venkataprudvish/JARVIS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#000000] hover:underline inline-flex items-center gap-0.5 print:hidden"
                  >
                    <span>[GitHub Repo]</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <span className="text-xs font-mono text-[#333333]">v4.5 Core Engine</span>
              </div>
              <p className="text-xs font-mono text-[#555555] mb-1">
                Technologies: Python, Ollama, PySide6, Speech Recognition, pyttsx3
              </p>
              <ul className="list-disc list-outside ml-4 text-xs text-[#222222] space-y-1">
                <li>
                  Engineered a Python-based desktop assistant exploring local offline AI integration with Ollama and modular command routing.
                </li>
                <li>
                  Built a continuous voice activity detection (VAD) audio pipeline with silence detection and multi-voice TTS synthesis.
                </li>
                <li>
                  Implemented persistent memory architecture saving user facts, active tasks, and context across desktop assistant sessions.
                </li>
                <li>
                  Structured modular codebase across dedicated packages (<code className="font-mono text-[11px]">brain/</code>, <code className="font-mono text-[11px]">voice/</code>, <code className="font-mono text-[11px]">commands/</code>, <code className="font-mono text-[11px]">memory/</code>).
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-[#000000]">
                  Hospital Management System
                </h3>
                <span className="text-xs font-mono text-[#333333]">Django Web Application</span>
              </div>
              <p className="text-xs font-mono text-[#555555] mb-1">
                Technologies: Python, Django, HTML, CSS, SQLite / SQL
              </p>
              <ul className="list-disc list-outside ml-4 text-xs text-[#222222] space-y-1">
                <li>
                  Developed a web-based management application using Django MTV (Model-Template-View) architecture.
                </li>
                <li>
                  Organized healthcare-related workflows with clean URL routing, form handling, and relational database modeling.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-4">
          <h2 className="text-xs font-mono font-bold tracking-widest uppercase border-b border-[#000000] pb-1 mb-2 text-[#000000]">
            ACHIEVEMENTS &amp; MILESTONES
          </h2>
          <div className="space-y-1.5 text-xs text-[#222222]">
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <div>
                <strong className="text-[#000000]">Smart India Hackathon — Qualified Participant:</strong> Collaborated within a team to conceptualize, architect, and pitch a technical software solution, successfully qualifying through the selection evaluation stage.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">•</span>
              <div>
                <strong className="text-[#000000]">Academic Excellence:</strong> Maintained consistent high scholastic marks with a 9.13 SGPA in Semester 2 and 9.05 SGPA in Semester 1 in B.Tech CSE (AI &amp; ML).
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular */}
        <section className="pt-2 border-t border-[#000000]">
          <div className="flex flex-wrap items-baseline justify-between text-xs text-[#333333]">
            <span>
              <strong className="text-[#000000]">Extracurricular:</strong> Badminton (Teamwork, Discipline, Consistency, and Sportsmanship)
            </span>
            <span className="font-mono text-[11px]">
              Chidella Venkata Prudvish
            </span>
          </div>
        </section>

      </div>
    </div>
  );
};
