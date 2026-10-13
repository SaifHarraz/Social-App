import React from "react";
import { FriendCard } from "./FriendCard/FriendCard";
import type { FriendSuggestion } from "../../../../../interface/feed";


interface FriendCardListProps {
  friends: FriendSuggestion[];
}

export const FriendCardList: React.FC<FriendCardListProps> = ({ friends }) => {
  return (
    <div className="space-y-3">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
};