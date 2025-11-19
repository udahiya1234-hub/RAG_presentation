import React, { useState, useEffect } from 'react';
import { Target, Globe, BookOpen, MessageSquare, Brain, Zap } from './icons';

// Typewriter effect component for engagement
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
    }, 15); // Speed of typing
    return () => clearInterval(intervalId);
  }, [text, started]);

  return (
    <span className="inline">
      {displayedText}
      <span className="animate-pulse text-blue-400 font-bold">|</span>
    </span>
  );
};

export const OverviewTab: React.FC = () => {
  const stats = [
    { value: '8', label: 'Core Features', color: 'bg-blue-500' },
    { value: '3', label: 'File Formats', color: 'bg-purple-500' },
    { value: '<2s', label: 'Latency', color: 'bg-green-500' },
    { value: '1.5k', label: 'Lines of Code', color: 'bg-orange-500' }
  ];

  const features = [
    { icon: BookOpen, title: 'Doc Analyzer', desc: 'Processes PDF, DOCX, TXT' },
    { icon: MessageSquare, title: 'Q&A Chat', desc: 'Context-aware AI' },
    { icon: Brain, title: 'Learning Tools', desc: 'Quizzes & Flashcards' },
    { icon: Zap, title: 'Summarizer', desc: 'Instant Insights' }
  ];

  const descriptionText = "Build a Retrieval-Augmented Generation (RAG) chatbot that answers domain-specific questions by retrieving info from a custom knowledge base. This demonstrates mastery of vector databases, embeddings, and LLM integration.";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Hero Card */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-110 transform">
                <Target className="w-48 h-48 text-blue-400" />
            </div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="p-2 bg-blue-500 rounded-lg shadow-lg shadow-blue-500/20"><Target className="w-6 h-6 text-white" /></span>
                    Project Objective
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl min-h-[80px]">
                   <TypewriterText text={descriptionText} delay={300} />
                </p>
            </div>
        </div>

        {/* Stats Grid (Bento Style) */}
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 flex flex-col justify-center items-center text-center hover:bg-white/5 transition-all duration-300 animate-pop-in hover:scale-105 border border-white/5 hover:border-white/20" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className={`w-3 h-3 rounded-full ${stat.color} mb-3 shadow-[0_0_15px_currentColor] animate-pulse`}></div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Business Context */}
        <div className="md:col-span-1 glass-card rounded-2xl p-6 border-l-4 border-l-green-500 bg-gradient-to-br from-green-900/20 to-transparent hover:bg-green-900/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-400" />
                Business Context
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                Simulates a real-world scenario for enterprises needing intelligent Q&A for documentation. Eliminates manual search and provides grounded answers.
            </p>
        </div>

        {/* Features Strip */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {features.map((item, idx) => (
                <div key={idx} className="glass-card rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all duration-300 group cursor-default hover:-translate-y-1">
                    <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-blue-600 transition-colors duration-300 shadow-lg">
                        <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-200 group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">{item.desc}</p>
                    </div>
                </div>
             ))}
        </div>
      </div>
    </div>
  );
};