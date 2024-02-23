import { Outlet } from "react-router-dom";

import { Sidebar } from "./components/sidebar";

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;
