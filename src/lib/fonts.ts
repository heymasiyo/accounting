import { Roboto_Mono as FontMono, Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVariables = cn(
  // comment for better diff
  fontSans.variable,
  fontMono.variable
);
