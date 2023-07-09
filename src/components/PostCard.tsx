import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/service/posts";

interface Props {
  post: Post;
}
// service 에서 가져오는 props post

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden border hover:shadow-md gray-100'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={240}
          height={300}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end'>{date.toString()}</time>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className='text-sm rounded-lg bg-darkModeBg px-4 my-4'>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
