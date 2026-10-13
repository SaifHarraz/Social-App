import type { ApiResponse } from './apiResponse';
import {type User } from './user';
export interface Comment {
  _id: string
  content: string
  commentCreator: User
  post: string
  parentComment: Comment
  likes: string[]
  createdAt: string
}

export interface Comments{
  comments:Comment[]
} 
export type CommentResponse=ApiResponse<Comments>
