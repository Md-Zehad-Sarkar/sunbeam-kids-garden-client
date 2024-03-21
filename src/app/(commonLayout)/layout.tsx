import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <Navbar />
      <div className="min-h-screen"> {children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayoutPage;
