import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderBackground from "@/components/headerbackground/HeaderBackground";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhel | Persona Portfolio Website",
  description:
    "Welcome to Suhel's portfolio. I'm  a Frontend developer Explore my projects, skills, experience and my interests.",
  keywords: [
    "portfolio",
    "Suhel Khan",
    "developer",
    "projects",
    "skills",
    "experience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderBackground />
        <div className="relative z-10 px-12">{children}</div>
      </body>
    </html>
  );
}
