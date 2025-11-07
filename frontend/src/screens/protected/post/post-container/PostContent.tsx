import { ItemContent, ItemTitle } from "@/components/ui/item";
import type { I_Post } from "@/interface";
import { Link } from "react-router";

type I_Props = Pick<I_Post, "caption" | "media"> & {
  url: string;
};

export const PostContent = ({ caption, media, url }: I_Props) => {
  return (
    <ItemContent className="space-y-2 overflow-hidden">
      <ItemTitle>{caption}</ItemTitle>

      {media && media.length > 0 && (
        <div className="flex flex-row overflow-x-auto gap-2">
          {media.map((media, index) => (
            <Link
              to={url}
              state={{
                open_media: true,
                media_url: media.url,
              }}
              className="rounded-lg min-w-40 active:scale-95 duration-200 cursor-pointer overflow-hidden border"
            >
              <picture key={index}>
                <img src={media.url} alt="@shadcn" className="object-contain" />
              </picture>
            </Link>
          ))}
        </div>
      )}
    </ItemContent>
  );
};
