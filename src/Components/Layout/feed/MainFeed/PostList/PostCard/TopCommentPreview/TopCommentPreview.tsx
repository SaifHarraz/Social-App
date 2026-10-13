import React from "react";
import { Avatar } from "@heroui/react";
import {type UserProfile } from "../../../../../../../interface/feed";

interface TopCommentPreviewProps {
  topComment?: {
    author: UserProfile;
    text: string;
  };
}

export const TopCommentPreview: React.FC<TopCommentPreviewProps> = ({ topComment }) => {
  if (!topComment) return null;

  return (
    <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">Top Comment</p>
      <div className="flex items-start gap-2">
        <Avatar className="h-8 w-8 rounded-full object-cover">
          <Avatar.Image src={topComment.author.avatarUrl} alt={topComment.author.name} />
          <Avatar.Fallback>{topComment.author.name.substring(0, 2)}</Avatar.Fallback>
        </Avatar>
        <div className="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
          <p className="truncate text-xs font-bold text-slate-900">{topComment.author.name}</p>
          <p className="mt-0.5 whitespace-pre-wrap text-sm text-slate-700">{topComment.text}</p>
        </div>
      </div>
      <button className="mt-2 text-xs font-bold text-[#1877f2] hover:underline">View all comments</button>
    </div>
  );
};