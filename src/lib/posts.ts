import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Post, PostFrontmatter } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function getAllPosts(): Promise<Post[]> {
  const categories = ['it', 'ai', 'crypto'];
  const posts: Post[] = [];

  for (const category of categories) {
    const dir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
    for (const file of files) {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      posts.push({
        ...(data as PostFrontmatter),
        slug,
        content,
        readingTime: `${Math.ceil(rt.minutes)}분 읽기`,
        category: category as 'it' | 'ai' | 'crypto',
      });
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.category === category);
}

export async function getPostBySlug(
  category: string,
  slug: string
): Promise<Post | null> {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    ...(data as PostFrontmatter),
    slug,
    content,
    readingTime: `${Math.ceil(rt.minutes)}분 읽기`,
    category: category as 'it' | 'ai' | 'crypto',
  };
}

export async function getAllPostParams() {
  const all = await getAllPosts();
  return all.map((p) => ({ category: p.category, slug: p.slug }));
}
