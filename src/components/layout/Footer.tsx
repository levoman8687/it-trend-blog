import Link from 'next/link';
import { Cpu } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] mt-16">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Cpu className="text-blue-500" size={18} />
            <span>최신 IT 트렌드 따라잡기</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            IT 기술 · AI 기술 · 암호화폐 최신 동향
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/posts/it" className="hover:text-blue-500 transition-colors">IT 기술</Link>
            <Link href="/posts/ai" className="hover:text-purple-500 transition-colors">AI 기술</Link>
            <Link href="/posts/crypto" className="hover:text-yellow-500 transition-colors">암호화폐</Link>
            <Link href="/about" className="hover:text-gray-800 dark:hover:text-gray-200 transition-colors">소개</Link>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} 최신 IT 트렌드 따라잡기. 본 블로그의 내용은 정보 제공 목적이며 투자 조언이 아닙니다.
        </div>
      </div>
    </footer>
  );
}
