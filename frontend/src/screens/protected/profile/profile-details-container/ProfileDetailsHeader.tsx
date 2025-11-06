import { PostAvatar } from "../../post/post-container/PostAvatar";
import { Button } from "@/components/ui/button";
import type { I_User } from "@/interface";
import { CircleEllipsis, Instagram } from "lucide-react";

type I_Prop = Pick<I_User, "avatar" | "bio" | "profile_name" | "username">;

export const ProfileDetailsHeader = ({
  avatar,
  profile_name,
  username,
  bio,
}: I_Prop) => {
  return (
    <>
      <div className="flex justify-between w-full gap-4 items-center">
        <div>
          <p className="text-3xl font-bold">{profile_name}</p>
          <p className="">{username}</p>
        </div>
        <div>
          <PostAvatar url={avatar} size="h-20 w-20" />
        </div>
      </div>

      <div>
        <p className="">{bio}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <p className="text-muted-foreground text-sm">2, 413 followers</p>
          <span className="h-1 w-1 bg-muted-foreground rounded-full mt-1" />
          <p className="text-muted-foreground hover:underline text-sm cursor-pointer">
            leesean.read.cv
          </p>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size={"icon-lg"} className="rounded-full">
            <Instagram className="size-6" />
          </Button>
          <Button variant="ghost" size={"icon-lg"} className="rounded-full">
            <CircleEllipsis className="size-6" />
          </Button>
        </div>
      </div>

      <div className="w-full gap-2 grid grid-cols-2 mt-4">
        <Button size="sm">Follow</Button>
        <Button size="sm" variant={"outline"}>
          Mention
        </Button>
      </div>
    </>
  );
};
