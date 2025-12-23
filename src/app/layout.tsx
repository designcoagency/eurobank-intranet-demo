import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Internal Communication Portal",
  description: "Unified internal communication ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body
        className={cn(
          "antialiased bg-[#F3F4F6] text-[#111827]",
          "font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
