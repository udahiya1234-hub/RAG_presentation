import React, { useState, useEffect } from 'react';
import type { Tab } from './types';
import { Target, AlertCircle, Database, Zap, Code, TrendingUp, Users } from './components/icons';
import { OverviewTab } from './components/OverviewTab';
import { ProblemTab } from './components/ProblemTab';
import { ArchitectureTab } from './components/ArchitectureTab';
import { FeaturesTab } from './components/FeaturesTab';
import { TechStackTab } from './components/TechStackTab';
import { MetricsTab } from './components/MetricsTab';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs: Tab[] = [
    { id: 'overview', label: 'Project Overview', icon: Target },
    { id: 'problem', label: 'Problem & Solution', icon: AlertCircle },
    { id: 'architecture', label: 'Architecture', icon: Database },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'tech', label: 'Tech Stack', icon: Code },
    { id: 'metrics', label: 'Metrics', icon: TrendingUp }
  ];
  
  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'problem': return <ProblemTab />;
      case 'architecture': return <ArchitectureTab />;
      case 'features': return <FeaturesTab />;
      case 'tech': return <TechStackTab />;
      case 'metrics': return <MetricsTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 sm:p-8 font-sans text-gray-800">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }

        @keyframes fade-in-fast {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-fast { animation: fade-in-fast 0.3s ease-out forwards; }

        @keyframes slide-in-up {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up { animation: slide-in-up 0.6s ease-out forwards; opacity: 0; animation-fill-mode: forwards; }

        @keyframes pop-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in { animation: pop-in 0.5s ease-out forwards; opacity: 0; animation-fill-mode: forwards; }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
          animation: shimmer 2.5s infinite;
        }
        
        @keyframes flow-down {
          0% { transform: translateY(-10%); }
          50% { transform: translateY(10%); }
          100% { transform: translateY(-10%); }
        }
        .animate-flow-down { animation: flow-down 1.5s ease-in-out infinite; }
        
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <header className={`relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-6 sm:p-8 mb-8 border-t-4 border-yellow-400 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">
                  NotebookLM-Style RAG System
                </h1>
                <p className="text-lg sm:text-2xl text-blue-100">
                  AI-Powered Business Intelligence Platform
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                    Capstone Project
                  </span>
                  <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                    Data Science with GenAI
                  </span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-sm text-blue-200 mb-1">Team Size</div>
                <div className="text-4xl font-bold text-white flex items-center gap-2">
                  <Users className="w-10 h-10" />2 Students
                </div>
                <div className="text-sm text-blue-200 mt-2">November 2025</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 animate-shimmer" style={{ zIndex: 5 }}></div>
        </header>

        <nav className="bg-white rounded-xl shadow-2xl mb-8 p-2">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 sm:px-6 rounded-lg font-medium transition-all whitespace-nowrap transform hover:scale-105 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </nav>

        <main className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
