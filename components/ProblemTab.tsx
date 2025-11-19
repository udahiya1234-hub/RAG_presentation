import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from './icons';

const AnimatedNumber: React.FC<{ value: number; duration?: number; className?: string }> = ({ value, duration = 1500, className }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      if (startTime === undefined) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const animatedVal = Math.floor(progress * value);
      setCurrentValue(animatedVal);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span className={className}>{currentValue}</span>;
};

export const ProblemTab: React.FC = () => {
  const challenges = [
    { title: 'Information Overload', desc: 'Extracting insights from hundreds of pages is impossible manually.' },
    { title: 'Hallucinations', desc: 'Standard LLMs make up facts without source grounding.' },
    { title: 'Scattered Data', desc: 'Knowledge is buried in unconnected PDF and Doc files.' }
  ];

  const solutions = [
    { title: 'Instant Analysis', desc: 'GROQ-powered LLM analyzes documents in seconds.' },
    { title: 'Grounded Truth', desc: 'Answers are strictly based on your provided documents.' },
    { title: 'Centralized Hub', desc: 'Upload everything to one unified knowledge base.' }
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Problem Section */}
        <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/20 rounded-full"><AlertCircle className="w-6 h-6 text-red-400" /></div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
            </div>
            {challenges.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border-l-2 border-l-red-500/50 hover:bg-red-500/10 transition-colors duration-300">
                    <h4 className="text-red-200 font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Solution Section */}
         <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-full"><CheckCircle className="w-6 h-6 text-emerald-400" /></div>
                <h2 className="text-2xl font-bold text-white">The Solution</h2>
            </div>
            {solutions.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-xl border-l-2 border-l-emerald-500/50 hover:bg-emerald-500/10 transition-colors duration-300">
                    <h4 className="text-emerald-200 font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Impact Banner */}
      <div className="mt-8 glass-card rounded-2xl p-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30">
        <h3 className="text-center text-slate-300 uppercase tracking-widest text-sm mb-8">Quantifiable Impact</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center divide-x divide-white/10">
          <div className="group">
            <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform inline-block">
                <AnimatedNumber value={10} />x
            </div>
            <div className="text-blue-300 text-sm font-medium">Faster Search</div>
          </div>
          <div className="group">
            <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform inline-block">
                $<AnimatedNumber value={0} />
            </div>
            <div className="text-blue-300 text-sm font-medium">Operating Cost</div>
          </div>
          <div className="group">
            <div className="text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform inline-block">
                <AnimatedNumber value={100} />%
            </div>
            <div className="text-blue-300 text-sm font-medium">Source Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
};