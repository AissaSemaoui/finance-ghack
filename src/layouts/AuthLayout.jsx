import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
