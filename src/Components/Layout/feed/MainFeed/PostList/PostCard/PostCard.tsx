import React from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostContent } from "./PostContent/PostContent";
import { PostStats } from "./PostStats/PostStats";
import { PostActions } from "./PostActions/PostActions";
import { TopCommentPreview } from "./TopCommentPreview/TopCommentPreview";
import type { Post } from "../../../../../../interface/feed";
import { Card } from "@heroui/react";


interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="overflow-visible rounded-xl border border-slate-200 bg-white shadow-sm">
  <Card.Header className="p-4">
    <PostHeader
      author={post.author}
      timestamp={post.timestamp}
      visibility={post.visibility}
    />
  </Card.Header>

  <Card.Content className="p-4 pt-0">
    <PostContent
      content={post.content}
      mediaUrl={post.mediaUrl}
    />
  </Card.Content>

  <PostStats
    likesCount={post.likesCount}
    sharesCount={post.sharesCount}
    commentsCount={post.commentsCount}
  />

  <div className="mx-4 border-t border-slate-200" />

  <Card.Footer className="flex flex-col items-stretch p-0">
    <PostActions />
    <TopCommentPreview topComment={post.topComment} />
  </Card.Footer>
</Card>
  );
};