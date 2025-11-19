import React, { useState, useEffect } from 'react';
import { Clock, Cpu, Activity, BarChart3, Code, HardDrive, TrendingUp } from './icons';

const AnimatedNumber: React.FC<{
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}> = ({ value, duration = 1500, className, prefix = '', suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCurrentValue(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span className={className}>{prefix}{currentValue}{suffix}</span>;
};

export const MetricsTab: React.FC = () => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsChartVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const performanceData = [
    { name: 'PDF Extraction', time: 1000, color: 'bg-blue-500', maxTime: 5000 },
    { name: 'Text Chunking', time: 500, color: 'bg-emerald-500', maxTime: 5000 },
    { name: 'Vector Creation', time: 200, color: 'bg-purple-500', maxTime: 5000 },
    { name: 'Query Retrieval', time: 100, color: 'bg-orange-500', maxTime: 5000 },
    { name: 'LLM Response', time: 2500, color: 'bg-pink-500', maxTime: 5000 },
  ];
  
  return (
    <div className="space-y-6">
      {/* Top Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Clock className="w-24 h-24" /></div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Query Latency</div>
            <div className="text-4xl font-bold text-white mb-2 text-shadow-glow">1.8s</div>
            <div className="text-xs text-emerald-400 flex items-center gap-1">
                <Activity className="w-3 h-3" /> Optimal Performance
            </div>
        </div>

        <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><Cpu className="w-24 h-24" /></div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Processing Time</div>
            <div className="text-4xl font-bold text-white mb-2"><AnimatedNumber value={5} prefix="<" suffix="s"/></div>
            <div className="text-xs text-blue-400">End-to-end Pipeline</div>
        </div>

        <div className="glass-card rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:scale-110 transition-transform"><HardDrive className="w-24 h-24" /></div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Retrieval Speed</div>
            <div className="text-4xl font-bold text-white mb-2"><AnimatedNumber value={100} suffix="ms"/></div>
            <div className="text-xs text-purple-400">Cosine Similarity</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="glass-card rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Latency Breakdown (ms)
            </h3>
            <div className="space-y-5">
            {performanceData.map((item, idx) => (
                <div key={idx} onMouseEnter={() => setHoveredBar(idx)} onMouseLeave={() => setHoveredBar(null)} className="group">
                    <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-slate-300 font-medium">{item.name}</span>
                        <span className="text-slate-400 font-mono">{item.time}ms</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div 
                            className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out relative`} 
                            style={{ 
                                width: isChartVisible ? `${(item.time / item.maxTime) * 100}%` : '0%',
                                boxShadow: hoveredBar === idx ? '0 0 15px currentColor' : 'none'
                            }}
                        >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* Code Stats & Scalability */}
        <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-orange-400" /> Codebase Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">~1,500</div>
                        <div className="text-xs text-slate-500">Lines of Code</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">3</div>
                        <div className="text-xs text-slate-500">Core Modules</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">O(n)</div>
                        <div className="text-xs text-slate-500">Complexity</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-xs text-slate-500">Python</div>
                    </div>
                </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" /> Scalability
                </h3>
                 <div className="flex justify-between items-end mt-4">
                    <div>
                        <div className="text-slate-400 text-sm mb-1">Max Doc Size</div>
                        <div className="text-2xl font-bold text-white">Uncapped</div>
                    </div>
                    <div className="text-right">
                        <div className="text-slate-400 text-sm mb-1">Memory Footprint</div>
                        <div className="text-2xl font-bold text-white">~2GB RAM</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};