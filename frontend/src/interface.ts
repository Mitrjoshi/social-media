export interface I_User {
  id: number;
  username: string;
  profile_name: string;
  avatar: string;
  bio?: string;
}

export interface I_Post {
  id: number;
  user_id: number;
  timestamp: Date;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  reshares: number;
  media: I_PostMedia[] | null;
}

export interface I_PostMedia {
  url: string;
}
