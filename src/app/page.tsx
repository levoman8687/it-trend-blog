import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { PostGrid } from '@/components/ui/PostGrid';
import { CATEGORIES } from '@/lib/categories';
import { Cpu, Brain, TrendingUp, ArrowRight } from 'lucide-react';

const CATEGORY_ICONS = {
  it: Cpu,
  ai: Brain,
  crypto: TrendingUp,
};

const CATEGORY_COLORS = {
  it: 'from-blue-500 to-blue-700',
  ai: 'from-purple-500 to-purple-700',
  crypto: 'from-yellow-500 to-yellow-700',
};

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const featuredPost = allPosts.find((p) => p.featured);
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          최신 IT 트렌드{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            따라잡기
          </span>
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          IT 기술, AI 기술, 암호화폐의 최신 동향을 쉽고 빠르게 파악하세요.
          복잡한 기술을 누구나 이해할 수 있도록 정리합니다.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section>
          <h2 className="text-xl font-bold mb-4">주목할 포스트</h2>
          <Link
            href={`/posts/${featuredPost.category}/${featuredPost.slug}`}
            className="block card group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  추천 포스트
                </span>
                <h3 className="text-2xl font-bold mt-1 mb-2 group-hover:text-blue-500 transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {featuredPost.description}
                </p>
              </div>
              <ArrowRight className="text-blue-500 shrink-0 group-hover:translate-x-1 transition-transform" size={24} />
            </div>
          </Link>
        </section>
      )}

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold mb-4">카테고리</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id];
            const gradient = CATEGORY_COLORS[cat.id];
            return (
              <Link
                key={cat.id}
                href={`/posts/${cat.id}`}
                className="card group flex items-center gap-4"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient} text-white`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-semibold group-hover:text-blue-500 transition-colors">
                    {cat.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">최근 포스트</h2>
          <Link
            href="/posts"
            className="text-sm text-blue-500 hover:underline flex items-center gap-1"
          >
            전체 보기 <ArrowRight size={14} />
          </Link>
        </div>
        <PostGrid posts={recentPosts} />
      </section>
    </div>
  );
}
