import { Heart, MessageCircle, Repeat, Send } from "lucide-react";
import { PostButton } from "./PostButton";
import { ItemFooter } from "@/components/ui/item";
import { useState } from "react";
import { useNavigate } from "react-router";

interface I_Props {
  url: string;
}

export const PostFooter = ({ url }: I_Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isReTweet, setIsReTweet] = useState(false);

  const navigate = useNavigate();

  return (
    <ItemFooter className="flex justify-start items-center gap-2">
      <PostButton
        onClick={(e) => {
          e.preventDefault();
          setIsLiked(!isLiked);
        }}
        label="20"
        icon={
          <Heart
            fill={isLiked ? "var(--color-red-600)" : "none"}
            data-liked={isLiked}
            className="text-muted-foreground size-5 data-[liked=true]:text-red-600 data-[liked=true]:scale-[1.2] duration-200"
          />
        }
      />

      <PostButton
        onClick={(e) => {
          e.preventDefault();
          navigate(url);
        }}
        icon={<MessageCircle className="text-muted-foreground size-5" />}
      />

      <PostButton
        onClick={(e) => {
          e.preventDefault();
          setIsReTweet(!isReTweet);
        }}
        icon={
          <Repeat
            data-liked={isReTweet}
            className="text-muted-foreground size-5 data-[liked=true]:text-primary data-[liked=true]:rotate-180 data-[liked=true]:scale-[1.2] duration-200"
          />
        }
      />

      <PostButton
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={<Send className="text-muted-foreground size-5" />}
      />
    </ItemFooter>
  );
};
