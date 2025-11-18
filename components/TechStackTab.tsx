import React from 'react';
import { CheckCircle } from './icons';

export const TechStackTab: React.FC = () => {
  const languages = [
    { name: 'Python 3.8+', purpose: 'Core programming language', version: '3.8+' },
    { name: 'Streamlit', purpose: 'Web UI framework', version: '1.32.0' },
    { name: 'GROQ API', purpose: 'Fast LLM inference', version: '0.34.1' }
  ];
  const mlLibs = [
    { name: 'scikit-learn', purpose: 'TF-IDF & ML algorithms', version: '1.3.2' },
    { name: 'NumPy', purpose: 'Numerical computing', version: '1.24.3' },
    { name: 'PyMuPDF', purpose: 'Fast PDF extraction', version: '1.23.8' }
  ];
  const decisions = [
    { tech: 'Streamlit', why: 'Rapid UI development, Python-native, no frontend expertise needed', alt: 'Flask, Django' },
    { tech: 'GROQ', why: 'Ultra-fast LLM inference (300+ tokens/sec), cost-effective, privacy-focused', alt: 'OpenAI, Claude' },
    { tech: 'PyMuPDF', why: '3-5x faster than alternatives, robust PDF parsing', alt: 'PyPDF2, pdfplumber' },
    { tech: 'scikit-learn', why: 'Industry-standard ML toolkit, lightweight, well-documented', alt: 'TensorFlow, PyTorch' },
    { tech: 'TF-IDF', why: 'Fast, interpretable, no GPU required, works offline', alt: 'Sentence transformers' }
  ];

  return (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
      Technology Stack
    </h2>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300 hover:shadow-2xl transition-all duration-300 animate-slide-in-up">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Languages & Frameworks</h3>
        <div className="space-y-3">
          {languages.map((tech, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 hover:scale-105 transition-transform duration-300 animate-pop-in" style={{ animationDelay: `${idx * 100}ms`}}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-gray-900">{tech.name}</span>
                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">{tech.version}</span>
              </div>
              <p className="text-sm text-gray-600">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300 hover:shadow-2xl transition-all duration-300 animate-slide-in-up" style={{ animationDelay: '150ms' }}>
        <h3 className="text-xl font-bold text-green-900 mb-4">ML & Data Processing</h3>
        <div className="space-y-3">
          {mlLibs.map((tech, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 hover:scale-105 transition-transform duration-300 animate-pop-in" style={{ animationDelay: `${150 + idx * 100}ms`}}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-gray-900">{tech.name}</span>
                <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">{tech.version}</span>
              </div>
              <p className="text-sm text-gray-600">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 animate-gradient-move animate-slide-in-up" style={{ animationDelay: '300ms' }}>
      <h3 className="text-2xl font-bold mb-6">AI Models</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-3">Language Model</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>llama-3.3-70b-versatile</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>70B parameters</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>8192 token context</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>300+ tokens/sec</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-3">Vectorization</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>TF-IDF (scikit-learn)</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>Cosine similarity</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>O(n) complexity</span></li>
            <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /><span>In-memory caching</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 animate-slide-in-up" style={{ animationDelay: '450ms' }}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Decisions</h3>
      <div className="space-y-4">
        {decisions.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2 animate-slide-in-up" style={{ animationDelay: `${500 + idx * 100}ms` }}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-900">{item.tech}</h4>
              <span className="text-xs text-gray-500">Alt: {item.alt}</span>
            </div>
            <p className="text-gray-700 text-sm">{item.why}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
