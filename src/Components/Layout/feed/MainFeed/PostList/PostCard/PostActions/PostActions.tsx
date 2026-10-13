import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react"

export const PostActions: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1 p-1">
      <button type="button" className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
        <ThumbsUp size={18} />
        <span>Like</span>
      </button>
      <button  type="button" className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
        <MessageCircle size={18} />
        <span>Comment</span>
      </button>
      <button  type="button" className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
        <Share2 size={18} />
        <span>Share</span>
      </button>
    </div>
  );
};