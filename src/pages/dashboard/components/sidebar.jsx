import { Button, buttonVariants } from "@/components/ui/button";
import { paths } from "@/configuration";
import { BrainCircuit, Users, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <nav className="w-16 flex flex-col h-screen shadow-xl p-2">
      <h1 className="text-center py-12 mb-8">Logo</h1>

      <div className="w-min flex-1 space-y-2 mx-auto">
        <Link
          to={paths.aiChat}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          variant="ghost"
          size="icon"
        >
          <BrainCircuit className="w-5 h-5" />
        </Link>
        <Link
          to={paths.chats}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          variant="ghost"
          size="icon"
        >
          <Users className="w-5 h-5" />
        </Link>
      </div>

      <Button variant="destructive" size="icon">
        <LogOut className="w-4 h-4" />
      </Button>
    </nav>
  );
}
