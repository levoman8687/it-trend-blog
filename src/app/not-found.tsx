import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-6xl font-extrabold text-gray-200 dark:text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-500 mb-6">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
