import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const postRoutes = posts.map((p) => ({
    url: `${base}/posts/${p.category}/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/posts`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/posts/it`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/posts/ai`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/posts/crypto`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.5 },
    ...postRoutes,
  ];
}
