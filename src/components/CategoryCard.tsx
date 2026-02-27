import Link from 'next/link';

interface CategoryCardProps {
  id: string;
  name: string;
  icon: string;
  description: string;
  promptCount?: number;
}

export default function CategoryCard({ id, name, icon, description, promptCount = 0 }: CategoryCardProps) {
  return (
    <Link href={`/categories/${id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 hover:border-indigo-200 cursor-pointer group">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        {promptCount > 0 && (
          <span className="text-xs text-indigo-600 font-medium">
            {promptCount} prompts
          </span>
        )}
      </div>
    </Link>
  );
}
