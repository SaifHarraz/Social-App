import React from "react";
import { Users } from "lucide-react";

export const MobileSuggestedFriendsToggle: React.FC = () => {
  return (
    <div className="space-y-3 xl:hidden">
      <button
        type="button"
        className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm"
      >
        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
          <Users className="text-[#1877f2]" size={17} />
          Suggested Friends
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
            5
          </span>
          <span className="text-xs font-bold text-[#1877f2]">Show</span>
        </span>
      </button>
    </div>
  );
};