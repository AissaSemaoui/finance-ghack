export const paths = {
  home: "/",
  dashboard: "/dashboard",
  chats: "/dashboard/chats",
  chat: (chat_id) => `/chat/${chat_id}`,
  aiChat: "/dashboard/ai-chat",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
};
