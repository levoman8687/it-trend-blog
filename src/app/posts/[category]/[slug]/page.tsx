import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPostParams } from '@/lib/posts';
import { MDXContent } from '@/components/mdx/MDXContent';
import { CategoryBadge } from '@/components/ui/CategoryBadge';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { formatDate } from '@/lib/utils';
import { Clock, Calendar, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: { category: string; slug: string };
}

export async function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.category, params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.category, params.slug);
  if (!post) notFound();

  return (
    <div className="flex gap-10">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        <div className="mb-8">
          <Link
            href={`/posts/${post.category}`}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors mb-4"
          >
            <ChevronLeft size={16} />
            목록으로
          </Link>

          <CategoryBadge category={post.category} />
          <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime}
            </span>
            {post.author && (
              <span className="text-gray-400">{post.author}</span>
            )}
          </div>
          <hr className="mt-6 border-[hsl(var(--border))]" />
        </div>

        <MDXContent source={post.content} />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-[hsl(var(--border))]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Sticky TOC */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-24">
          <TableOfContents />
        </div>
      </aside>
    </div>
  );
}
