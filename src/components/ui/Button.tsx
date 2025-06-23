import type { ReactNode } from "react";

const Button = ({
  icon,
  btnTitle,
  className,
}: {
  icon?: ReactNode;
  btnTitle: string;
  className: string;
}) => {
  return (
    <button
      className={`px-3 md:px-5 py-1.5 md:py-2 rounded-md text-lg ${className} flex items-center gap-2 cursor-pointer active:scale-95 duration-1000`}
    >
      <span>{icon}</span> <span>{btnTitle}</span>
    </button>
  );
};

export default Button;
