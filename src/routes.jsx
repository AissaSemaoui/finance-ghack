import { Outlet, createBrowserRouter } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import HomePage from "@/pages/home/page";
import LoginPage from "@/pages/auth/login/page";
import RegisterPage from "@/pages/auth/register/page";
import DashboardPage from "@/pages/dashboard/page";

import { paths } from "@/configuration";
import ChatsPage from "./pages/dashboard/chats/page";
import AiChatPage from "./pages/dashboard/ai-chat/page";

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
      {
        path: paths.dashboard,
        element: <DashboardPage />,
        children: [
          {
            path: paths.chats,
            element: <ChatsPage />,
          },
          {
            path: paths.aiChat,
            element: <AiChatPage />,
          },
        ],
      },
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
