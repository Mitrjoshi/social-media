import { useLocation, useNavigate, useParams } from "react-router";

export const ProfileTabs = () => {
  const { pathname } = useLocation();
  const { user_name } = useParams();
  const navigate = useNavigate();

  const ARRAY = [
    {
      name: "Strings",
      path: `/${user_name}`,
      active: pathname === `/${user_name}`,
    },
    {
      name: "Replies",
      path: "replies",
      active: pathname.includes("replies"),
    },
    {
      name: "Media",
      path: "media",
      active: pathname.includes("media"),
    },
    {
      name: "Reposts",
      path: "reposts",
      active: pathname.includes("reposts"),
    },
  ];

  return (
    <div className="grid grid-cols-4">
      {ARRAY.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          data-active={item.active}
          className="w-full flex cursor-pointer justify-center items-center border-b pb-3 data-[active=true]:border-primary"
        >
          <p
            data-active={item.active}
            className="data-[active=true]:text-primary text-muted-foreground"
          >
            {item.name}
          </p>
        </button>
      ))}
    </div>
  );
};
