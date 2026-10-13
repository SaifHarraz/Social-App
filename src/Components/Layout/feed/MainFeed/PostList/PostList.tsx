import React from "react";
import { PostCard } from "./PostCard/PostCard";
import type { Post } from "../../../../../interface/feed";


interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div className="flex min-h-10 items-center justify-center">
        <span className="text-xs font-semibold text-slate-400">You reached the end</span>
      </div>
    </div>
  );
};