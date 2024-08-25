import BackgroundBeamsWithCollisionDemo from "@/components/example/background-beams-with-collision-demo";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ShadcnChat from "@/components/example/shadcn_chat";

export default function HeroHome() {
  return (
    <div className="flex items-center justify-center">
      <SignedIn>
        <ShadcnChat />
      </SignedIn>
      <SignedOut>
        <BackgroundBeamsWithCollisionDemo />
      </SignedOut>
    </div>
  );
}
