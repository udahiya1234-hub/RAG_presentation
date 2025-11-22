import React from 'react';
import { CheckCircle, XCircle, Zap } from './icons';

export const FeaturesTab: React.FC = () => {
  const features = [
    { icon: '📝', title: 'Auto Summary', desc: 'Concise 2-3 paragraph briefs', image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=500&auto=format&fit=crop' },
    { icon: '🎯', title: 'Key Insights', desc: 'Top 5 ranked findings', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop' },
    { icon: '🧠', title: 'Mind Maps', desc: 'Hierarchical visualization', image: 'https://images.unsplash.com/photo-1557318041-1ce374d55ebf?q=80&w=500&auto=format&fit=crop' },
    { icon: '⚡', title: 'Smart Quiz', desc: 'Auto-generated MCQs', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop' },
    { icon: '🃏', title: 'Flashcards', desc: 'Spaced repetition decks', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=500&auto=format&fit=crop' },
    { icon: '🎧', title: 'Audio Brief', desc: 'Text-to-Speech MP3', image: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6b5?q=80&w=500&auto=format&fit=crop' }
  ];

  return (
    <div className="space-y-12">
      
      {/* Feature Grid with Images */}
      <div>
          <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-indigo-500">System Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-0 overflow-hidden group relative h-48 transition-all duration-500 hover:h-48">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-6 h-full flex flex-col justify-end group-hover:translate-y-0 transition-transform">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                         <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 font-light group-hover:text-slate-200 transition-colors">{feature.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
        <div className="bg-indigo-900/20 p-6 border-b border-white/5 flex justify-between items-center backdrop-blur-md">
            <div>
                <h3 className="font-bold text-xl text-white">Why Choose This Architecture?</h3>
                <p className="text-sm text-indigo-200/70">Benchmark vs Standard LLMs</p>
            </div>
            <div className="hidden sm:block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase">
                Market Leader
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-950/50 text-slate-400 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-6 font-medium">Feature Capability</th>
                <th className="p-6 font-medium text-indigo-400">Our RAG System</th>
                <th className="p-6 font-medium text-slate-600">Standard GPT-4</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                  { feature: 'Private Doc Access', system: true, chatgpt: false },
                  { feature: 'Custom Learning Tools', system: true, chatgpt: 'Limited' },
                  { feature: 'Zero Data Leakage', system: true, chatgpt: false },
                  { feature: 'Source Citations', system: true, chatgpt: false }
              ].map((row, idx) => (
                 <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-slate-200">{row.feature}</td>
                  <td className="p-6">
                      <div className="flex items-center gap-2 text-indigo-400 font-bold">
                          <CheckCircle className="w-5 h-5" /> <span>Yes</span>
                      </div>
                  </td>
                  <td className="p-6">
                       {row.chatgpt === false ? (
                          <div className="flex items-center gap-2 text-slate-600">
                              <XCircle className="w-5 h-5" /> <span>No</span>
                          </div>
                      ) : (
                          <span className="text-slate-500">{row.chatgpt}</span>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};