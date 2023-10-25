"use client";

import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import rehypeRaw from "rehype-raw";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className='prose max-w-none item-center text-gray-800 dark:text-gray-100'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...props}
              style={atomDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: props => (
          <Image
            src={props.src || ""}
            alt={props.alt || ""}
            width={500}
            height={350}
          />
        ),
        blockquote: ({ children }) => (
          <blockquote className='text-gray-900 dark:text-gray-200 border-darkModeBg dark:border-darkModeBg'>
            {children}
          </blockquote>
        ),

        em: ({ children }) => (
          <em className='italic dark:text-gray-200'>{children}</em>
        ),
        strong: ({ children }) => (
          <strong className='dark:text-gray-200'>{children}</strong>
        ),
        h2: ({ children }) => (
          <h2 className='dark:text-gray-200'>{children}</h2>
        ),
        h3: ({ children }) => (
          <h2 className='dark:text-gray-200'>{children}</h2>
        ),
        h4: ({ children }) => (
          <h2 className='dark:text-gray-200'>{children}</h2>
        ),
        h5: ({ children }) => (
          <h2 className='dark:text-gray-200'>{children}</h2>
        ),
        a: ({ href, children }) => (
          <a href={href} className='text-blue-500'>
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
