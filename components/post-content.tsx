"use client";

import Markdown from 'markdown-to-jsx';
import { type Post } from '@/lib/blog';
import { Card } from '@/components/ui/card';
import { PostHeader } from '@/components/post/post-header';


const MarkdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-6">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="ml-4">{children}</li>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm md:text-base whitespace-pre-wrap break-words">
      {children}
    </pre>
  ),
  code: ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return className ? (
      <code className={`${className} block overflow-x-auto`}>{children}</code>
    ) : (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>
    );
  },
};

export function PostContent({ post }: { post: Post }) {
  return (
    <>
      <Card className="p-4 md:p-8">
        <PostHeader 
          title={post.title}
          date={post.date}
          readingTime={post.readingTime}
          category={post.category}
          slug={post.slug}
        />
        <article className="prose prose-neutral dark:prose-invert max-w-none mt-8">
          <Markdown options={{ overrides: MarkdownComponents }}>
            {post.content}
          </Markdown>
        </article>
      </Card>
    </>
  );
}