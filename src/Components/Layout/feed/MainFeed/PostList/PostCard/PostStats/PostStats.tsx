import React from "react";
import { ThumbsUp, Repeat2 } from "lucide-react";

interface PostStatsProps {
  likesCount: number;
  sharesCount: number;
  commentsCount: number;
}

export const PostStats: React.FC<PostStatsProps> = ({ likesCount, sharesCount, commentsCount }) => {
  return (
    <div className="px-4 pb-2 pt-3 text-sm text-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
            <ThumbsUp size={12} />
          </span>
          <button type="button" className="font-semibold transition cursor-pointer hover:text-[#1877f2] hover:underline">
            {likesCount} likes
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
          <span className="inline-flex items-center gap-1">
            <Repeat2 size={13} />
            {sharesCount} shares
          </span>
          <span>{commentsCount} comments</span>
          <button className="rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};