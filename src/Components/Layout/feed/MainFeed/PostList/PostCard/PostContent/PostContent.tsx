import type { Post } from "../../../../../../../interface/post";

interface PostContentProps {
  post: Post;
}

export default function PostContent({ post }:PostContentProps) {
  return (
   <div className="mt-3">
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{post.body}</p>
    </div>
  );
};