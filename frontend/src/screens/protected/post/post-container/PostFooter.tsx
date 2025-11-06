import { Heart, MessageCircle, Repeat, Send } from "lucide-react";
import { PostButton } from "./PostButton";
import { ItemFooter } from "@/components/ui/item";

export const PostFooter = () => {
  return (
    <ItemFooter className="flex justify-start items-center gap-2">
      <PostButton
        onClick={(e) => {
          e.preventDefault();
        }}
        label="20"
        icon={<Heart className="text-muted-foreground size-5" />}
      />

      <PostButton
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={<MessageCircle className="text-muted-foreground size-5" />}
      />

      <PostButton
        onClick={(e) => {
          e.preventDefault();
        }}
        icon={<Repeat className="text-muted-foreground size-5" />}
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
