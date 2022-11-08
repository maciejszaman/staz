import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../shared/Types.types";
import Pagination from "./Pagination/Pagination";
import { Post } from "./Post/Post";
import { Skeletonpost } from "./Post/Skeletonpost";

export const Zadaniedrugie = () => {
  const [ posts, setPosts ] = useState<any[]>([]);
  const [ postsFiltered, setPostsFiltered] = useState<any[]>([])
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage ] = useState(12);
  const [ searchValue, setSearchValue ] = useState<string>("")


  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setTimeout(() => setPosts(data), 1000);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setPostsFiltered(posts.filter(item => ((item.title || item.body).includes(searchValue))))
    setCurrentPage(1)
    console.log(postsFiltered)
  },[searchValue])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsFiltered.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gradient-to-r from-bg-slate-100 to-slate-200">
      <div className="sticky top-0 z-50 gap-2 flex flex-col">
        <div className="pt-2 w-[100%] gap-2 bg-slate-200 drop-shadow-md">
        <div className="flex justify-center pb-2">
          <input onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className='w-[40%] p-2 rounded-lg border-2 border-slate-400' 
          placeholder="Search..." type="text"></input>
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={postsFiltered.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        
      </div>

      </div>
      <div className=" pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
        {posts.length !== 0 ? (
          <>
            <div className="cards justify-center flex flex-row flex-wrap gap-5">
              {currentPosts.length > 0 ? (
                currentPosts.map((post: SharedTypes.Posts) => (
                  <Post searchValue={searchValue} post={post} key={post.id} />
                ))
              
              ) : (<div className="pointer-events-none"><p>No posts meet selected criteria</p></div>)}
            </div>
          </>
        ) : (
          <div className="cards justify-center flex flex-row flex-wrap gap-5">
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
            <Skeletonpost />
          </div>
        )}
      </div>
    </div>
  );
};
