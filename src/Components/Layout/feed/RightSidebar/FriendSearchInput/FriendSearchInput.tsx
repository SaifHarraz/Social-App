import React from "react";
import { Search } from "lucide-react";

export const FriendSearchInput: React.FC = () => {
  return (
    <div className="mb-3">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
        <input
          placeholder="Search friends..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 outline-none focus:border-[#1877f2] focus:bg-white"
          defaultValue=""
        />
      </label>
    </div>
  );
};