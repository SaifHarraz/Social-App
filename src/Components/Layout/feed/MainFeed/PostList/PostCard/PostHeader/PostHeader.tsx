import React from "react";
import { Earth, ChevronDown, Ellipsis } from "lucide-react";
import { Avatar } from "@heroui/react";
import {type UserProfile } from "../../../../../../../interface/feed";

interface PostHeaderProps {
  author: UserProfile;
  timestamp: string;
  visibility: string;
}

export const PostHeader: React.FC<PostHeaderProps> = ({ author, timestamp, visibility }) => {
  return (
    <div className="flex items-center gap-3">
      <a className="shrink-0" href="#/profile" data-discover="true">
        <Avatar className="h-11 w-11 rounded-full object-cover">
          <Avatar.Image src={author.avatarUrl} alt={author.name} />
          <Avatar.Fallback>{author.name.substring(0, 2)}</Avatar.Fallback>
        </Avatar>
      </a>
      <div className="min-w-0 flex-1">
        <a className="truncate text-sm font-bold text-foreground hover:underline" href="#/profile" data-discover="true">
          {author.name}
        </a>
        <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          @{author.username} ·{" "}
          <button type="button" className="rounded px-0.5 py-0.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 hover:underline">
            {timestamp}
          </button>
          <span className="mx-1">·</span>
          <span className="relative inline-flex items-center">
            <button type="button" className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60">
              <Earth size={11} />
              {visibility}
              <ChevronDown size={12} />
            </button>
          </span>
        </div>
      </div>
      <div className="relative">
        <button className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
          <Ellipsis size={18} />
        </button>
      </div>
    </div>
  );
};