import type { Metadata } from 'next';
import { Cpu, Brain, TrendingUp, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: '블로그 소개',
  description: '최신 IT 트렌드 따라잡기 블로그 소개 페이지',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">블로그 소개</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <strong>최신 IT 트렌드 따라잡기</strong>는 빠르게 변화하는 IT 기술, 인공지능,
          암호화폐 분야의 최신 동향을 누구나 쉽게 이해할 수 있도록 정리하는 한국어 기술 블로그입니다.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">다루는 주제</h2>
        <div className="space-y-4">
          <div className="card flex gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shrink-0">
              <Cpu size={22} />
            </div>
            <div>
              <h3 className="font-bold text-lg">IT 기술</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Web3, 클라우드 네이티브, 엣지 컴퓨팅, 양자 컴퓨팅, DevOps/Platform Engineering 등
                최신 IT 기술의 개념과 특징을 쉽게 설명합니다.
              </p>
            </div>
          </div>

          <div className="card flex gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shrink-0">
              <Brain size={22} />
            </div>
            <div>
              <h3 className="font-bold text-lg">AI 기술</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                LLM(대형 언어 모델), 확산 모델, 멀티모달 AI, AI 에이전트 등
                최신 AI 기술들을 분류하고 비교 분석합니다.
              </p>
            </div>
          </div>

          <div className="card flex gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-700 text-white shrink-0">
              <TrendingUp size={22} />
            </div>
            <div>
              <h3 className="font-bold text-lg">암호화폐</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                비트코인(BTC), 이더리움(ETH), 리플(XRP), 솔라나(SOL), 파이코인(PI) 등
                주요 암호화폐의 기술적 특징과 시장 전망을 분석합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <div className="flex gap-3">
          <BookOpen className="text-blue-500 shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold mb-2">유의사항</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              본 블로그의 암호화폐 관련 내용은 정보 제공 목적으로 작성되었으며,
              투자 조언이 아닙니다. 암호화폐는 고위험 자산으로 투자 시 충분한
              조사와 전문가 상담을 권장합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
