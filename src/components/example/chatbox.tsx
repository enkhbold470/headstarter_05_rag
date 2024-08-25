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
  const onKeyDown = (e: any) => {
    if (e.key == "Enter") {
      console.log("You hit enter.");
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex flex-col gap-2 overflow-y-scroll h-[400px] items-end">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`text-${message.sender} border-2 border-blue-500 rounded-full p-2`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="flex rounded gap-1">
          <Input
            placeholder="Type your message here."
            className="rounded opacity-50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <Button
            variant="outline"
            className="rounded px-4 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSendMessage}
          >
            <IconSend />
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
