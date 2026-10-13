import React from "react";
import { UserPlus } from "lucide-react";
import { Avatar } from "@heroui/react";
import {type FriendSuggestion } from "../../../../../../interface/post";

interface FriendCardProps {
  friend: FriendSuggestion;
}

export const FriendCard: React.FC<FriendCardProps> = ({ friend }) => {
  return (
    <div className="rounded-xl border border-slate-200 p-2.5">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50"
        >
          <Avatar className="h-10 w-10 rounded-full object-cover">
            <Avatar.Image src={friend.avatarUrl} alt={friend.name} />
            <Avatar.Fallback>{friend.name.substring(0, 2)}</Avatar.Fallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-slate-900 hover:underline">{friend.name}</p>
            <p className="truncate text-xs text-slate-500">@{friend.username}</p>
          </div>
        </button>
        <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
          <UserPlus size={13} />
          Follow
        </button>
      </div>
      <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
        <span className="rounded-full bg-slate-100 px-2 py-0.5">{friend.followersCount} followers</span>
      </div>
    </div>
  );
};