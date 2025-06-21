import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-[80%] mx-auto py-10">{children}</div>;
};

export default Container;
