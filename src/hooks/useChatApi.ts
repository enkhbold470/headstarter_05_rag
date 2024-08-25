"use client";

import { useState } from "react";

const useChatApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (message: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            role: "user",
            content: message.trim(),
          },
        ]),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data; // Return the response data
    } catch (error) {
      setError(error as string);
      console.error("Error sending message:", error);
      return null; // Return null on error
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};

export default useChatApi;
