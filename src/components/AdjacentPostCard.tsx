import { Post } from "@/service/posts";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS =
  "text-3xl m-2 text-gray-300 group-hover:text-darkModeBg m-16";
export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  const isNext = type === "next";
  const isPrev = type === "prev";

  return (
    <Link href={`/posts/${path}`} className='relative w-full max-h-56'>
      <div
        className={`group flex items-center${
          isNext ? "justify-end" : "justify-start"
        }`}
      >
        {isPrev && <FaArrowLeft className={ICON_CLASS} />}
        <div className='flex flex-col justify-center ml-16 mr-16'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-gray-200 mb-2 text-center'>
            {title}
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-300 text-center'>
            {description}
          </p>
        </div>
        {isNext && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
