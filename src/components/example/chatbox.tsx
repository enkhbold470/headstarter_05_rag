"use client";

import React, { useState, useEffect } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconSend } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatBoxComponent() {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    const newMessage = {
      text: input,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex items-center justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex rounded gap-1">
          <Input
            placeholder="Type your message here."
            className="rounded opacity-50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="outline"
            className=" rounded px-4 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSendMessage}
          >
            <IconSend />
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
