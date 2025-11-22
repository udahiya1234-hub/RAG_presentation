import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, TrendingUp, XCircle } from './icons';

const AnimatedNumber: React.FC<{ value: number; duration?: number; className?: string }> = ({ value, duration = 1500, className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  useEffect(() => {
    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCurrentValue(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value, duration]);
  return <span className={className}>{currentValue}</span>;
};

export const ProblemTab: React.FC = () => {
  return (
    <div className="space-y-10">
      
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">The Knowledge Gap</h2>
        <p className="text-slate-400">
            Organizations sit on mountains of data but starve for insights. Traditional search is broken.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Connector Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#0f172a] p-2 rounded-full border border-slate-700 hidden md:block">
            <div className="bg-slate-800 p-2 rounded-full">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
            </div>
        </div>

        {/* Problem Card */}
        <div className="glass-panel rounded-3xl overflow-hidden group border-red-500/20 relative">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Messy Paperwork" 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#0f172a]"></div>
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20"><XCircle className="w-6 h-6 text-red-400" /></div>
                    <h3 className="text-2xl font-bold text-red-100">Traditional Search</h3>
                </div>
                
                <div className="space-y-4 flex-grow">
                    {[
                        { title: 'Information Overload', desc: 'Manual extraction from 100+ pages is impossible.' },
                        { title: 'Hallucinations', desc: 'LLMs invent facts without context.' },
                        { title: 'Data Silos', desc: 'Knowledge locked in static PDF/DOCX files.' }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-red-950/20 rounded-xl border border-red-500/10 backdrop-blur-sm">
                            <h4 className="font-bold text-red-200 mb-1">{item.title}</h4>
                            <p className="text-xs text-red-300/70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Solution Card */}
        <div className="glass-panel rounded-3xl overflow-hidden group border-emerald-500/20 relative">
             {/* Background Image */}
             <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Digital Solution" 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 mix-blend-luminosity" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 to-[#0f172a]"></div>
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20"><CheckCircle className="w-6 h-6 text-emerald-400" /></div>
                    <h3 className="text-2xl font-bold text-emerald-100">RAG Engine</h3>
                </div>
                
                 <div className="space-y-4 flex-grow">
                    {[
                        { title: 'Instant Retrieval', desc: 'Vector search finds context in milliseconds.' },
                        { title: 'Grounded Accuracy', desc: 'Answers strictly cited from source docs.' },
                        { title: 'Unified Intelligence', desc: 'Centralized knowledge base for all formats.' }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-500/10 backdrop-blur-sm">
                            <h4 className="font-bold text-emerald-200 mb-1">{item.title}</h4>
                            <p className="text-xs text-emerald-300/70">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* Impact Banner */}
      <div className="glass-panel rounded-3xl p-1 relative overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900/40 p-8 rounded-2xl flex flex-col md:flex-row justify-around items-center gap-8">
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2"><AnimatedNumber value={90} />%</div>
                <div className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Time Saved</div>
             </div>
             <div className="w-px h-16 bg-white/10 hidden md:block"></div>
             <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2"><AnimatedNumber value={10} />x</div>
                <div className="text-purple-300 text-xs font-bold uppercase tracking-widest">Faster Search</div>
             </div>
             <div className="w-px h-16 bg-white/10 hidden md:block"></div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">0</div>
                <div className="text-emerald-300 text-xs font-bold uppercase tracking-widest">Hallucinations</div>
             </div>
        </div>
      </div>
    </div>
  );
};