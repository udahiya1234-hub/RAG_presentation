import React from 'react';
import { CheckCircle, Cpu, Layers, Code as CodeIcon } from './icons';

export const TechStackTab: React.FC = () => {
  return (
  <div className="space-y-8">
    
    {/* AI Spotlight - Hero Card */}
    <div className="glass-panel rounded-3xl p-10 relative overflow-hidden border border-purple-500/30 group">
      {/* Background Image */}
      <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" alt="Neural Net" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
             <Cpu className="w-3 h-3" /> Core Intelligence
          </div>
          <h2 className="text-5xl font-bold text-white mb-2 tracking-tight">Llama 3.3</h2>
          <p className="text-purple-300 text-xl mb-8 font-light">70B Parameter High-Fidelity Model</p>
          
          <div className="flex flex-wrap gap-4">
             <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-purple-500" /> 8k Context
             </div>
             <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-purple-500" /> 300 T/s Speed
             </div>
          </div>
        </div>
        
        <div className="glass-card bg-black/40 rounded-2xl p-8 border border-white/10 backdrop-blur-xl">
           <div className="flex items-center justify-between mb-6">
               <h4 className="text-slate-400 uppercase text-xs font-bold tracking-widest">Embedding Strategy</h4>
               <div className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs font-bold">Optimized</div>
           </div>
           <div className="flex items-baseline gap-2 mb-4">
               <span className="text-4xl font-bold text-white">TF-IDF</span>
               <span className="text-sm text-slate-500">Vectorization</span>
           </div>
           <p className="text-sm text-slate-400 leading-relaxed mb-6">
               Selected for high-precision keyword matching in technical documentation, outperforming dense embeddings for specific terminology retrieval while reducing compute costs by 40%.
           </p>
           <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
               <div className="bg-gradient-to-r from-purple-500 to-cyan-500 w-[92%] h-full rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
           </div>
           <div className="flex justify-between text-[10px] text-slate-500 mt-2">
               <span>Precision Score</span>
               <span>92/100</span>
           </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {/* Frontend Stack */}
      <div className="glass-panel rounded-3xl p-8">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            <CodeIcon className="w-5 h-5 text-indigo-400" /> Engineering Stack
        </h3>
        <div className="grid grid-cols-1 gap-3">
          {[
            { name: 'Python 3.9', role: 'Orchestration', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' },
            { name: 'Streamlit', role: 'User Interface', color: 'border-red-500/30 text-red-400 bg-red-500/5' },
            { name: 'GROQ Cloud', role: 'Inference API', color: 'border-orange-500/30 text-orange-400 bg-orange-500/5' }
          ].map((tech, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border ${tech.color} hover:bg-white/5 transition-colors`}>
               <span className="font-bold">{tech.name}</span>
               <span className="text-xs text-slate-500 uppercase tracking-wider">{tech.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Data Stack */}
      <div className="glass-panel rounded-3xl p-8">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
            <Layers className="w-5 h-5 text-emerald-400" /> Data Pipeline
        </h3>
        <div className="grid grid-cols-1 gap-3">
           {[
            { name: 'Scikit-learn', role: 'Feature Extraction', color: 'border-blue-500/30 text-blue-400 bg-blue-500/5' },
            { name: 'NumPy', role: 'Matrix Operations', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/5' },
            { name: 'PyMuPDF', role: 'Document Parsing', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' }
          ].map((tech, idx) => (
            <div key={idx} className={`flex items-center justify-between p-4 rounded-xl border ${tech.color} hover:bg-white/5 transition-colors`}>
               <span className="font-bold">{tech.name}</span>
               <span className="text-xs text-slate-500 uppercase tracking-wider">{tech.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};