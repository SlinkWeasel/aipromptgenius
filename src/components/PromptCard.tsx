'use client';

import { useState } from 'react';
import { Prompt } from '@/data/prompts';

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{prompt.title}</h3>
          <p className="text-sm text-gray-600">{prompt.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          prompt.tool === 'ChatGPT' ? 'bg-green-100 text-green-800' :
          prompt.tool === 'Claude' ? 'bg-orange-100 text-orange-800' :
          prompt.tool === 'Midjourney' ? 'bg-purple-100 text-purple-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {prompt.tool}
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-4 relative group">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono max-h-32 overflow-y-auto">
          {prompt.prompt.slice(0, 200)}...
        </pre>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent bottom-0 h-8" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {prompt.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            copied 
              ? 'bg-green-500 text-white' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {copied ? 'Copied!' : 'Copy Prompt'}
        </button>
      </div>
    </div>
  );
}
