import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
import FloatingNavbar from "@/components/example/floating-navbar-demo";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = {
  title: "Who is the best professor?",
  description: "Find the best professor for you",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <FloatingNavbar />
          {children}
          <footer className="w-full flex justify-center items-end">
            <SiteFooter />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
