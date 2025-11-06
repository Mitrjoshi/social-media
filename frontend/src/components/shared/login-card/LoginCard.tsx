import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

export const LoginCard = () => {
  return (
    <div className="sticky top-16">
      <Card className="px-6! rounded-3xl w-sm p-6 gap-4">
        <div className="space-y-2">
          <h1 className="font-bold text-xl text-center text-nowrap w-full">
            Log in or sign up for Strings
          </h1>
          <p className="text-muted-foreground text-center text-nowrap">
            <span>See what people are talking about and</span> <br />{" "}
            <span>join the conversation.</span>
          </p>
        </div>

        <div className="p-4 py-6 bg-background flex gap-4 items-center justify-center rounded-3xl">
          <Instagram />
          <p className="font-semibold">Continue with Instagram</p>
        </div>

        <div>
          <p className="text-muted-foreground text-center">
            Log in with username instead
          </p>
        </div>
      </Card>
    </div>
  );
};
