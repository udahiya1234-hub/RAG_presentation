import React, { useState, useEffect } from 'react';
import { Target, Globe, BookOpen, MessageSquare, Brain, Zap, Activity } from './icons';

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => text.substring(0, index + 1));
      index++;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 15); 
    return () => clearInterval(intervalId);
  }, [text, started]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse text-indigo-400 ml-1">_</span>
    </span>
  );
};

export const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Hero Section with Image */}
      <div className="grid lg:grid-cols-2 gap-8 min-h-[400px]">
        {/* Left Content */}
        <div className="glass-panel rounded-3xl p-8 lg:p-10 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6">
                     <Activity className="w-3 h-3" /> Project Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Bridging the gap between <span className="text-indigo-400">Static Data</span> and <span className="text-cyan-400">Dynamic Intelligence</span>.
                </h2>
                <div className="text-lg text-slate-300 leading-relaxed font-light min-h-[100px]">
                   <TypewriterText text="We built a sophisticated Retrieval-Augmented Generation (RAG) system that ingests complex knowledge bases to provide accurate, grounded answers. This project demonstrates mastery over vector databases, embeddings, and Large Language Models." delay={200} />
                </div>
            </div>

            <div className="relative z-10 mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-xs text-slate-400 uppercase">Accuracy</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">&lt;2s</div>
                    <div className="text-xs text-slate-400 uppercase">Latency</div>
                </div>
                <div>
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-xs text-slate-400 uppercase">Formats</div>
                </div>
            </div>
        </div>

        {/* Right Image Card */}
        <div className="glass-panel rounded-3xl relative overflow-hidden group h-full min-h-[300px]">
            <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" 
                alt="AI Intelligence" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 z-10">
                <h3 className="text-xl font-bold text-white mb-2">NotebookLM Style Architecture</h3>
                <p className="text-sm text-slate-300 max-w-md">
                    Leveraging state-of-the-art Llama 3.3 models to synthesize information from your private documents securely and efficiently.
                </p>
            </div>
        </div>
      </div>

      {/* Feature Cards Strip */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         {[
            { icon: BookOpen, title: 'Doc Analysis', desc: 'PDF, DOCX, TXT support', color: 'text-blue-400' },
            { icon: MessageSquare, title: 'Context Chat', desc: 'History-aware responses', color: 'text-purple-400' },
            { icon: Brain, title: 'Smart Tools', desc: 'Quizzes & Flashcards', color: 'text-pink-400' },
            { icon: Zap, title: 'Instant Briefs', desc: 'Summaries in seconds', color: 'text-yellow-400' }
         ].map((item, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-5 flex flex-col justify-center items-center text-center hover:bg-white/5 group">
                <div className={`mb-3 p-3 rounded-xl bg-slate-800/50 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-100 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
         ))}
      </div>
    </div>
  );
};