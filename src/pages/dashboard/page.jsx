import { Outlet } from "react-router-dom";

import { Sidebar } from "./components/sidebar";

const DashboardPage = () => {
  return (
    <div className="flex flex-row max-w-[100vw] overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 max-w-full p-4 pr-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
