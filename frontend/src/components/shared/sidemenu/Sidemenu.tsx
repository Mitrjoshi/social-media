import {
  ChartNoAxesGantt,
  Heart,
  House,
  Pin,
  Plus,
  Search,
  User,
} from "lucide-react";
import { SidemenuItem } from "./SidemenuItem";
import { useLocation } from "react-router";

const MAIN_COLOR = "var(--color-primary)";

export const Sidemenu = () => {
  const { pathname } = useLocation();

  const ARRAY = [
    {
      path: "/",
      icon: (
        <House
          color={pathname === "/" ? MAIN_COLOR : "currentColor"}
          className="size-7 text-sidebar-ring"
        />
      ),
    },
    {
      icon: (
        <Search
          color={pathname === "/search" ? MAIN_COLOR : "currentColor"}
          className="size-7 text-sidebar-ring"
        />
      ),
      path: "/search",
    },
    {
      icon: (
        <Plus className="size-9 text-sidebar-ring group-hover:text-primary duration-200" />
      ),
      active: true,
      path: "/post",
    },
    {
      icon: (
        <Heart
          color={pathname === "/notifications" ? MAIN_COLOR : "currentColor"}
          className="size-7 text-sidebar-ring"
        />
      ),
      path: "/notifications",
    },
    {
      icon: (
        <User
          color={pathname === "/profile" ? MAIN_COLOR : "currentColor"}
          className="size-7 text-sidebar-ring"
        />
      ),
      path: "/@mitrjoshi",
    },
  ];

  return (
    <aside className="w-[76px] sticky top-0 items-center py-4 flex-col flex justify-between h-screen">
      <section>
        <img
          className="h-[34px] w-[34px] hover:scale-110 duration-200 cursor-pointer"
          src="/vite.svg"
          alt=""
        />
      </section>

      <section className="flex flex-col w-full items-center justify-around gap-2">
        {ARRAY.map((item, index) => (
          <SidemenuItem
            path={item.path}
            active={item.active}
            key={index}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="flex flex-col w-full items-center justify-around gap-2">
        <SidemenuItem
          path="/pin"
          icon={<Pin className="size-7 text-sidebar-ring" />}
        />
        <SidemenuItem
          path="/"
          iconActive
          icon={
            <ChartNoAxesGantt className="size-7 text-sidebar-ring group-hover:text-primary duration-200" />
          }
        />
      </section>
    </aside>
  );
};
