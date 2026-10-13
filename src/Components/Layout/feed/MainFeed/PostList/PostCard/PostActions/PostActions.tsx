import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@heroui/react";

export const PostActions: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      <Button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm bg-[#e7f3ff] text-[#1877f2]">
        <ThumbsUp size={18} />
        <span>Like</span>
      </Button>
      <Button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
        <MessageCircle size={18} />
        <span>Comment</span>
      </Button>
      <Button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
        <Share2 size={18} />
        <span>Share</span>
      </Button>
    </div>
  );
};