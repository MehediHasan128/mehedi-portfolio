import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-[80%] mx-auto pt-20">{children}</div>;
};

export default Container;
