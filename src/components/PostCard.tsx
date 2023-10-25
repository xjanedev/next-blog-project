import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/service/posts";

interface Props {
  post: Post;
}

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-lg overflow-hidden border hover:shadow-sm gray-200'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={240}
          height={300}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='text-sm self-end text-gray-500 dark:text-gray-200 mb-4'>
            {date.toString()}
          </time>
          <h3 className='text-md font-bold  text-gray-800 dark:text-gray-200'>
            {title}
          </h3>
          <p className='w-full truncate text-center text-gray-500 dark:text-gray-200'>
            {description}
          </p>
          <span className='text-sm rounded-xl bg-darkModeBg px-4 my-4'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
