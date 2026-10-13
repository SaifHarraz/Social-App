export interface UserProfile {
  name: string;
  username: string;
  avatarUrl: string;
  followersCount?: number;
}

export interface Post {
  id: string;
  author: UserProfile;
  timestamp: string;
  visibility: string;
  content: string;
  mediaUrl?: string;
  likesCount: number;
  sharesCount: number;
  commentsCount: number;
  topComment?: {
    author: UserProfile;
    text: string;
  };
}

export interface FriendSuggestion {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  followersCount: number;
}