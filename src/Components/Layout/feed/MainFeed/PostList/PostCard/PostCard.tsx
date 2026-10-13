import { PostActions } from "./PostActions/PostActions";
import PostHeader from "./PostHeader/PostHeader";
import TopCommentPreview from "./TopCommentPreview/TopCommentPreview";
import type { Post } from "../../../../../../interface/post";
import PostStats from "./PostStats/PostStats";
import PostContent from "./PostContent/PostContent";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { image } = post;
  return (
    <article className="overflow-visible rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Padded container for Header and Text */}
      <div className="p-4">
        <PostHeader
         post={post}
        />
        <PostContent post={post} />
      </div>

      {/* Full-width image container (Direct child of article, outside p-4) */}
      {image && (
        <div className="max-h-[620px] overflow-hidden border-y border-slate-200">
          <button type="button" className="group relative block w-full cursor-pointer">
            <img alt="post" className="w-full object-cover" src={image} />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10"></span>
          </button>
        </div>
      )}

      <PostStats
        post={post}
      />
      <div className="mx-4 border-t border-slate-200"></div>
      <PostActions />
      <TopCommentPreview topComment={post.topComment} />
    </article>
  );
}
