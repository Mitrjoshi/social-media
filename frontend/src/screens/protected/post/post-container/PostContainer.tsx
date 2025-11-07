import { Item } from "@/components/ui/item";
import { PostAvatar } from "./PostAvatar";
import { PostContent } from "./PostContent";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import type { I_Post, I_User } from "@/interface";
import { users } from "@/data";

export const PostContainer = ({ post }: { post: I_Post }) => {
  const user = users.find((item) => item.id === post.user_id) as I_User;

  const URL = `/@${user?.username}/post/${post.id}`;

  return (
    <Item>
      <section className="flex w-full flex-row items-start gap-4">
        <PostAvatar url={user?.avatar as string} />

        <section className="w-full space-y-2">
          <PostHeader
            url={URL}
            avatar={user?.avatar}
            username={user?.username}
            profile_name={user?.profile_name}
            timestamp={post.timestamp}
            bio={user?.bio}
          />

          <PostContent url={URL} caption={post.caption} media={post.media} />

          <PostFooter url={URL} />
        </section>
      </section>
    </Item>
  );
};
