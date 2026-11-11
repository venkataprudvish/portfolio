import React, { useState } from 'react';
import { Server, Database, Layout, GitCommit, ArrowRight } from 'lucide-react';

const WORKFLOW_LAYERS = [
  {
    id: 'routing',
    title: 'URL Dispatcher & Request Routing',
    layer: 'urls.py · HTTP Request',
    summary:
      'Maps incoming healthcare portal requests to structured server-side view handlers with clean URL namespaces.',
    details: [
      'Clean URL patterns organizing administrative and clinical entry points',
      'Request context validation before invoking backend view controllers',
      'Modular Django app routing structure for maintainable expansion',
    ],
  },
  {
    id: 'views',
    title: 'Backend View Logic & Workflow Coordination',
    layer: 'views.py · Business Logic',
    summary:
      'Coordinates core hospital management workflows, form processing, and server-side state transitions.',
    details: [
      'Server-side request handling for healthcare workflow coordination',
      'Structured form validation and safe data processing in Python',
      'Separation of business rules from presentation templates',
    ],
  },
  {
    id: 'models',
    title: 'Relational Data Modeling (Django ORM)',
    layer: 'models.py · SQL Persistence',
    summary:
      'Applies relational database fundamentals through Django ORM classes to maintain structured records.',
    details: [
      'Schema definition using Python model classes and typed fields',
      'Relational integrity across healthcare workflow records',
      'QuerySet retrieval and filtered record views',
    ],
  },
];

export const HospitalSystemPreview: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('routing');

  const currentLayer =
    WORKFLOW_LAYERS.find((l) => l.id === selectedLayer) || WORKFLOW_LAYERS[0];

  return (
    <div className="rounded-xl overflow-hidden bg-[#F8F5ED] border border-[#174B38]/20 shadow-[0_16px_40px_rgba(23,75,56,0.08)] text-[#292D29]">
      {/* Browser / Application Top Bar */}
      <div className="px-4 py-3 bg-[#174B38] text-[#F8F5ED] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Server className="w-4 h-4 text-[#E9DCC3]" />
          <span className="font-mono text-xs tracking-wide">
            Django Backend Architecture — Hospital Management Workflow Preview
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#E9DCC3]/85">
          Python · Django MTV Pattern
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-6">
        {/* Interactive MTV Architecture Pipeline */}
        <div
          role="tablist"
          aria-label="Django architecture layers"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {WORKFLOW_LAYERS.map((layer, index) => {
            const isSelected = layer.id === selectedLayer;
            return (
              <button
                key={layer.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedLayer(layer.id)}
                className={`text-left p-4 rounded-lg border transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#174B38] text-[#F8F5ED] border-[#174B38] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#292D29] border-[#174B38]/15 hover:border-[#80649B]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className={isSelected ? 'text-[#E9DCC3]' : 'text-[#80649B]'}>
                    0{index + 1} · {layer.layer.split(' · ')[0]}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isSelected ? 'text-[#E9DCC3]' : 'text-[#174B38]/40'
                    }`}
                  />
                </div>
                <p className="font-display text-lg font-bold leading-snug">
                  {layer.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Inspection Panel */}
        <div className="p-5 rounded-lg bg-[#E9DCC3]/45 border border-[#174B38]/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#80649B]">
              {selectedLayer === 'routing' && <GitCommit className="w-4 h-4" />}
              {selectedLayer === 'views' && <Layout className="w-4 h-4" />}
              {selectedLayer === 'models' && <Database className="w-4 h-4" />}
              <span>{currentLayer.layer}</span>
            </div>
            <h4 className="font-display text-2xl font-bold text-[#174B38]">
              {currentLayer.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#292D29]/85 leading-relaxed">
              {currentLayer.summary}
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#FFFFFF] p-4 rounded-lg border border-[#174B38]/12">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#174B38]/70 mb-2.5">
              Applied Engineering Focus
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#292D29]">
              {currentLayer.details.map((item, idx) => (
                <li
                  key={idx}
                  className="pb-2 last:pb-0 border-b last:border-b-0 border-[#174B38]/10 flex items-start gap-2.5"
                >
                  <span className="font-mono text-xs text-[#80649B] font-semibold">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
