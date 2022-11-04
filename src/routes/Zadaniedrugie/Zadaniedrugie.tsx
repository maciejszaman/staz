import React, { useEffect, useState } from 'react'
import * as SharedTypes from '../../shared/Types.types'
import { Post } from './Post/Post';
import { Skeletonpost } from './Post/Skeletonpost';

export const Zadaniedrugie = () => {
  const [posts, setPosts ] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12)
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)



  async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    setTimeout(() => setPosts(data), 1000)
  }

  useEffect(() => {
    fetchPosts()
  },[])

  return (
    <div className="bg-slate-200" >
      <div className=' pl-[10%] pr-[10%] pt-[5%] pb-[5%] h-[100%]'>
        {posts.length !== 0 ? (<>
        <div className='cards justify-center flex flex-row flex-wrap gap-5'>
        {posts.map((post) => (
            <Post post={post} key={post.id}/>
          ))}
        </div>
        </>
        )
        : 
        (
            <div className='cards justify-center flex flex-row flex-wrap gap-5'>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
              <Skeletonpost/>
            </div>
        )

      }
      </div>
    </div>
  )
}
