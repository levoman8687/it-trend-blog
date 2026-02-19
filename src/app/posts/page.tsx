import { getAllPosts } from '@/lib/posts';
import { PostGrid } from '@/components/ui/PostGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '전체 포스트',
  description: 'IT 기술, AI 기술, 암호화폐에 관한 모든 포스트를 확인하세요.',
};

export default async function AllPostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">전체 포스트</h1>
        <p className="text-gray-500 dark:text-gray-400">
          총 {posts.length}개의 포스트
        </p>
      </div>
      <PostGrid posts={posts} />
    </div>
  );
}
