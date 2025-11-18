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
    { icon: '📄', title: 'Manual Processing', desc: 'Handling large document volumes manually is time-consuming and error-prone' },
    { icon: '❌', title: 'Information Overload', desc: 'Extracting key insights from hundreds of pages is difficult' },
    { icon: '🔍', title: 'Slow Search', desc: 'Users need quick, accurate answers but traditional search is inadequate' },
    { icon: '📚', title: 'Scattered Knowledge', desc: 'Learning materials and documentation are unorganized across multiple sources' },
    { icon: '⏱️', title: 'No AI Analysis', desc: 'Traditional methods lack intelligent analysis and contextual understanding' },
    { icon: '💰', title: 'High Costs', desc: 'Enterprise solutions are expensive and require subscriptions' }
  ];

  const solutions = [
    { icon: '✅', title: 'Upload Documents', desc: 'Supports PDF, DOCX, TXT with fast PyMuPDF extraction' },
    { icon: '🤖', title: 'AI Analysis', desc: 'GROQ-powered LLM analyzes and extracts insights automatically' },
    { icon: '💬', title: 'Instant Answers', desc: 'Get accurate, grounded responses with source citations' },
    { icon: '📖', title: 'Learning Tools', desc: 'Auto-generate quizzes, flashcards, mind maps, and summaries' },
    { icon: '🎨', title: 'User-Friendly UI', desc: 'Clean Streamlit interface with dark/light mode support' },
    { icon: '🆓', title: 'Cost-Effective', desc: 'Open source, self-hosted, free GROQ tier available' }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-6">
        Problem Statement & Solution
      </h2>
      
      <div>
        <h3 className="text-3xl font-bold text-red-600 mb-4 flex items-center gap-3">
          <AlertCircle className="w-8 h-8 animate-pulse" />
          The Challenge
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {challenges.map((item, idx) => (
            <div key={idx} className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-pop-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-green-600 mb-4 flex items-center gap-3">
          <CheckCircle className="w-8 h-8" />
          Our Solution: RAG System
        </h3>
        <div className="space-y-4">
          {solutions.map((item, idx) => (
            <div key={idx} className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500 flex items-start gap-4 hover:shadow-xl transition-all duration-300 transform hover:translate-x-2 animate-slide-in-up" style={{ animationDelay: `${300 + idx * 100}ms` }}>
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white shadow-2xl transition-all duration-300 animate-pop-in" style={{ animationDelay: '800ms' }}>
        <h3 className="text-3xl font-bold mb-4">Value Proposition</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2"><AnimatedNumber value={10} />x</div>
            <div className="text-blue-100">Faster than manual search</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2">$<AnimatedNumber value={0} /></div>
            <div className="text-blue-100">Cost with free tier</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-6xl font-bold mb-2"><AnimatedNumber value={100} />%</div>
            <div className="text-blue-100">Grounded answers</div>
          </div>
        </div>
      </div>
    </div>
  );
};
