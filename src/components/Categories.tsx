import React from "react";
import { Courier_Prime } from "next/font/google";

const cp = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
});
interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className='text-center ml-8'>
      <div className={cp.className}>
        <h2 className='text-xl font-bold text-darkModeBg dark:text-darkModeBg mb-4'>
          category
        </h2>
        <ul>
          {categories.map(category => (
            <li
              className={`mb-2 text-sm cursor-pointer text-black dark:text-white hover:text-darkModeBg dark:hover:text-darkModeBg
                ${
                  category === selected
                    ? "font-bold text-darkModeBg hover:text-darkModeBg dark:bg-darkModeBg rounded-xl dark:hover:text-white"
                    : ""
                }`}
              key={category}
              onClick={() => onClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
