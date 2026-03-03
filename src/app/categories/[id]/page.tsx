import PromptCard from '@/components/PromptCard';
import { categories, getPromptsByCategory } from '@/data/prompts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  if (!category) return {};
  return {
    title: `${category.name} Prompts | AI Prompt Genius`,
    description: `Browse ${category.name.toLowerCase()} AI prompts. ${category.description}`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { id } = await params;
  const category = categories.find((c) => c.id === id);
  if (!category) notFound();

  const categoryPrompts = getPromptsByCategory(id);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-indigo-200 hover:text-white mb-6 text-sm transition-colors"
          >
            ← Back to all prompts
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
              <p className="text-indigo-200 mt-1">{category.description}</p>
            </div>
          </div>
          <p className="text-indigo-300 text-sm mt-4">
            {categoryPrompts.length} prompt{categoryPrompts.length !== 1 ? 's' : ''} available
          </p>
        </div>
      </section>

      {/* Prompts Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {categoryPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl mb-4">No prompts yet in this category.</p>
              <Link href="/" className="text-indigo-600 hover:underline">
                Browse all prompts →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 px-4 bg-white border-t">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore other categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.id !== id)
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-indigo-50 hover:text-indigo-700 rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
