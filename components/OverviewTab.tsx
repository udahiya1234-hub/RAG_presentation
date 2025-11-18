import React from 'react';
import { Target, Globe, BookOpen, MessageSquare, Brain, Zap } from './icons';

export const OverviewTab: React.FC = () => {
  const stats = [
    { value: '8', label: 'Core Features', gradient: 'from-blue-500 to-blue-600', textColor: 'text-blue-100' },
    { value: '3', label: 'File Formats', gradient: 'from-green-500 to-green-600', textColor: 'text-green-100' },
    { value: '1-2s', label: 'Response Time', gradient: 'from-purple-500 to-purple-600', textColor: 'text-purple-100' },
    { value: '~1500', label: 'Lines of Code', gradient: 'from-orange-500 to-orange-600', textColor: 'text-orange-100' }
  ];

  const features = [
    { icon: BookOpen, title: 'Document Analyzer', desc: 'Processes PDF, DOCX, TXT files' },
    { icon: MessageSquare, title: 'Q&A Chatbot', desc: 'Context-aware conversational AI' },
    { icon: Brain, title: 'Learning Assistant', desc: 'Quizzes, flashcards, mind maps' },
    { icon: Zap, title: 'Smart Summarizer', desc: 'Auto-generates insights & summaries' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
        Project Overview
      </h2>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-slide-in-up">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Target className="w-7 h-7 text-blue-600 animate-pulse" />
          Project Objective
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Build a <strong>Retrieval-Augmented Generation (RAG) chatbot</strong> that can answer domain-specific 
          questions by retrieving information from a custom knowledge base, demonstrating practical understanding 
          of vector databases, embeddings, and LLM integration.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-slide-in-up" style={{ animationDelay: '150ms' }}>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Globe className="w-7 h-7 text-green-600" />
          Business Context
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Simulate a real-world scenario where a company needs an intelligent Q&A system for internal 
          documentation, customer support, or educational content. This system eliminates the need for 
          manual document searching and provides instant, accurate answers grounded in actual documents.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${stat.gradient} rounded-xl p-6 text-white hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl animate-slide-in-up`} style={{ animationDelay: `${200 + idx * 100}ms` }}>
            <div className="text-5xl font-bold mb-2">{stat.value}</div>
            <div className={stat.textColor}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Built</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl animate-pop-in" style={{ animationDelay: `${400 + idx * 100}ms` }}>
              <div className="bg-blue-500 p-3 rounded-lg hover:rotate-12 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
