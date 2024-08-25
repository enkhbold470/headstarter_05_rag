"use client";

import { useState } from "react";
import Pricing from "@/components/example/pricing";
export default function PremiumPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubscribe = () => {
    setIsRedirecting(true);
    // Redirect to the contact page
    window.location.href = "mailto:i@enk.icu";
    setTimeout(() => {
      setIsRedirecting(false);
    }, 3000);
  };
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="h-full w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="-top-40 left-0 md:left-60 md:-top-20" />
        <div className="mt-10 p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <Pricing />

          <div className="mt-4 font-normal text-base  max-w-lg text-center mx-auto ">
            <p>Upgrade to our premium service to unlock exclusive features!</p>

            <button
              className="mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              onClick={handleSubscribe}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fffb08_0%,#ff0000_50%,#FFC857_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
                {isRedirecting ? "Redirecting..." : "Contact for Enterprise"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
