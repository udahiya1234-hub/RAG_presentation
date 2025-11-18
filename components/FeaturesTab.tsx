import React from 'react';

export const FeaturesTab: React.FC = () => {
  const features = [
    { icon: '📋', title: 'Document Summary', desc: 'Auto-generates 2-3 paragraph summaries in under 2 seconds', color: 'bg-blue-50 border-blue-500' },
    { icon: '💡', title: 'Key Insights', desc: 'Extracts 5 major insights ranked by importance', color: 'bg-green-50 border-green-500' },
    { icon: '📑', title: 'Table of Contents', desc: 'Auto-generates 5-8 sections mapping document structure', color: 'bg-purple-50 border-purple-500' },
    { icon: '🧠', title: 'Mind Map Generator', desc: '3-4 level hierarchical visualization with 8-12 nodes', color: 'bg-orange-50 border-orange-500' },
    { icon: '❓', title: 'Smart Quiz', desc: 'Generates 3-10 MCQs with instant feedback and explanations', color: 'bg-red-50 border-red-500' },
    { icon: '📇', title: 'Flashcards', desc: 'Creates 5-20 cards in grid layout for quick review', color: 'bg-indigo-50 border-indigo-500' },
    { icon: '💬', title: 'Document Chat', desc: 'Context-aware Q&A with source citations', color: 'bg-teal-50 border-teal-500' },
    { icon: '🎤', title: 'Audio Summary', desc: 'Text-to-speech MP3 generation (2-3 minutes)', color: 'bg-pink-50 border-pink-500' }
  ];

  const comparisonData = [
    { feature: 'Document Grounding', system: '✓ Yes', chatgpt: '✗ No', googledocs: '✓ Yes', systemColor: 'text-green-600', chatgptColor: 'text-red-600', googleDocsColor: 'text-green-600' },
    { feature: 'Learning Tools', system: '✓ 6 Tools', chatgpt: '✗ Limited', googledocs: '✗ No', systemColor: 'text-green-600', chatgptColor: 'text-red-600', googleDocsColor: 'text-red-600' },
    { feature: 'Open Source', system: '✓ Yes', chatgpt: '✗ No', googledocs: '✗ No', systemColor: 'text-green-600', chatgptColor: 'text-red-600', googleDocsColor: 'text-red-600' },
    { feature: 'Cost', system: 'Free', chatgpt: '$20/mo', googledocs: '$10/mo', systemColor: 'text-green-600', chatgptColor: 'text-orange-600', googleDocsColor: 'text-orange-600' },
    { feature: 'Response Time', system: '1-2s', chatgpt: '2-3s', googledocs: '3-5s', systemColor: 'text-green-600', chatgptColor: 'text-gray-600', googleDocsColor: 'text-gray-600' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
        Core Features
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className={`group ${feature.color} rounded-xl p-6 border-l-4 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-pop-in`} style={{ animationDelay: `${idx * 100}ms` }}>
            <div className="flex items-start gap-4">
              <div className="text-5xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">{feature.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-300 overflow-hidden shadow-xl animate-slide-in-up" style={{ animationDelay: `${features.length * 100}ms` }}>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h3 className="text-2xl font-bold text-white">Feature Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 border-b-2 border-gray-400">
                <th className="text-left p-4 font-bold">Feature</th>
                <th className="text-left p-4 font-bold">Our System</th>
                <th className="text-left p-4 font-bold">ChatGPT</th>
                <th className="text-left p-4 font-bold">Google Docs AI</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {comparisonData.map((row, idx) => (
                 <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50 transition-colors animate-slide-in-up" style={{ animationDelay: `${(features.length + idx) * 100}ms` }}>
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className={`p-4 ${row.systemColor} font-bold text-lg`}>{row.system}</td>
                  <td className={`p-4 ${row.chatgptColor} font-bold`}>{row.chatgpt}</td>
                  <td className={`p-4 ${row.googleDocsColor} font-bold`}>{row.googledocs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
