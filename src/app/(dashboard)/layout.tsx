import { Sidebar } from "@/components/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        <div className="fixed top-0 left-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px]">
          <div className="mx-auto max-w-screen-2xl h-full">
            {/* TO DO NAVBAR */}
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
