import axios from "axios";
import { BrainCircuit, Send } from "lucide-react";
import * as React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function CardsChat() {
  const [isLoading, setIsLoading] = React.useState(false);

  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputLength = input.trim().length;

  const sendPomptMutation = async (prompt) =>
    axios.post("/api/ask", {
      userMessage: prompt,
    });

  const onSubmit = async (prompt) => {
    try {
      setIsLoading(true);
      const res = await sendPomptMutation(prompt);
      console.log(res);
      setMessages((prev) => [
        ...prev,
        { role: "user", content: prompt },
        { role: "agent", content: res.data?.botResponse },
      ]);
    } catch (err) {
      console.log(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="h-full w-full flex flex-col">
        <CardHeader>
          <div className="flex items-center gap-2 mx-auto">
            <Avatar>
              <AvatarFallback>
                <BrainCircuit />
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-md font-medium leading-none">
                AI-Finance Guru
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                  message.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (inputLength === 0) return;
              onSubmit(input);
              setInput("");
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              id="message"
              placeholder="Type your message..."
              className="flex-1"
              autoComplete="off"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button type="submit" size="icon" disabled={inputLength === 0}>
              <Send className="h-4 w-4" />
              <span className="sr-only">
                {isLoading ? "Loading..." : "Send"}
              </span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
