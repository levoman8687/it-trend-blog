import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostsByCategory } from '@/lib/posts';
import { getCategoryById, CATEGORIES } from '@/lib/categories';
import { PostGrid } from '@/components/ui/PostGrid';

interface Props {
  params: { category: string };
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryById(params.category);
  if (!cat) return {};
  return {
    title: cat.label,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategoryById(params.category);
  if (!cat) notFound();

  const posts = await getPostsByCategory(params.category);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{cat.label}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {cat.description} · 총 {posts.length}개의 포스트
        </p>
      </div>
      <PostGrid posts={posts} />
    </div>
  );
}
