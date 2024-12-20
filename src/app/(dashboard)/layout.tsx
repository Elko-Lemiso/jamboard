import React from "react";
import { Sidebar } from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";

interface layoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: layoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <OrgSidebar />
          <div className="h-full w-full flex-1">
            <Navbar />
            {children}</div>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;
