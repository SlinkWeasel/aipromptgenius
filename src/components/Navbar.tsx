import Link from "next/link";
import { categories } from "@/data/prompts";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-indigo-600 hover:text-indigo-700 transition-colors">
            <span className="text-2xl">✨</span>
            <span className="hidden sm:inline">AI Prompt Genius</span>
            <span className="sm:hidden">APG</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                <span>{cat.icon}</span>
                <span>{cat.name.split(" ")[0]}</span>
              </Link>
            ))}
          </div>
          <a
            href="#email-signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap"
          >
            Get Free Prompts
          </a>
        </div>
      </div>
    </nav>
  );
}
