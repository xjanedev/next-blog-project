"use client";

import React, { useState } from "react";
import { Post } from "@/service/posts";
import PostGrid from "./PostGrid";
import Categories from "./Categories";

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = "All Posts";

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter(post => post.category === selected);
  return (
    <section className='flex justify-center pt-8 max-w-4xl w-full h-screen'>
      <PostGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
