import React from "react";
import { Users } from "lucide-react";
import { FriendSearchInput } from "./FriendSearchInput/FriendSearchInput";
import { FriendCardList } from "./FriendCardList/FriendCardList";
import type { FriendSuggestion } from "../../../../interface/post";

export const RightSidebar: React.FC = () => {
  const suggestedFriends: FriendSuggestion[] = [
    {
      id: "1",
      name: "Ahmed Abd Al-Muti",
      username: "ahmedmutti",
      avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1775310477363-9f97d1ff-699a-4b66-a04f-bd6dee14d2b7-496835614_1859398661547861_5183785968671576388_n.webp",
      followersCount: 375,
    },
    {
      id: "2",
      name: "Alaa Ashraf",
      username: "alaaashraf",
      avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1775412292104-abcb6dbf-b0cd-4392-8084-3dc4d79abf8d-profile.webp",
      followersCount: 306,
    },
    {
      id: "3",
      name: "MrMo",
      username: "mrmo",
      avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linked-posts/1778937681231-9d4544cb-667c-4af2-95fe-78ac83b54f55-profile.webp",
      followersCount: 235,
    },
    {
      id: "4",
      name: "menna",
      username: "gbngssssb",
      avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png",
      followersCount: 193,
    },
    {
      id: "5",
      name: "abdalla diaa",
      username: "abdalla_diaa",
      avatarUrl: "https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1776007886436-57b1a765-2eec-4b09-9f80-6fa91a44ca94-qDEuDVfUSjCOIqgqwpn0pA.webp",
      followersCount: 186,
    },
  ];

  return (
    <aside className="hidden h-fit xl:sticky xl:top-[84px] xl:block">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Users className="text-[#1877f2]" size={18} />
            <h3 className="text-base font-extrabold text-slate-900">Suggested Friends</h3>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
            {suggestedFriends.length}
          </span>
        </div>
        <FriendSearchInput />
        <FriendCardList friends={suggestedFriends} />
        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
          View more
        </button>
      </div>
    </aside>
  );
};