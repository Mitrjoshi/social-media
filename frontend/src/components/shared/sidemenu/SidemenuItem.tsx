import type { ButtonHTMLAttributes, ReactElement } from "react";
import { Link } from "react-router";

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  active?: boolean;
  iconActive?: boolean;
  path: string;
}

export const SidemenuItem = ({
  icon,
  active,
  iconActive,
  path,
  ...rest
}: I_Props) => {
  return (
    <Link
      to={path}
      data-active={active}
      data-icon-active={iconActive}
      className="cursor-pointer data-[icon-active=true]:bg-transparent data-[active=true]:bg-secondary active:scale-90 w-[78%] aspect-[1/0.9] flex justify-center items-center rounded-xl hover:bg-secondary duration-200 group"
    >
      <button className="cursor-pointer" {...rest}>
        {icon}
      </button>
    </Link>
  );
};
