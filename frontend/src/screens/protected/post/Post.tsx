import { Card } from "@/components/ui/card";
import { data } from "@/data";
import { PostContainer } from "./post-container/PostContainer";
import { useParams } from "react-router";
import type { I_Post } from "@/interface";

export const Post = () => {
  const { post_id } = useParams();

  const post = data.find((item) => item.id === Number(post_id));

  return (
    <div>
      <Card className="rounded-3xl p-0 w-full overflow-auto">
        <section>
          <PostContainer post={post as I_Post} />
        </section>
      </Card>
    </div>
  );
};
