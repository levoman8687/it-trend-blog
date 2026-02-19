'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const code = (children as React.ReactElement)?.props?.children;
    if (typeof code === 'string') {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-4">
      <pre
        {...props}
        className="overflow-x-auto rounded-xl p-4 text-sm leading-relaxed bg-gray-50 dark:bg-gray-900 border border-[hsl(var(--border))]"
      >
        {children}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-200 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="코드 복사"
      >
        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
      </button>
    </div>
  );
}
