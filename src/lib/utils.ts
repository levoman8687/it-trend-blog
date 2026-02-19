import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string): string {
  try {
    return format(parseISO(dateStr), 'yyyy년 M월 d일', { locale: ko });
  } catch {
    return dateStr;
  }
}
