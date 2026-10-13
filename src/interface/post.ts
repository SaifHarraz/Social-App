import type { ApiResponse } from "./apiResponse";
import type { Comment } from "./comment";
import type { User } from "./user";


export interface Posts {
  data: Post[]
}
export interface Post {
  _id: string
  privacy: "public" | "private"
  user: User
  sharedPost: any
  likes: string[]
  createdAt: string
  commentsCount: number
  topComment?: Comment
  sharesCount: number
  likesCount: number
  isShare: boolean
  id: string
  sharedPostUnavailable?: boolean
  bookmarked: boolean
  body?: string
  image?: string
}
export type PostResponse=ApiResponse<Posts>
// export interface FriendSuggestion {
//   id: string;
//   name: string;
//   username: string;
//   avatarUrl: string;
//   followersCount: number;
// }
// export interface UserProfile {
//   name: string;
//   username: string;
//   avatarUrl: string;
//   followersCount?: number;
// }