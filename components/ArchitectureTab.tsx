
import React from 'react';
import { Database, CheckCircle, Code, Zap } from './icons';

export const ArchitectureTab: React.FC = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
      System Architecture
    </h2>
    
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-300 shadow-xl">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-lg">
            USER UPLOADS DOCUMENT
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="text-5xl text-blue-600 animate-bounce">↓</div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-purple-300 transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-purple-600 mb-3 text-lg">1. EXTRACTION</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-purple-600">•</span> PyMuPDF extracts text</li>
              <li className="flex items-center gap-2"><span className="text-purple-600">•</span> Text cleaning</li>
              <li className="flex items-center gap-2"><span className="text-purple-600">•</span> Format detection</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-300 transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-green-600 mb-3 text-lg">2. CHUNKING</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> 1000-char chunks</li>
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> 200-char overlap</li>
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> Metadata tagging</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-300 transform hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-blue-600 mb-3 text-lg">3. VECTORIZATION</h4>
            <ul className="text-sm space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> TF-IDF vectors</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Cosine similarity</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Cache in memory</li>
            </ul>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="text-5xl text-green-600 animate-bounce">↓</div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl shadow-lg">
            READY FOR QUERIES
          </div>
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-8">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Database className="w-6 h-6" />
          Backend (RAG Engine)
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Document processing pipeline</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Vector database (TF-IDF)</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>LLM integration (GROQ)</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /><span>Retrieval algorithms</span></li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
          <Code className="w-6 h-6" />
          Frontend (Streamlit)
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Document upload interface</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Real-time chat UI</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Learning tools panel</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" /><span>Dashboard with metrics</span></li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Utilities (utils.py)
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" /><span>PDF extraction (PyMuPDF)</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" /><span>Text cleaning pipeline</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" /><span>Sentence extraction</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" /><span>Keyword identification</span></li>
        </ul>
      </div>
    </div>
  </div>
);
