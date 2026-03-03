'use client';

import { useState } from 'react';
import { Prompt } from '@/data/prompts';

interface PromptCardProps {
  prompt: Prompt;
}

const PREVIEW_LENGTH = 180;

export default function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for environments without clipboard API
      const el = document.createElement('textarea');
      el.value = prompt.prompt;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toolColors: Record<string, string> = {
    ChatGPT: 'bg-green-100 text-green-800',
    Claude: 'bg-orange-100 text-orange-800',
    Midjourney: 'bg-purple-100 text-purple-800',
    'DALL-E': 'bg-pink-100 text-pink-800',
    Gemini: 'bg-blue-100 text-blue-800',
  };

  const difficultyColors: Record<string, string> = {
    Beginner: 'text-green-600',
    Intermediate: 'text-yellow-600',
    Advanced: 'text-red-600',
  };

  const previewText = prompt.prompt.length > PREVIEW_LENGTH && !expanded
    ? prompt.prompt.slice(0, PREVIEW_LENGTH).trimEnd() + '…'
    : prompt.prompt;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 flex flex-col">
      <div className="flex items-start justify-between mb-3 gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">{prompt.title}</h3>
          <p className="text-sm text-gray-600">{prompt.description}</p>
        </div>
        <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium ${toolColors[prompt.tool] ?? 'bg-blue-100 text-blue-800'}`}>
          {prompt.tool}
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-3 flex-1">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
          {previewText}
        </pre>
        {prompt.prompt.length > PREVIEW_LENGTH && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs text-indigo-600 hover:text-indigo-800 font-medium"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </div>

      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="flex items-center gap-2 flex-wrap">
          {prompt.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
          <span className={`text-xs font-medium ${difficultyColors[prompt.difficulty] ?? 'text-gray-500'}`}>
            {prompt.difficulty}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`ml-2 flex-shrink-0 px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
            copied
              ? 'bg-green-500 text-white'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
