import { cn } from '@/lib/utils';

const BADGE_STYLES = {
  it: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  ai: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  crypto: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
};

const LABELS = { it: 'IT 기술', ai: 'AI 기술', crypto: '암호화폐' };

export function CategoryBadge({
  category,
}: {
  category: 'it' | 'ai' | 'crypto';
}) {
  return (
    <span className={cn('category-badge', BADGE_STYLES[category])}>
      {LABELS[category]}
    </span>
  );
}
