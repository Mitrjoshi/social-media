import type { ButtonHTMLAttributes, ReactElement } from "react";

interface I_Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
  active?: boolean;
  iconActive?: boolean;
  label?: string;
}

export const PostButton = ({
  icon,
  label,
  active,
  iconActive,
  ...rest
}: I_Props) => {
  return (
    <button
      data-active={active}
      data-icon-active={iconActive}
      className="cursor-pointer data-[icon-active=true]:bg-transparent data-[active=true]:bg-secondary active:scale-90 flex justify-center gap-2 items-center rounded-full hover:bg-secondary duration-200 group p-2"
      {...rest}
    >
      {icon}
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </button>
  );
};
