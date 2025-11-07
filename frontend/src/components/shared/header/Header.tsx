import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router";

export const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { post_id } = useParams();

  const prettify = (path: string) => {
    if (path === "/") return "Home";
    if (post_id) return "String";
    const last = path.split("/").filter(Boolean).pop()!;
    const clean = decodeURIComponent(last).replace(/-/g, " ");
    if (clean.startsWith("@")) return clean.replace(/@/g, "");
    return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
  };

  return (
    <div className="w-full top-0 bg-background border-0 sticky z-99 flex justify-center items-center">
      <div className="relative w-full flex justify-center items-center">
        {pathname !== "/" && (
          <Button
            onClick={() => navigate(-1)}
            className="absolute left-4 rounded-full"
            variant={"outline"}
            size={"icon-sm"}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="py-5">
          <p className="font-semibold">{prettify(pathname)}</p>
        </div>
      </div>
    </div>
  );
};
