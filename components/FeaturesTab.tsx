import React from 'react';

export const FeaturesTab: React.FC = () => {
  const features = [
    { icon: '📋', title: 'Auto Summary', desc: '2-3 paragraphs in <2s' },
    { icon: '💡', title: 'Key Insights', desc: 'Top 5 ranked findings' },
    { icon: '🧠', title: 'Mind Maps', desc: 'Hierarchical visualization' },
    { icon: '❓', title: 'Smart Quiz', desc: 'Auto-generated MCQs' },
    { icon: '📇', title: 'Flashcards', desc: 'Instant review decks' },
    { icon: '🎤', title: 'Audio Summary', desc: 'Text-to-Speech MP3' }
  ];

  const comparisonData = [
    { feature: 'Document Grounding', system: 'Yes', chatgpt: 'No', systemStatus: true },
    { feature: 'Learning Tools', system: '6 Tools', chatgpt: 'Limited', systemStatus: true },
    { feature: 'Data Privacy', system: 'Local', chatgpt: 'Cloud', systemStatus: true },
    { feature: 'Cost', system: 'Free', chatgpt: '$20/mo', systemStatus: true }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <div key={idx} className="glass-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{feature.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="bg-white/5 p-4 border-b border-white/10">
            <h3 className="font-bold text-white">System vs. Generic AI</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="p-4 font-medium">Feature</th>
                <th className="p-4 font-medium text-blue-400">Our System</th>
                <th className="p-4 font-medium">Standard ChatGPT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row, idx) => (
                 <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 text-slate-300">{row.feature}</td>
                  <td className="p-4 font-bold text-blue-400 shadow-[inset_2px_0_0_0_rgba(96,165,250,0.5)]">{row.system}</td>
                  <td className="p-4 text-slate-500">{row.chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};