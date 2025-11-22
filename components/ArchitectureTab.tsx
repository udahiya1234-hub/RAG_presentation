import React from 'react';
import { Database, Code, Zap, Brain, FileText, Layers } from './icons';

export const ArchitectureTab: React.FC = () => (
  <div className="space-y-10">
    {/* Interactive Flow Diagram */}
    <div className="glass-panel rounded-3xl p-12 border border-indigo-500/20 relative overflow-hidden bg-[#0B1120]">
      
      {/* Schematic Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(180deg,rgba(56,189,248,0.3)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1120]"></div>
      
      <div className="relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">Data Pipeline Architecture</h2>
            <p className="text-slate-400 text-sm">End-to-end flow from raw document to generated insight.</p>
        </div>

        {/* Step 1: Input */}
        <div className="flex justify-center">
          <div className="group relative z-10">
             <div className="absolute -inset-2 bg-indigo-500/50 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
             <div className="relative bg-[#0f172a] text-indigo-100 px-8 py-4 rounded-full font-bold border border-indigo-500/50 flex items-center gap-4 shadow-xl">
                <div className="bg-indigo-500 p-2 rounded-full text-white"><FileText className="w-5 h-5" /></div>
                <span>User Uploads Document</span>
             </div>
          </div>
        </div>
        
        {/* Connector Down */}
        <div className="flex justify-center -my-6 relative z-0">
          <div className="w-0.5 h-20 bg-gradient-to-b from-indigo-500 to-purple-500 animate-pulse"></div>
        </div>
        
        {/* Step 2: Processing Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
          {/* Horizontal Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -z-10 hidden md:block dashed-line"></div>

          {[
              { step: '01', title: 'Extraction', desc: 'PyMuPDF text parsing', icon: Code, color: 'text-cyan-400', border: 'border-cyan-500/30' },
              { step: '02', title: 'Chunking', desc: 'Recursive splitting', icon: Layers, color: 'text-indigo-400', border: 'border-indigo-500/30', scale: true },
              { step: '03', title: 'Embeddings', desc: 'TF-IDF Vectorization', icon: Database, color: 'text-purple-400', border: 'border-purple-500/30' }
          ].map((item, idx) => (
              <div key={idx} className={`glass-card bg-[#1e293b]/80 rounded-2xl p-6 border ${item.border} text-center group ${item.scale ? 'md:scale-110 z-10 bg-[#1e293b]' : ''}`}>
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
          ))}
        </div>
        
        {/* Connector Down */}
         <div className="flex justify-center -my-6 relative z-0">
           <div className="w-0.5 h-20 bg-gradient-to-b from-purple-500 to-emerald-500 animate-pulse"></div>
        </div>
        
        {/* Step 3: Output */}
        <div className="flex justify-center">
             <div className="glass-card px-10 py-4 rounded-2xl font-bold text-white border border-emerald-500/50 flex items-center gap-4 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </div>
                <span>Knowledge Base Ready</span>
            </div>
        </div>
      </div>
    </div>

    {/* Stack Details */}
    <div className="grid md:grid-cols-3 gap-6">
        {[
            { title: 'RAG Engine', icon: Database, items: ['Vector Store', 'Document Loader', 'Similarity Search'], color: 'blue' },
            { title: 'Frontend UI', icon: Code, items: ['Streamlit', 'React Components', 'File Uploader'], color: 'purple' },
            { title: 'AI Models', icon: Brain, items: ['GROQ API', 'Llama 3.3', 'Scikit-Learn'], color: 'emerald' }
        ].map((card, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border-t-2 border-t-white/10 hover:border-t-indigo-500 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-${card.color}-500/10 rounded-xl border border-${card.color}-500/20`}>
                        <card.icon className={`w-6 h-6 text-${card.color}-400`} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>
                <ul className="space-y-3">
                    {card.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                            <div className={`w-1.5 h-1.5 rounded-full bg-${card.color}-500`}></div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  </div>
);