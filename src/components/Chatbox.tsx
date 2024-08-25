"use client";

import React, { useState, useEffect } from "react";
import { ChatList } from "./chat/chat-list";
import { Message, UserData, loggedInUserData } from "../app/data";

interface ChatboxProps {
  selectedUser: UserData;
}

export function Chatbox({ selectedUser }: ChatboxProps) {
  const [messages, setMessages] = useState<Message[]>(
    selectedUser.messages || []
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkScreenWidth = (): void => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const sendMessage = async (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          [...messages, newMessage].map((msg) => ({
            role: msg.name === loggedInUserData.name ? "user" : "assistant",
            content: msg.message,
          }))
        ),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const aiResponse = await response.text();
      const aiMessage: Message = {
        id: messages.length + 2,
        name: selectedUser.name,
        avatar: selectedUser.avatar,
        message: aiResponse,
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full">
      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
        isLoading={isLoading}
      />
    </div>
  );
}
