"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow, IconSend } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ChatBoxComponent() {
  return (
    <div className="flex items-center justify-center">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="flex rounded gap-1">
          <Input
            placeholder="Type your message here."
            className="rounded opacity-50"
          />
          <Button
            variant="outline"
            className=" rounded px-4 bg-blue-500 hover:bg-blue-600 text-white"
          >
            {" "}
            <IconSend />
          </Button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
