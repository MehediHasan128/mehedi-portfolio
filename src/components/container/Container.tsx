import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-[90%] 2xl:w-[80%] mx-auto pt-10 md:pt-20 pb-20 md:pb-24">{children}</div>;
};

export default Container;
