export const paths = {
  home: "/",
  dashboard: "/dashboard",
  chats: "/chats",
  chat: (chat_id) => `/chat/${chat_id}`,
  aiChat: "/ai-chat",
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
};
