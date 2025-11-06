import { Card } from "@/components/ui/card";
import { users } from "@/data";
import type { I_User } from "@/interface";
import { Outlet, useParams } from "react-router";
import { ProfileDetailsHeader } from "./profile-details-container/ProfileDetailsHeader";
import { ProfileTabs } from "./profile-details-container/ProfileTabs";

export const ProfileRoute = () => {
  const { user_name } = useParams();

  const user = users.find(
    (item) => `@${item.username}` === user_name
  ) as I_User;

  return (
    <div className="w-full">
      <Card className="rounded-3xl p-0">
        <div className="p-4 pb-0">
          <ProfileDetailsHeader
            avatar={user.avatar}
            profile_name={user.profile_name}
            username={user.username}
            bio={user.bio}
          />
        </div>

        <ProfileTabs />

        <div className="p-4">
          <Outlet />
        </div>
      </Card>
    </div>
  );
};
