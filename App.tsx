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
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'problem', label: 'Problem', icon: AlertCircle },
    { id: 'architecture', label: 'Architecture', icon: Database },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'tech', label: 'Stack', icon: Code },
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
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-sans text-slate-100 selection:bg-blue-500/30">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/30 rounded-full blur-[128px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px] animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; opacity: 0; }

        @keyframes flow-vertical {
           0% { background-position: 0 0; }
           100% { background-position: 0 20px; }
        }
        .animate-flow-vertical {
           background-size: 100% 20px;
           animation: flow-vertical 1s linear infinite;
        }

        @keyframes scan-beam {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
        }
        .animate-scan-beam {
            animation: scan-beam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Glass Card Utility */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-8 flex flex-col min-h-screen">
        
        {/* Header Section */}
        <header className={`mb-8 text-center sm:text-left transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row justify-between items-end gap-6 border-b border-white/10 pb-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 hover:bg-blue-500/20 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Capstone Project
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200 mb-2 drop-shadow-sm">
                        RAG Dashboard
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Interactive insights for the NotebookLM-Style Retrieval Augmented Generation System.
                    </p>
                </div>
                
                <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="text-right">
                        <div className="text-xs text-slate-400 uppercase tracking-widest">Team Size</div>
                        <div className="text-xl font-bold text-white">2 Developers</div>
                    </div>
                    <div className="h-10 w-px bg-white/10"></div>
                    <div className="text-right">
                        <div className="text-xs text-slate-400 uppercase tracking-widest">Timeline</div>
                        <div className="text-xl font-bold text-white">Nov 2025</div>
                    </div>
                </div>
            </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-4 z-50 mb-8 glass-card rounded-2xl p-2 overflow-x-auto">
          <div className="flex justify-between sm:justify-start gap-1 min-w-max">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.5)] -z-10 transition-all duration-300"></div>
                  )}
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow glass-card rounded-3xl p-6 sm:p-8 min-h-[600px] transition-all duration-500">
            <div key={activeTab} className="animate-fade-in-up">
                {renderContent()}
            </div>
        </main>
      </div>
    </div>
  );
};

export default App;