import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Terminal, Database, Cpu, Volume2, Play } from 'lucide-react';

interface SimulationScenario {
  id: 'voice' | 'memory' | 'workflow';
  label: string;
  modulePath: string;
  stateLabel: string;
  userPrompt: string;
  jarvisReply: string;
  systemLogs: string[];
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'voice',
    label: 'Voice & Ollama Loop',
    modulePath: 'voice/conversation_loop.py · brain/ollama_brain.py',
    stateLabel: 'VAD ACTIVE · LISTENING',
    userPrompt: '"Hey Jarvis, summarize my active project tasks and prepare workspace."',
    jarvisReply:
      'Good evening, Sir. Context loaded from memory/current_context.json. You have 2 active tasks in JARVIS v4.5: acoustic wake-word tuning and vision module testing.',
    systemLogs: [
      'vad_engine.py: Speech detected (amplitude > VOICE_THRESHOLD)',
      'offline_listener.py: Audio buffer transcribed via local pipeline',
      'context_builder.py: Injected project & task context into Ollama prompt',
      'speech_output.py: Synthesizing reply via pyttsx3 voice engine',
    ],
  },
  {
    id: 'memory',
    label: 'Persistent Memory',
    modulePath: 'memory/memory_manager.py · main.py',
    stateLabel: 'MEMORY STORE · READ/WRITE',
    userPrompt: 'remember primary_focus = Local AI & Modular Python Architecture',
    jarvisReply:
      'I will remember that, Sir. Key "primary_focus" persisted to data/memory.json and linked to active conversation context.',
    systemLogs: [
      'main.py: Parsed "remember <key> = <value>" command syntax',
      'memory_manager.py: Updated persistent JSON key-value store',
      'context_memory.py: Synchronized session state with disk storage',
      'recall("primary_focus") -> "Local AI & Modular Python Architecture"',
    ],
  },
  {
    id: 'workflow',
    label: 'Workflow & App Resolver',
    modulePath: 'commands/workflow_manager.py · commands/smart_resolver.py',
    stateLabel: 'WORKFLOW ENGINE · V4.5',
    userPrompt: '"Launch development environment and open GitHub repository"',
    jarvisReply:
      'Executing development workflow: resolving PyCharm IDE from data/apps.json and launching cached repository URL via web_launcher.',
    systemLogs: [
      'intent_engine.py: Classified multi-step desktop automation intent',
      'smart_resolver.py: Matched "development environment" -> PyCharm executable',
      'website_resolver.py: Resolved cached URL from data/websites.json',
      'activity_engine.py: Logged workflow execution to session timeline',
    ],
  },
];

export const JarvisDesktopPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SimulationScenario['id']>('voice');
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  const currentScenario =
    SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="rounded-xl overflow-hidden bg-[#1D2420] border border-[#A6B7A0]/25 shadow-[0_20px_50px_rgba(23,75,56,0.22)] text-[#F8F5ED]">
      {/* Desktop Window Titlebar */}
      <div className="px-4 py-3 bg-[#151B18] border-b border-[#A6B7A0]/15 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E9DCC3]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#A6B7A0]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#174B38]" />
          </div>
          <span className="font-mono text-xs text-[#E9DCC3]/90 tracking-wide">
            JARVIS Desktop Assistant — Interactive Architecture Preview
          </span>
        </div>

        <span className="font-mono text-[11px] text-[#A6B7A0]">
          {currentScenario.modulePath}
        </span>
      </div>

      {/* Mode Selector Bar */}
      <div className="px-4 py-2.5 bg-[#19211D] border-b border-[#A6B7A0]/12 flex flex-wrap items-center justify-between gap-2">
        <div
          role="tablist"
          aria-label="JARVIS system modes"
          className="flex flex-wrap items-center gap-1.5"
        >
          {SCENARIOS.map((scenario) => {
            const active = scenario.id === activeTab;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(scenario.id)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#174B38] text-[#F8F5ED] border border-[#A6B7A0]/35'
                    : 'text-[#E9DCC3]/70 hover:text-[#F8F5ED] hover:bg-[#263B31]/60'
                }`}
              >
                {scenario.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setIsSimulating((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono text-[#E9DCC3] bg-[#263B31] hover:bg-[#174B38] border border-[#A6B7A0]/20 transition-colors whitespace-nowrap shrink-0"
        >
          <Play className="w-3 h-3 text-[#A6B7A0]" />
          <span>{isSimulating ? 'Pause Waveform' : 'Resume Waveform'}</span>
        </button>
      </div>

      {/* Main Assistant Interface Grid */}
      <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Circular Assistant Core & Voice Visualization */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-[#151B18]/90 border border-[#A6B7A0]/15">
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Outer Orbital Ring */}
            <motion.svg
              animate={isSimulating ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-full h-full text-[#A6B7A0]/30"
              viewBox="0 0 180 180"
            >
              <circle
                cx="90"
                cy="90"
                r="82"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <circle
                cx="90"
                cy="90"
                r="68"
                fill="none"
                stroke="#174B38"
                strokeWidth="1.5"
              />
            </motion.svg>

            {/* Inner Acoustic Ring */}
            <motion.div
              animate={
                isSimulating
                  ? { scale: [1, 1.06, 1], opacity: [0.75, 1, 0.75] }
                  : { scale: 1, opacity: 0.85 }
              }
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 h-28 rounded-full bg-gradient-to-br from-[#174B38] to-[#263B31] border border-[#A6B7A0]/45 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(23,75,56,0.55)]"
            >
              {activeTab === 'voice' && <Mic className="w-6 h-6 text-[#E9DCC3] mb-1" />}
              {activeTab === 'memory' && <Database className="w-6 h-6 text-[#E9DCC3] mb-1" />}
              {activeTab === 'workflow' && <Cpu className="w-6 h-6 text-[#E9DCC3] mb-1" />}
              <span className="font-mono text-[10px] tracking-widest text-[#E9DCC3] font-semibold">
                JARVIS
              </span>
              <span className="font-mono text-[9px] text-[#A6B7A0]">LOCAL AI</span>
            </motion.div>
          </div>

          {/* Acoustic Waveform Bars */}
          <div className="mt-3 flex items-center justify-center gap-1 h-6" aria-hidden="true">
            {[0.4, 0.8, 0.55, 1, 0.65, 0.9, 0.45, 0.75, 0.5, 0.85, 0.4].map(
              (heightRatio, i) => (
                <motion.span
                  key={i}
                  animate={
                    isSimulating
                      ? {
                          scaleY: [
                            heightRatio * 0.4,
                            heightRatio,
                            heightRatio * 0.5,
                          ],
                        }
                      : { scaleY: heightRatio * 0.4 }
                  }
                  transition={{
                    duration: 1.1 + (i % 3) * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1 h-5 bg-[#A6B7A0] rounded-full origin-center"
                />
              )
            )}
          </div>

          <p className="mt-2 font-mono text-[11px] tracking-wider text-[#E9DCC3]/80">
            {currentScenario.stateLabel}
          </p>
        </div>

        {/* Right: Conversational Transcript & Execution Trace */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScenario.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="space-y-4"
            >
              {/* User Input Box */}
              <div className="p-3.5 rounded-lg bg-[#263B31]/60 border border-[#A6B7A0]/20">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E9DCC3]/70 mb-1">
                  <span>USER INPUT</span>
                  <span>PyAudio / CLI Stream</span>
                </div>
                <p className="font-mono text-xs sm:text-sm text-[#FFFFFF]">
                  {currentScenario.userPrompt}
                </p>
              </div>

              {/* Assistant Output Box */}
              <div className="p-3.5 rounded-lg bg-[#174B38]/60 border border-[#A6B7A0]/30">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E9DCC3]/80 mb-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-[#E9DCC3]" />
                    <span>JARVIS RESPONSE (Ollama Local LLM)</span>
                  </span>
                  <span>pyttsx3 TTS</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F8F5ED] leading-relaxed">
                  {currentScenario.jarvisReply}
                </p>
              </div>

              {/* Module Execution Trace */}
              <div className="p-3.5 rounded-lg bg-[#151B18] border border-[#A6B7A0]/15">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A6B7A0] mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>MODULE EXECUTION TRACE</span>
                </div>
                <ul className="space-y-1 font-mono text-[11px] text-[#E9DCC3]/80">
                  {currentScenario.systemLogs.map((log, index) => (
                    <li key={index} className="truncate">
                      <span className="text-[#A6B7A0] mr-2">0{index + 1}</span>
                      {log}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
