import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import Link from "next/link";
import Image from "next/image";
export default function ShadcnChat() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className=" flex h-[calc(100dvh)] flex-col lg:flex-row items-center justify-center p-4 md:px-24 py-32 gap-4">
      <div className=" max-w-5xl w-full items-end gap-4">
        <Link href="/" className="text-4xl font-bold">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          <h1 className="text-4xl font-bold mt-2">Welcome to the ProfGuru!</h1>
        </Link>
        <p>RateMyProfessor AI Chatbot!</p>
      </div>

      <div className="z-10 border rounded-lg max-w-5xl lg:w-[64rem] h-full text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
    </main>
  );
}
