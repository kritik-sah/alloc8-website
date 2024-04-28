import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenWalletAddress(walletAddress: string): string {
  if (walletAddress.length <= 6) {
    return walletAddress;
  } else {
    return `${walletAddress.substring(0, 6)}...${walletAddress.slice(-3)}`;
  }
}
