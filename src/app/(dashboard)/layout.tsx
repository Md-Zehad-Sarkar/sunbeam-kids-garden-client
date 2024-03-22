import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Sunbeam kids garden user dashboard",
};
const DashBoardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default DashBoardLayout;
