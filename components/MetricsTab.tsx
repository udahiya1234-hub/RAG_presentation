import React, { useState, useEffect } from 'react';
import { Clock, Cpu, Activity, BarChart3, Code, HardDrive, TrendingUp, Zap } from './icons';

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
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsChartVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const performanceData = [
    { name: 'PDF Extraction', time: 1000, color: 'bg-indigo-500', maxTime: 3000 },
    { name: 'Text Chunking', time: 500, color: 'bg-cyan-500', maxTime: 3000 },
    { name: 'Vector Creation', time: 200, color: 'bg-purple-500', maxTime: 3000 },
    { name: 'Query Retrieval', time: 100, color: 'bg-emerald-500', maxTime: 3000 },
    { name: 'LLM Response', time: 2500, color: 'bg-pink-500', maxTime: 3000 },
  ];
  
  return (
    <div className="space-y-8">
      {/* Top Metrics Row */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
            { icon: Clock, title: 'Latency', value: '1.8', unit: 's', desc: 'End-to-end response', color: 'indigo' },
            { icon: Cpu, title: 'Throughput', value: '450', unit: 't/s', desc: 'Token generation', color: 'cyan' },
            { icon: Zap, title: 'Efficiency', value: '99', unit: '%', desc: 'Cache hit rate', color: 'purple' }
        ].map((stat, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
                <div className={`absolute right-[-20px] top-[-20px] p-4 opacity-10 group-hover:opacity-20 transition-opacity text-${stat.color}-400`}>
                    <stat.icon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                    <div className={`flex items-center gap-2 text-${stat.color}-400 text-xs font-bold uppercase tracking-wider mb-3`}>
                        <stat.icon className="w-4 h-4" /> {stat.title}
                    </div>
                    <div className="text-5xl font-bold text-white mb-1 tracking-tight flex items-baseline">
                        {stat.value}<span className="text-2xl text-slate-500 ml-1">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-slate-400">{stat.desc}</div>
                </div>
            </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-8 glass-panel rounded-3xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-slate-800 rounded-lg"><BarChart3 className="w-5 h-5 text-indigo-400" /></div>
                Latency Breakdown (ms)
            </h3>
            <div className="space-y-6">
            {performanceData.map((item, idx) => (
                <div key={idx} className="group cursor-default">
                    <div className="flex items-center justify-between mb-2 text-sm">
                        <span className="text-slate-300 font-medium">{item.name}</span>
                        <span className="text-slate-400 font-mono">{item.time}ms</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div 
                            className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out relative shadow-[0_0_10px_rgba(0,0,0,0.3)] group-hover:opacity-100 opacity-80`} 
                            style={{ 
                                width: isChartVisible ? `${(item.time / item.maxTime) * 100}%` : '0%',
                            }}
                        >
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* Stats Column */}
        <div className="lg:col-span-4 space-y-6">
            {/* Code Stats */}
             <div className="glass-panel rounded-3xl p-8 bg-gradient-to-b from-slate-800/50 to-transparent">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <Code className="w-5 h-5 text-orange-400" /> Code Metrics
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-slate-400 text-sm">Lines of Code</span>
                        <span className="text-white font-mono font-bold">1,542</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <span className="text-slate-400 text-sm">Functions</span>
                        <span className="text-white font-mono font-bold">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Test Coverage</span>
                        <span className="text-green-400 font-mono font-bold">94%</span>
                    </div>
                </div>
            </div>
            
            {/* Storage Card */}
             <div className="glass-panel rounded-3xl p-8 bg-gradient-to-b from-slate-800/50 to-transparent">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-blue-400" /> Resources
                </h3>
                <div className="w-full bg-slate-800 rounded-full h-32 w-32 mx-auto border-4 border-slate-700 relative flex items-center justify-center mb-4">
                     <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent rotate-45"></div>
                     <div className="text-center">
                         <div className="text-2xl font-bold text-white">2GB</div>
                         <div className="text-[10px] text-slate-500">RAM</div>
                     </div>
                </div>
                 <div className="text-center text-xs text-slate-400">
                    Optimized for low-memory environments
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};