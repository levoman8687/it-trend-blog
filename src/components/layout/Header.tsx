'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { CATEGORIES } from '@/lib/categories';
import { Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Cpu className="text-blue-500" size={24} />
          <span className="hidden sm:block">최신 IT 트렌드</span>
        </Link>

        <nav className="flex items-center gap-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/posts/${cat.id}`}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                pathname?.startsWith(`/posts/${cat.id}`)
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              {cat.label}
            </Link>
          ))}
          <Link
            href="/about"
            className={cn(
              'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
              pathname === '/about'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            소개
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
