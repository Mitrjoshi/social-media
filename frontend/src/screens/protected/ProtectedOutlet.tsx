import { Header } from "@/components/shared/header/Header";
import { LoginCard } from "@/components/shared/login-card/LoginCard";
import { Sidemenu } from "@/components/shared/sidemenu/Sidemenu";
import { Outlet } from "react-router";

export const ProtectedOutlet = () => {
  return (
    <div className="flex h-full">
      <Sidemenu />

      <div className="mx-auto px-4 max-w-5xl w-full flex gap-4 h-full pb-8">
        <div className="w-full">
          <Header />

          <div className="w-[99%] mx-auto">
            <Outlet />
          </div>
        </div>
        <div className="mt-16 lg:block hidden">
          <LoginCard />
        </div>
      </div>
    </div>
  );
};
