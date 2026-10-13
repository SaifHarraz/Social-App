import React from "react";

interface PostContentProps {
  content: string;
  mediaUrl?: string;
}

export const PostContent: React.FC<PostContentProps> = ({ content, mediaUrl }) => {
  return (
    <>
      <div className="p-4">
        <div className="mt-3">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{content}</p>
        </div>
      </div>
      {mediaUrl && (
        <div className="max-h-[620px] overflow-hidden border-y border-slate-200">
          <button type="button" className="group relative block w-full cursor-zoom-in">
            <img alt="post" className="w-full object-cover" src={mediaUrl} />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
          </button>
        </div>
      )}
    </>
  );
};