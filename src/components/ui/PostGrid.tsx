import { Post } from '@/types';
import { PostCard } from './PostCard';

export function PostGrid({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg">아직 작성된 포스트가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={`${post.category}-${post.slug}`} post={post} />
      ))}
    </div>
  );
}
