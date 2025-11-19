import React from 'react';
import { Database, CheckCircle, Code, Zap } from './icons';

export const ArchitectureTab: React.FC = () => (
  <div className="space-y-8">
    {/* Flow Diagram */}
    <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="relative z-10 space-y-8">
        {/* User Input */}
        <div className="flex justify-center animate-pop-in">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.5)] uppercase hover:scale-105 transition-transform cursor-default">
            User Uploads Document
          </div>
        </div>
        
        {/* Animated Data Flow Down */}
        <div className="flex justify-center">
          <div className="w-px h-16 bg-[linear-gradient(to_bottom,transparent_50%,#3b82f6_50%)] bg-[length:1px_20px] animate-flow-vertical opacity-70"></div>
        </div>
        
        {/* Processing Pipeline Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card bg-white/5 rounded-xl p-6 border-t-4 border-purple-500 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
            <div className="bg-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <span className="font-bold text-purple-400">01</span>
            </div>
            <h4 className="font-bold text-white mb-2 text-lg">Extraction</h4>
            <p className="text-sm text-slate-400">PyMuPDF parses PDF binary streams into raw text, stripping formatting.</p>
          </div>
          
          <div className="glass-card bg-white/5 rounded-xl p-6 border-t-4 border-emerald-500 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
             <div className="bg-emerald-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="font-bold text-emerald-400">02</span>
            </div>
            <h4 className="font-bold text-white mb-2 text-lg">Chunking</h4>
            <p className="text-sm text-slate-400">Splits text into 1000-char overlapping windows for context retention.</p>
          </div>
          
          <div className="glass-card bg-white/5 rounded-xl p-6 border-t-4 border-blue-500 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
             <div className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <span className="font-bold text-blue-400">03</span>
            </div>
            <h4 className="font-bold text-white mb-2 text-lg">Vectorization</h4>
            <p className="text-sm text-slate-400">TF-IDF transforms text chunks into numerical vectors for math comparison.</p>
          </div>
        </div>
        
        {/* Animated Data Flow Down */}
         <div className="flex justify-center">
           <div className="w-px h-16 bg-[linear-gradient(to_bottom,transparent_50%,#64748b_50%)] bg-[length:1px_20px] animate-flow-vertical opacity-50"></div>
        </div>
        
        {/* Output */}
        <div className="text-center animate-pop-in" style={{ animationDelay: '500ms' }}>
          <div className="inline-block glass-card px-8 py-3 rounded-xl font-bold text-white border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
            <span className="text-emerald-400 mr-2 inline-block animate-ping relative z-10">●</span> 
            <span className="relative z-10">Ready For Queries</span>
          </div>
        </div>
      </div>
    </div>

    {/* Component Breakdown */}
    <div className="grid md:grid-cols-3 gap-6">
      <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-blue-500/30">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg"><Database className="w-5 h-5 text-blue-400" /></div>
            <h3 className="text-lg font-bold text-white">RAG Engine</h3>
        </div>
        <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Vector Database</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Document Pipeline</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>Similarity Search</li>
        </ul>
      </div>

       <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-green-500/30">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/20 rounded-lg"><Code className="w-5 h-5 text-green-400" /></div>
            <h3 className="text-lg font-bold text-white">Frontend UI</h3>
        </div>
        <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Streamlit Interface</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Chat History</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>File Uploader</li>
        </ul>
      </div>

       <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-purple-500/30">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg"><Zap className="w-5 h-5 text-purple-400" /></div>
            <h3 className="text-lg font-bold text-white">Integrations</h3>
        </div>
        <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>GROQ API (LLM)</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>PyMuPDF</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>Scikit-Learn</li>
        </ul>
      </div>
    </div>
  </div>
);