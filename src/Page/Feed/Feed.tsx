import React from "react";
import { SidebarNavigation } from "../../Components/Layout/feed/SidebarNavigation/SidebarNavigation";
import { RightSidebar } from "../../Components/Layout/feed/RightSidebar/RightSidebar";
import MainFeed from "../../Components/Layout/feed/MainFeed/MainFeed";

export const Feed: React.FC = () => {
  return (
    <main className="min-w-0">
      <div className="grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)_300px]">
        <aside className="hidden h-fit space-y-3 xl:sticky xl:top-[84px] xl:block">
          <SidebarNavigation />
        </aside>
        <MainFeed />
        <RightSidebar />
      </div>
    </main>
  );
};

export default Feed;