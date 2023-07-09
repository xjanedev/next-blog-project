import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 포스트",
};

export default async function PostPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  // [categories] set은 중복이 안된다. => 고유한 카테고리들이 배열로 담긴다.
  return (
    <div>
      <section className='p-16 flex justify-center'>
        <FilterablePosts posts={posts} categories={categories} />
      </section>
    </div>
  );
}
