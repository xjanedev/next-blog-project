import React from "react";
import PostGrid from "./PostGrid";
import { getLatestPosts } from "@/service/posts";
import { Courier_Prime } from "next/font/google";

const cp = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});

export default async function LatestPost() {
  const posts = await getLatestPosts();
  return (
    <section>
      <div className={cp.className}>
        <h2 className='text-xl mt-6 mb-4'>latest posts!</h2>
      </div>
      <PostGrid posts={posts} />
    </section>
  );
}
