import { Outlet, createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import HomePage from "@/pages/home/page";
import LoginPage from "@/pages/auth/login/page";

import { paths } from "@/configuration";
import RegisterPage from "./pages/auth/register/page";

const routePaths = [
  {
    path: paths.home,
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      { path: paths.home, element: <HomePage /> },
      { path: paths.dashboard, element: <h1>dashboard</h1> },
    ],
  },
  {
    paths: "/auth",
    element: <AuthLayout />,
    children: [
      { path: paths.auth.login, element: <LoginPage /> },
      { path: paths.auth.register, element: <RegisterPage /> },
    ],
  },
];

export const routes = createBrowserRouter(routePaths);
