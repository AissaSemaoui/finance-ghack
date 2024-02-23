export const paths = {
  home: "/",
  dashboard: "/dashboard",
  chats: "/dashboard/chats",
  chat: (chat_id) => `/chat/${chat_id}`,
  aiChat: "/dashboard/ai-chat",
  expert:"/dashboard/experts",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
};
