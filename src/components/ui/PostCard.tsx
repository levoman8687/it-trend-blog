import Link from 'next/link';
import { Post } from '@/types';
import { CategoryBadge } from './CategoryBadge';
import { formatDate } from '@/lib/utils';
import { Clock } from 'lucide-react';

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.category}/${post.slug}`} className="block card group">
      <div className="flex items-center justify-between mb-3">
        <CategoryBadge category={post.category} />
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Clock size={12} />
          {post.readingTime}
        </span>
      </div>
      <h2 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
        {post.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
        {post.description}
      </p>
      <div className="mt-4 text-xs text-gray-400">
        {formatDate(post.date)}
      </div>
    </Link>
  );
}
