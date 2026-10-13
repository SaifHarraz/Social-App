import { Skeleton } from "@heroui/react";

export default function FeedSkeleton() {
 return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-4">
      {/* Header Skeleton (Avatar + Name/Timestamp) */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-11 w-11 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-3.5 w-1/3 rounded-lg" />
          <Skeleton className="h-3 w-1/4 rounded-lg" />
        </div>
      </div>

      {/* Content Text Skeleton */}
      <div className="space-y-2 pt-1">
        <Skeleton className="h-3.5 w-full rounded-lg" />
        <Skeleton className="h-3.5 w-4/5 rounded-lg" />
      </div>

      {/* Media Image Placeholder Skeleton */}
      <Skeleton className="h-64 w-full rounded-xl" />

      {/* Stats Bar Skeleton */}
      <div className="flex justify-between items-center pt-2">
        <Skeleton className="h-4 w-1/4 rounded-lg" />
        <Skeleton className="h-4 w-1/4 rounded-lg" />
      </div>

      {/* Action Buttons Skeleton (Like, Comment, Share) */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
        <Skeleton className="h-9 rounded-md" />
        <Skeleton className="h-9 rounded-md" />
        <Skeleton className="h-9 rounded-md" />
      </div>
    </div>
  );
}
