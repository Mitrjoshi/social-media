import { Card } from "@/components/ui/card";
import { data } from "@/data";
import { PostContainer } from "./post-container/PostContainer";
import { useLocation, useNavigate, useParams } from "react-router";
import type { I_Post } from "@/interface";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const Post = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const { open_media, media_url } = state || {};

  const post = data.find((item) => item.id === Number(post_id));

  return (
    <div>
      <Card className="rounded-3xl p-0 w-full overflow-auto">
        <section>
          <PostContainer post={post as I_Post} />
        </section>
      </Card>

      {open_media && media_url && (
        <div className="absolute top-0 left-0 h-screen w-full backdrop-blur-xl z-100 flex justify-center items-center">
          <Button
            onClick={() => navigate(-1)}
            className="absolute scale-120 top-4.5 left-4.5 rounded-full"
            size="icon-lg"
            variant="outline"
          >
            <X className="text-muted-foreground size-6" />
          </Button>
          {media_url && (
            <img src={media_url} alt="" className="h-full object-contain" />
          )}
        </div>
      )}
    </div>
  );
};
