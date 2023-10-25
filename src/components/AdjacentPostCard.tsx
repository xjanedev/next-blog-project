import { Post } from "@/service/posts";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS =
  "text-3xl m-2 text-gray-300 group-hover:text-blue-500 transform group-hover:scale-110 transition duration-200";
export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  const isNext = type === "next";
  const isPrev = type === "prev";
  const justifyContent = isNext ? "flex-end" : "flex-start";

  return (
    <Link href={`/posts/${path}`} className='relative w-full max-h-56'>
      <div
        className={`flex items-center`}
        style={{
          flexDirection: isNext ? "row-reverse" : "row",
          justifyContent: "space-between",
          paddingRight: isNext ? "3rem" : "1rem",
          paddingLeft: isPrev ? "3rem" : "1rem",
        }}
      >
        <div
          className={`flex items-center`}
          style={{
            marginRight: isNext ? "1rem" : "0",
            marginLeft: isPrev ? "1rem" : "0",
          }}
        >
          {isPrev && <FaArrowLeft className={ICON_CLASS} />}
          {isNext && <FaArrowRight className={ICON_CLASS} />}
        </div>
        <div
          className={`flex flex-col ${isNext ? "ml-16" : "mr-16"} w-full`}
          style={{ textAlign: isNext ? "right" : "left" }}
        >
          <h3 className='text-lg font-medium text-gray-900 dark:text-gray-200 mb-2 text-center'>
            {title}
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-300 text-center'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
