import React from "react";
import Image from "next/image";
import { getLatestPosts, getPostData } from "@/service/posts";
import PostContent from "@/components/PostContent";
import AdjacentPostCard from "@/components/AdjacentPostCard";
import { Metadata } from "next";
import { PostData } from "@/service/posts";

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description }: PostData = await getPostData(slug);
  return {
    title,
    description,
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className='col items-center bg-gray-40 max-w-4xl mx-auto px-4 py-8'>
      <Image
        className='w-full h-1/4 max-h-[400px]'
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className='flex justify-between mt-8'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getLatestPosts();
  return posts.map(post => ({
    slug: post.path,
  }));
}
