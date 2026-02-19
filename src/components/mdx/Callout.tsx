import { cn } from '@/lib/utils';
import { Info, AlertTriangle, Lightbulb, AlertCircle, type LucideIcon } from 'lucide-react';

type CalloutType = 'info' | 'warning' | 'tip' | 'danger';

const STYLES: Record<CalloutType, { container: string; icon: string }> = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800',
    icon: 'text-blue-500',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/30 dark:border-yellow-800',
    icon: 'text-yellow-500',
  },
  tip: {
    container: 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800',
    icon: 'text-green-500',
  },
  danger: {
    container: 'bg-red-50 border-red-200 dark:bg-red-950/30 dark:border-red-800',
    icon: 'text-red-500',
  },
};

const ICONS: Record<CalloutType, LucideIcon> = {
  info: Info,
  warning: AlertTriangle,
  tip: Lightbulb,
  danger: AlertCircle,
};

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const styles = STYLES[type];
  const Icon = ICONS[type];

  return (
    <div className={cn('flex gap-3 rounded-lg border p-4 my-4', styles.container)}>
      <Icon size={20} className={cn('shrink-0 mt-0.5', styles.icon)} />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
