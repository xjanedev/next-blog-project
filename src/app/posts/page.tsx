import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "프론트엔드 개발자 학습 블로그",
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return (
    <div>
      <section className='p-16 flex justify-center'>
        <FilterablePosts posts={posts} categories={categories} />
      </section>
    </div>
  );
}
