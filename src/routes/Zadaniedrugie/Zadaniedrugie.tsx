import React, { useEffect, useState } from "react";
import * as SharedTypes from "../../shared/Types.types";
import Pagination from "./Pagination/Pagination";
import { Post } from "./Post/Post";
import { Skeletonpost } from "./Post/Skeletonpost";

export const Zadaniedrugie = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setTimeout(() => setPosts(data), 1000);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gradient-to-r from-bg-slate-100 to-slate-200">
      <div className="sticky top-0 z-50">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      <div className=" pl-[10%] pr-[10%] pt-[5%] pb-[5%]">
        {posts.length !== 0 ? (
          <>
            <div className="cards justify-center flex flex-row flex-wrap gap-5">
              {currentPosts.map((post: SharedTypes.Posts) => (
                <Post post={post} key={post.id} />
              ))}
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
