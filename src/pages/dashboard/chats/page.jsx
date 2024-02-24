import { CardsChat } from "@/components/chat";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const UserCard = () => {
  return (
    <div className="flex items-center gap-2 py-4 px-2 border border-b rounded-md">
      <Avatar>
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <p>Aissa Semaoui</p>
    </div>
  );
};

const SideChat = () => {
  return (
    <Card className="h-full space-y-2 p-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <UserCard key={index} />
      ))}
    </Card>
  );
};

const ChatsPage = () => {
  return (
    <div className="flex gap-2 h-full">
      <div className="w-64">
        <SideChat />
      </div>
      <div className="flex-1">
        <CardsChat />
      </div>
    </div>
  );
};

export default ChatsPage;
