'use client';

import React, { useState } from 'react'
import { Post } from '@/service/posts';
import PostGrid from './PostGrid';
import Categories from './Categories';

interface Props {
    posts: Post[];
    categories: string[]
}

const ALL_POSTS = 'All Posts'

export default function  FilterablePosts({posts, categories}: Props) {
    const [selected, setSelected] = useState(ALL_POSTS)
    // 초기상태값 -> 모든 포스트
    const filtered = selected === ALL_POSTS 
    ? posts : posts.filter((post => post.category === selected))
    // all post 가 선택된다면, 전달된 모든 포스트 보여줌
    return (
        <section className='flex justify-center pt-8 max-w-4xl w-full h-screen'>
            <PostGrid posts = {filtered} />
            {/* 컴포넌트 재사용 */}
            <Categories categories={[ALL_POSTS, ...categories]} //all posts 먼저 선택할 수 있게 해준다.
            selected={selected}
            onClick={setSelected}
        />
        </section>
  )
}
