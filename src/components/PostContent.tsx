import React from "react";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiOutlineCalendar } from "react-icons/ai";
import { PostData } from "@/service/posts";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex items-center self-end'>
        <AiOutlineCalendar />
        <p className='font-bold ml-2 text-gray-400'>{date.toString()}</p>
      </div>
      <div className='p-4'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-xl mt-4 font-bold'>{description}</p>
        <div className='w-40 border-2 border-darkModeBg mt-4 mb-8' />
        <MarkdownViewer content={content} />
      </div>
    </section>
  );
}
