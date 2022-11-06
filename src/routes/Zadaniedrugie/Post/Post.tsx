import React from "react";
import * as Types from "./Post.types";

export const Post = ({ post }: Types.PostProps) => {
  return (
    <div className="flex flex-col rounded-md p-3 gap-2 w-60 drop-shadow bg-slate-100">
      <div className="head font-medium justify-center">{post.title}</div>
      <div className="body">{post.body}</div>
    </div>
  );
};
