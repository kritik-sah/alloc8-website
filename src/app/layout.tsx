import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmSans" });

export const metadata: Metadata = {
  title: "Alloc8 - On-Chain Asset Management",
  description:
    "Whether you're a Pro-manager, Degen, or a 1000x spotter, Alloc8 offers you the most trustless and seamless way to create vaults & raise fund allocation.",
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
