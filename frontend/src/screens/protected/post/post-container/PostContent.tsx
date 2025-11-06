import { ItemContent, ItemTitle } from "@/components/ui/item";
import type { I_Post } from "@/interface";

type I_Props = Pick<I_Post, "caption" | "media">;

export const PostContent = ({ caption, media }: I_Props) => {
  return (
    <ItemContent className="space-y-2 overflow-hidden">
      <ItemTitle>{caption}</ItemTitle>

      {media && media.length > 0 && (
        <div className="flex flex-row overflow-x-auto gap-2">
          {media.map((media, index) => (
            <picture
              key={index}
              className="rounded-lg min-w-40 active:scale-95 duration-200 cursor-pointer overflow-hidden border"
            >
              <img src={media.url} alt="@shadcn" className="object-contain" />
            </picture>
          ))}
        </div>
      )}
    </ItemContent>
  );
};
