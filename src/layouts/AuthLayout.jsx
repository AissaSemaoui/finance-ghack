import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen bg-[url('@/assets/auth-bg.webp')] bg-no-repeat bg-contain">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
