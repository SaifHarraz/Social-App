import React from "react";
import { CreatePostCard } from "./CreatePostCard/CreatePostCard";
import { PostList } from "./PostList/PostList";
import { MobileSuggestedFriendsToggle } from "./MobileSuggestedFriendsToggle/MobileSuggestedFriendsToggle";
import {type Post } from "../../../../interface/feed";

export const MainFeed: React.FC = () => {
  const samplePosts: Post[] = [
    {
      id: "1",
      author: {
        name: "Nelle Rosa",
        username: "nefoqe",
        avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
      },
      timestamp: "33m",
      visibility: "Public",
      content: "test😎😎",
      mediaUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linked-posts/1791852748850-1a2f2b93-323e-4955-be71-3d1af5953ac0-Arc-Raiders--Andrew-Svanberg-Hamilton.webp",
      likesCount: 2,
      sharesCount: 1,
      commentsCount: 2,
      topComment: {
        author: {
          name: "Nelle Rosa",
          username: "nefoqe",
          avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
        },
        text: "sssssss",
      },
    },
  ];

  return (
    <section className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm xl:hidden">
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-[#e7f3ff] text-[#1877f2]">
            Feed
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
            My Posts
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
            Community
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
            Saved
          </button>
        </div>
      </div>
      <MobileSuggestedFriendsToggle />
      <CreatePostCard />
      <PostList posts={samplePosts} />
    </section>
  );
};