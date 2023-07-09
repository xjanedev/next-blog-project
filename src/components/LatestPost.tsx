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
    // 1. 모든 포스트 데이터를 읽어와야 함
    // 2. 모든 포스트 데이터를 보여줌
    <section>
      <div className={cp.className}>
        <h2 className='text-2xl mt-6 mb-8'>* Latest Posts</h2>
        {/* // hover시 컬러 체인지 */}
      </div>
      <PostGrid posts={posts} />
    </section>
  );
}
