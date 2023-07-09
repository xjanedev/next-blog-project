import React from 'react'
import { Post } from '@/service/posts'
import PostCard from './PostCard'

interface Props {posts: Post[]};

export default function PostGrid({posts}: Props) {
  return (
    <>
    <ul className='grid  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 justify-center' >
        {posts?.map((post) => (
            <li key={post.path}>
                <PostCard post={post} />
            </li>
        ))}
    </ul>
    </>
  )
}
