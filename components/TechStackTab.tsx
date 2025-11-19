import React from 'react';
import { CheckCircle } from './icons';

export const TechStackTab: React.FC = () => {
  const languages = [
    { name: 'Python', purpose: 'Core Logic', version: '3.8+', color: 'text-yellow-400' },
    { name: 'Streamlit', purpose: 'Frontend', version: '1.32', color: 'text-red-400' },
    { name: 'GROQ', purpose: 'Inference', version: 'v1', color: 'text-orange-400' }
  ];
  const mlLibs = [
    { name: 'Scikit-learn', purpose: 'TF-IDF', version: '1.3', color: 'text-blue-400' },
    { name: 'NumPy', purpose: 'Math Ops', version: '1.24', color: 'text-cyan-400' },
    { name: 'PyMuPDF', purpose: 'Parsing', version: '1.23', color: 'text-emerald-400' }
  ];

  return (
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {/* Core Stack */}
      <div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors">
        <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">Core Technologies</h3>
        <div className="space-y-4">
          {languages.map((tech, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
              <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-current ${tech.color} group-hover:scale-150 transition-transform`}></div>
                  <div>
                    <div className="font-bold text-white">{tech.name}</div>
                    <div className="text-xs text-slate-500">{tech.purpose}</div>
                  </div>
              </div>
              <span className="text-xs font-mono bg-black/30 text-slate-300 px-2 py-1 rounded border border-white/5 group-hover:border-white/20 transition-colors">{tech.version}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ML Stack */}
      <div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-colors">
        <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">ML Libraries</h3>
        <div className="space-y-4">
          {mlLibs.map((tech, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group cursor-default">
              <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-current ${tech.color} group-hover:scale-150 transition-transform`}></div>
                  <div>
                    <div className="font-bold text-white">{tech.name}</div>
                    <div className="text-xs text-slate-500">{tech.purpose}</div>
                  </div>
              </div>
              <span className="text-xs font-mono bg-black/30 text-slate-300 px-2 py-1 rounded border border-white/5 group-hover:border-white/20 transition-colors">{tech.version}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* AI Spotlight */}
    <div className="glass-card rounded-2xl p-8 relative overflow-hidden border border-purple-500/30 group">
      {/* Scanning beam effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-scan-beam"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full group-hover:bg-purple-600/30 transition-colors duration-500"></div>
      
      <h3 className="text-2xl font-bold text-white mb-6 relative z-10">The AI Engine</h3>
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        <div className="group/item">
          <h4 className="text-purple-400 font-bold uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
            LLM Model <div className="h-px w-8 bg-purple-500/50"></div>
          </h4>
          <div className="text-4xl font-bold text-white mb-2 group-hover/item:text-purple-200 transition-colors">Llama 3.3</div>
          <div className="text-xl text-slate-400 mb-4">70B Versatile</div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-500" /> 8192 Context Window</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-purple-500" /> 300 Tokens/sec Speed</li>
          </ul>
        </div>
        <div className="group/item">
          <h4 className="text-blue-400 font-bold uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
            Vectorization <div className="h-px w-8 bg-blue-500/50"></div>
          </h4>
          <div className="text-4xl font-bold text-white mb-2 group-hover/item:text-blue-200 transition-colors">TF-IDF</div>
          <div className="text-xl text-slate-400 mb-4">Scikit-Learn</div>
           <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> Zero GPU Requirement</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> In-Memory Caching</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
};