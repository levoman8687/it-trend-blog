import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '최신 IT 트렌드 따라잡기',
    template: '%s | 최신 IT 트렌드 따라잡기',
  },
  description:
    'IT 기술, AI 기술, 암호화폐 최신 동향을 한국어로 정리하는 기술 블로그. BTC, ETH, XRP, SOL, PI 코인 전망 분석.',
  keywords: ['IT트렌드', 'AI기술', '암호화폐', '비트코인', '이더리움', '파이코인', 'Next.js', '블로그'],
  authors: [{ name: 'IT Trend Blog' }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    siteName: '최신 IT 트렌드 따라잡기',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
