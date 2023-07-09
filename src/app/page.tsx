import Hero from "@/components/Hero";
import LatestPost from "@/components/LatestPost";
import React from "react";

export default function Home() {
  return (
    <section className='p-16 flex justify-center'>
      <div className='max-w-4xl w-full'>
        <Hero />
        <LatestPost />
      </div>
    </section>
  );
}
