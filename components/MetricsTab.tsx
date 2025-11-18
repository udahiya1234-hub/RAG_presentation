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
    { name: 'PDF Extraction (10 pages)', time: 1000, color: 'bg-blue-500', maxTime: 5000 },
    { name: 'Text Chunking', time: 500, color: 'bg-green-500', maxTime: 5000 },
    { name: 'Vector Creation', time: 200, color: 'bg-purple-500', maxTime: 5000 },
    { name: 'Query Retrieval', time: 100, color: 'bg-orange-500', maxTime: 5000 },
    { name: 'LLM Response', time: 2500, color: 'bg-red-500', maxTime: 5000 },
    { name: 'Summary Generation', time: 2000, color: 'bg-indigo-500', maxTime: 5000 },
    { name: 'Quiz Generation', time: 4000, color: 'bg-pink-500', maxTime: 5000 },
    { name: 'Mind Map Creation', time: 2500, color: 'bg-teal-500', maxTime: 5000 }
  ];
  
  const benchmarks = [
    { op: 'PDF Extraction (10 pages)', time: '~1s', note: 'PyMuPDF processing', color: 'hover:bg-blue-50' },
    { op: 'Text Chunking', time: '~500ms', note: '1000-char chunks with overlap', color: 'hover:bg-green-50' },
    { op: 'Vector Creation', time: '~200ms', note: 'TF-IDF vectorization', color: 'hover:bg-purple-50' },
    { op: 'Query Retrieval', time: '~100ms', note: 'Top-5 chunks via cosine similarity', color: 'hover:bg-orange-50' },
    { op: 'LLM Response', time: '~2-3s', note: 'GROQ API call + generation', color: 'hover:bg-red-50' },
    { op: 'Summary Generation', time: '~2s', note: 'Full document summary', color: 'hover:bg-indigo-50' },
    { op: 'Quiz Generation (5 Qs)', time: '~3-5s', note: 'MCQ with explanations', color: 'hover:bg-pink-50' },
    { op: 'Mind Map Creation', time: '~2-3s', note: 'Hierarchical structure', color: 'hover:bg-teal-50' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
        Performance Metrics & Visualizations
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '100ms' }}><Clock className="w-12 h-12 mb-4" /><div className="text-6xl font-bold mb-2">1-2s</div><div className="text-green-100 text-lg">Query Response Time</div><div className="mt-4 text-sm text-green-100">Including LLM inference</div></div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '250ms' }}><Cpu className="w-12 h-12 mb-4" /><div className="text-6xl font-bold mb-2"><AnimatedNumber value={5} prefix="<" suffix="s"/></div><div className="text-blue-100 text-lg">Document Processing</div><div className="mt-4 text-sm text-blue-100">Full pipeline end-to-end</div></div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '400ms' }}><Activity className="w-12 h-12 mb-4" /><div className="text-6xl font-bold mb-2"><AnimatedNumber value={100} suffix="ms"/></div><div className="text-purple-100 text-lg">Retrieval Speed</div><div className="mt-4 text-sm text-purple-100">Cosine similarity search</div></div>
      </div>

      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-xl animate-slide-in-up" style={{ animationDelay: '550ms' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><BarChart3 className="w-7 h-7 text-blue-600" />Operation Performance (milliseconds)</h3>
        <div className="space-y-4">
          {performanceData.map((item, idx) => (
            <div key={idx} onMouseEnter={() => setHoveredBar(idx)} onMouseLeave={() => setHoveredBar(null)}>
              <div className="flex items-center justify-between mb-1"><span className="text-sm font-semibold text-gray-700">{item.name}</span><span className="text-sm font-bold text-gray-900">{item.time}ms</span></div>
              <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
                <div className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3 text-white font-bold text-xs shadow-lg`} style={{ width: isChartVisible ? `${(item.time / item.maxTime) * 100}%` : '0%' }}>
                  {hoveredBar === idx && <span className="animate-fade-in-fast">{item.time}ms</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-xl animate-slide-in-up" style={{ animationDelay: '700ms' }}>
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4"><h3 className="text-2xl font-bold text-white">Detailed Operation Benchmarks</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="bg-gray-100 border-b border-gray-300"><th className="text-left p-4 font-bold">Operation</th><th className="text-left p-4 font-bold">Time</th><th className="text-left p-4 font-bold">Notes</th></tr></thead>
            <tbody>
              {benchmarks.map((row, idx) => (
                <tr key={idx} className={`border-b border-gray-100 ${row.color} transition-colors duration-200`}><td className="p-4 font-medium">{row.op}</td><td className="p-4 text-blue-600 font-bold text-lg">{row.time}</td><td className="p-4 text-gray-600 text-sm">{row.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-300 hover:shadow-2xl transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '850ms' }}><h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2"><Code className="w-6 h-6" />Code Statistics</h3><div className="space-y-3"><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Total Lines of Code</span><span className="font-bold text-orange-600 text-2xl">~1,500</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Python Files</span><span className="font-bold text-orange-600 text-2xl">3</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Classes</span><span className="font-bold text-orange-600 text-2xl">4</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Functions/Methods</span><span className="font-bold text-orange-600 text-2xl">20+</span></div></div></div>
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-2 border-teal-300 hover:shadow-2xl transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '1000ms' }}><h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2"><HardDrive className="w-6 h-6" />System Capabilities</h3><div className="space-y-3"><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Supported Formats</span><span className="font-bold text-teal-600 text-2xl">3</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Max Document Size</span><span className="font-bold text-teal-600 text-xl">Unlimited</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Concurrent Users</span><span className="font-bold text-teal-600 text-2xl">Single</span></div><div className="flex justify-between items-center p-3 bg-white rounded-lg hover:scale-105 transition-transform"><span className="text-gray-700">Storage Type</span><span className="font-bold text-teal-600 text-xl">In-Memory</span></div></div></div>
      </div>
      
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '1150ms' }}>
        <h3 className="text-3xl font-bold mb-6 flex items-center gap-3"><TrendingUp className="w-8 h-8" />Scalability Analysis</h3>
        <div className="grid md:grid-cols-3 gap-6"><div className="bg-gray-800 rounded-lg p-6 hover:scale-110 transition-transform duration-300"><div className="text-gray-400 text-sm mb-2">Single Document</div><div className="text-5xl font-bold mb-2">100K+</div><div className="text-gray-300">pages supported</div></div><div className="bg-gray-800 rounded-lg p-6 hover:scale-110 transition-transform duration-300"><div className="text-gray-400 text-sm mb-2">Memory Usage</div><div className="text-5xl font-bold mb-2">2-4GB</div><div className="text-gray-300">typical RAM</div></div><div className="bg-gray-800 rounded-lg p-6 hover:scale-110 transition-transform duration-300"><div className="text-gray-400 text-sm mb-2">Query Throughput</div><div className="text-5xl font-bold mb-2">30+</div><div className="text-gray-300">queries/minute</div></div></div>
      </div>
    </div>
  );
};
