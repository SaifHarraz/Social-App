import { Button } from "@heroui/react";
import CreatePostCard from "./CreatePostCard/CreatePostCard";
import { MobileSuggestedFriendsToggle } from "./MobileSuggestedFriendsToggle/MobileSuggestedFriendsToggle";
import PostList from "./PostList/PostList";

export default function MainFeed() {

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
      <PostList />
      {/* <Button className="w-full">See more</Button > should be added at the end of postList kinda lazy for pagination leave it for now  */}   
    </section>
  );
};