export interface PostFrontmatter {
  title: string;
  date: string;
  category: 'it' | 'ai' | 'crypto';
  description: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface Category {
  id: 'it' | 'ai' | 'crypto';
  label: string;
  description: string;
  color: string;
  iconName: string;
}
