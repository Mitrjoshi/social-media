import { Divider } from "@/components/shared/divider/Divider";
import { Card } from "@/components/ui/card";
import { data } from "@/data";
import { PostContainer } from "@/screens/protected/post/post-container/PostContainer";

export const Index = () => {
  return (
    <div className="">
      <Card className="rounded-3xl p-0 w-full overflow-auto">
        <section>
          {data.map((item, i) => (
            <>
              <PostContainer post={item} key={i} />
              {i < 99 && <Divider />}
            </>
          ))}
        </section>
      </Card>
    </div>
  );
};
