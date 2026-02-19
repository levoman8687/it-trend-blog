import { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'it',
    label: 'IT 기술',
    description: '최신 IT 기술 동향과 트렌드를 쉽게 이해합니다',
    color: 'blue',
    iconName: 'Cpu',
  },
  {
    id: 'ai',
    label: 'AI 기술',
    description: '인공지능 기술 분류 및 심층 비교 분석',
    color: 'purple',
    iconName: 'Brain',
  },
  {
    id: 'crypto',
    label: '암호화폐',
    description: 'BTC, ETH, XRP, SOL, PI 전망과 가격 예측',
    color: 'yellow',
    iconName: 'TrendingUp',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}
