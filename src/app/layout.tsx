import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });

export const metadata: Metadata = {
  title: "Alloc8 - Maximise Points & Yield farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-inter bg-dark text-light",
          inter.variable,
          dmSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
