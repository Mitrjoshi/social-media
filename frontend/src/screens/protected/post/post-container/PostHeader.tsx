import { EllipsisIcon, Link2 } from "lucide-react";
import { PostButton } from "./PostButton";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PostAvatar } from "./PostAvatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";
import type { I_Post, I_User } from "@/interface";
import { formatRelativeTime } from "../utils/formatRelativeTime";
import { toast } from "sonner";

type I_Props = Pick<I_User, "username" | "profile_name" | "avatar" | "bio"> &
  Pick<I_Post, "timestamp"> & {
    url: string;
  };

export const PostHeader = ({
  username,
  profile_name,
  avatar,
  timestamp,
  bio,
  url,
}: I_Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast.success("Copied");
  };

  return (
    <ItemHeader className="flex items-center justify-between h-5 w-full">
      <section className="flex gap-2 items-center">
        <HoverCard>
          <HoverCardTrigger onClick={() => {}}>
            <Link className="cursor-pointer" to={`/@${username}`}>
              <ItemTitle className="font-semibold cursor-pointer hover:underline duration-200">
                {username}
              </ItemTitle>
            </Link>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-4">
              <Link
                to={`/@${username}`}
                className="flex cursor-pointer items-center justify-between"
              >
                <div>
                  <p className="text-xl font-bold">{profile_name}</p>
                  <p className="text-shadow-muted">{username}</p>
                </div>
                <div>
                  <PostAvatar url={avatar} size="size-16" />
                </div>
              </Link>

              <div className="text-sm space-y-2">
                <p className="text-shadow-muted w-full text-ellipsis">{bio}</p>
                <p className="text-muted-foreground">1,212 followers</p>
              </div>

              <div className="w-full">
                <Button className="w-full" size="sm">
                  Follow
                </Button>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <span className="h-1 w-1 bg-muted-foreground rounded-full" />
        <ItemDescription>
          {formatRelativeTime(timestamp.toISOString())}
        </ItemDescription>
      </section>

      <section>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <PostButton
              icon={<EllipsisIcon className="text-muted-foreground size-4" />}
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="rounded-xl p-2">
            <DropdownMenuItem
              onClick={handleCopy}
              className="w-54 rounded-lg py-1!"
            >
              <div className="flex items-center justify-between w-full">
                <DropdownMenuLabel className="text-[1rem] font-semibold">
                  Copy Link
                </DropdownMenuLabel>

                <Link2 className="size-5 text-primary -rotate-45" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </ItemHeader>
  );
};
