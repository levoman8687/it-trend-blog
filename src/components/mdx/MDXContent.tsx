import { MDXRemote } from 'next-mdx-remote/rsc';
import { CodeBlock } from './CodeBlock';
import { Callout } from './Callout';
import { ComparisonTable } from './ComparisonTable';

const components = {
  pre: CodeBlock,
  Callout,
  ComparisonTable,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-blue-500 prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
