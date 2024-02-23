import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HeaderBackground from "@/components/headerbackground/HeaderBackground";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/Navbar";

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
        <div className="relative z-10 mx-auto w-full ">
          <HeaderBackground />
          <div className="navbar-bg fixed left-[50%] top-6 z-50 w-[90%] translate-x-[-50%] md:top-8 lg:max-w-[64rem] ">
            <Navbar />
          </div>
          <main className="mx-auto px-4 sm:max-w-[80rem]">{children}</main>
        </div>
      </body>
    </html>
  );
}
