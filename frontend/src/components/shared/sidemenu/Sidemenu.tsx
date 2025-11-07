import {
  ChartNoAxesGantt,
  Heart,
  House,
  Moon,
  Pin,
  Plus,
  Search,
  Sun,
  User,
} from "lucide-react";
import { SidemenuItem } from "./SidemenuItem";
import { useLocation } from "react-router";
import { useTheme } from "@/components/theme/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";

const MAIN_COLOR = "var(--color-primary)";

export const Sidemenu = () => {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

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
          src={theme === "light" ? "/vite-light.svg" : "/vite.svg"}
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

        <DropdownMenu>
          <DropdownMenuTrigger>
            <SidemenuItem
              path="/"
              iconActive
              icon={
                <ChartNoAxesGantt className="size-7 text-sidebar-ring group-hover:text-primary duration-200" />
              }
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="rounded-xl p-2 ml-2">
            <ButtonGroup>
              <Button
                className="w-20"
                onClick={() => setTheme("light")}
                variant={theme === "light" ? "outline" : "ghost"}
              >
                <Sun className="text-muted-foreground size-5" />
              </Button>
              <ButtonGroupSeparator />
              <Button
                className="w-20"
                onClick={() => setTheme("dark")}
                variant={theme === "dark" ? "outline" : "ghost"}
              >
                <Moon className="text-muted-foreground size-5" />
              </Button>
              {theme !== "dark" && <ButtonGroupSeparator />}
              <Button
                className="w-20"
                onClick={() => setTheme("system")}
                variant={theme === "system" ? "outline" : "ghost"}
              >
                <p className="text-muted-foreground">Auto</p>
              </Button>
            </ButtonGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </aside>
  );
};
