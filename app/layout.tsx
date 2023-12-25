import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Laws Of Money - James Crypto Guru",
  description: "Laws Of Money by James Crypto Guru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth  bg-primary" lang="en">
      <body className={`${poppins.className} overscroll-x-none bg-primary`}>
        {children}
      </body>
      <Toaster position="top-center" theme="dark" />
    </html>
  );
}
