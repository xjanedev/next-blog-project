import React from 'react'

interface Props {
    categories: string[]
    selected: string;
    onClick: (category: string) => void; 
    //string 타입의 카테고리를 인자로 전달하면 void 타입 반환 
}

export default function Categories({ categories, selected, onClick }:Props) {
  return (
    <section className='text-center ml-8'>
        <h2 className='text-xl font-bold text-darkModeBg dark:text-darkModeBg mb-4'>Category</h2>
        <ul>
            {categories.map((category) => (
                <li className={`mb-2 text-sm cursor-pointer text-black dark:text-white hover:text-darkModeBg dark:hover:text-darkModeBg
                ${category === selected ? 'font-bold text-darkModeBg hover:text-darkModeBg dark:bg-darkModeBg dark:hover:text-white' : ''}`} key={category} onClick={() => onClick(category)}>
                {category}
              </li>
            ))}
        </ul>
        </section>
  )
}
