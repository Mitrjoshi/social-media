import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface I_Props {
  size?: string;
  url: string;
}

export const PostAvatar = ({ size = "size-9", url }: I_Props) => {
  return (
    <Avatar className={`${size} border rounded-full`}>
      <AvatarImage src={url} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
