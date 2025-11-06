import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Index } from "./protected/Index";
import { ProtectedOutlet } from "./protected/ProtectedOutlet";
import { Search } from "./protected/search/Search";
import { Notifications } from "./protected/notifications/Notifications";
import { Profile } from "./protected/profile/Profile";
import { SplashScreen } from "@/layouts/splash/SplashScreen";
import { Post } from "./protected/post/Post";
import { Replies } from "./protected/profile/replies/Replies";
import { ProfileMedias } from "./protected/profile/media/ProfileMedias";
import { Reposts } from "./protected/profile/reposts/Reposts";
import { ProfileRoute } from "./protected/profile/ProfileRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedOutlet />,
    children: [
      { index: true, element: <Index /> },
      { path: "search", element: <Search /> },
      { path: "notifications", element: <Notifications /> },
      {
        path: ":user_name",
        element: <ProfileRoute />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "replies",
            element: <Replies />,
          },
          {
            path: "media",
            element: <ProfileMedias />,
          },
          {
            path: "reposts",
            element: <Reposts />,
          },
        ],
      },
      { path: ":user_name/post/:post_id", element: <Post /> },
    ],
  },
]);

export const Route = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
};
