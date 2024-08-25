import { UserData } from "../../app/data";
import ChatTopbar from "./chat-topbar";
import { Chatbox } from "../Chatbox";
import React from "react";

interface ChatProps {
  selectedUser: UserData;
}

export function Chat({ selectedUser }: ChatProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />
      <Chatbox selectedUser={selectedUser} />
    </div>
  );
}
