import React from "react";
import { Newspaper, Sparkles, Earth, Bookmark } from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export const SidebarNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Feed", icon: <Newspaper size={17} />, active: true },
    { label: "My Posts", icon: <Sparkles size={17} /> },
    { label: "Community", icon: <Earth size={17} /> },
    { label: "Saved", icon: <Bookmark size={17} /> },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition ${
            item.active
              ? "bg-[#e7f3ff] text-[#1877f2]"
              : "mt-1 text-slate-700 hover:bg-slate-100"
          }`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
};