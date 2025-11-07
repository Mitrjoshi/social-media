import type { I_Post, I_User } from "./interface";

export const users: I_User[] = [
  {
    id: 1,
    username: "johndoe",
    profile_name: "John Doe",
    avatar: "https://github.com/shadcn.png",
    bio: "Co-founder and CEO of Shadcn.",
  },
  {
    id: 2,
    username: "janedoe",
    profile_name: "Jane Doe",
    avatar: "https://github.com/shadcn.png",
    bio: "Co-founder and CEO of Shadcn.",
  },
  {
    id: 3,
    username: "bobsmith",
    profile_name: "Bob Smith",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    username: "alicejohnson",
    profile_name: "Alice Johnson",
    avatar: "https://github.com/shadcn.png",
    bio: "Co-founder and CEO of Shadcn.",
  },
];

export const data: I_Post[] = [
  {
    id: 1,
    user_id: 1,
    timestamp: new Date(),
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 20,
    comments: 43,
    shares: 10,
    reshares: 3,
    media: [
      {
        url: "https://i.pinimg.com/1200x/18/a4/55/18a4558049811cbe16ed7db8a93bb878.jpg",
      },
      {
        url: "https://i.pinimg.com/1200x/dc/eb/7b/dceb7b53d2cabff6c87455db09031236.jpg",
      },
    ],
  },
  {
    id: 2,
    user_id: 2,
    timestamp: new Date(),
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 30,
    comments: 50,
    shares: 15,
    reshares: 5,
    media: null,
  },
  {
    id: 3,
    user_id: 3,
    timestamp: new Date(),
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 40,
    comments: 60,
    shares: 20,
    reshares: 7,
    media: null,
  },
  {
    id: 4,
    user_id: 2,
    timestamp: new Date(),
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 50,
    comments: 70,
    shares: 25,
    reshares: 9,
    media: [
      {
        url: "https://i.pinimg.com/1200x/dc/eb/7b/dceb7b53d2cabff6c87455db09031236.jpg",
      },
    ],
  },
  {
    id: 5,
    user_id: 4,
    timestamp: new Date(),
    caption: "",
    likes: 60,
    comments: 80,
    shares: 30,
    reshares: 11,
    media: [
      {
        url: "https://i.pinimg.com/736x/85/c8/2c/85c82cb6123945ba5dad312dbc69956b.jpg",
      },
      {
        url: "https://i.pinimg.com/1200x/dc/eb/7b/dceb7b53d2cabff6c87455db09031236.jpg",
      },
      {
        url: "https://i.pinimg.com/1200x/18/a4/55/18a4558049811cbe16ed7db8a93bb878.jpg",
      },
    ],
  },
];
