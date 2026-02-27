import PromptCard from '@/components/PromptCard';
import CategoryCard from '@/components/CategoryCard';
import { categories, getFeaturedPrompts, getTrendingPrompts } from '@/data/prompts';

export default function Home() {
  const featuredPrompts = getFeaturedPrompts();
  const trendingPrompts = getTrendingPrompts();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI Prompt Genius
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">
            Tested, proven AI prompts that actually work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#categories" 
              className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Categories
            </a>
            <a 
              href="#featured" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              View Featured
            </a>
          </div>
          <p className="mt-8 text-sm text-indigo-200">
            50+ curated prompts for ChatGPT, Claude, Midjourney & more
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search prompts... (e.g., 'email', 'coding', 'marketing')"
              className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-indigo-500 focus:outline-none text-lg"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                icon={category.icon}
                description={category.description}
                promptCount={category.id === 'writing' ? 6 : category.id === 'coding' ? 4 : 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prompts Section */}
      <section id="featured" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Featured Prompts
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Hand-picked prompts that deliver results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Trending This Week
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Most popular prompts right now
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingPrompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never struggle with AI prompts again
          </h2>
          <p className="text-xl mb-8 text-indigo-200">
            Get unlimited access to 1000+ tested prompts for just $9.99/month
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Get Premium Access
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              View Free Prompts
            </button>
          </div>
          <p className="mt-6 text-sm text-indigo-300">
            50+ free prompts • New prompts weekly • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">AI Prompt Genius</h3>
              <p className="text-sm">Curated AI prompts that actually work. Tested and proven.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>Writing</li>
                <li>Coding</li>
                <li>Business</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Prompt Guide</li>
                <li>Newsletter</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>Twitter/X</li>
                <li>Discord</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            © 2024 AI Prompt Genius. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
