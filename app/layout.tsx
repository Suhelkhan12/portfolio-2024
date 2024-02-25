import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import HeaderBackground from "@/components/headerbackground/HeaderBackground";

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
  authors: [{ url: "https://suhel.xyz", name: "Suhel khan" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-darkBg"}>
        <SpeedInsights />
        <div className="fixed top-3 z-[99] flex w-full items-center justify-center text-3xl font-normal text-white sm:hidden ">
          <div className="flex size-[60px] items-center justify-center rounded-full bg-black/50 backdrop-blur-lg">
            <Link href="/">
              <FaCode />
            </Link>
          </div>
        </div>
        <div className="fixed left-[50%] top-6 z-50 hidden w-[90%] translate-x-[-50%] rounded-xl bg-darkNav backdrop-blur-md sm:block md:top-8 lg:max-w-[64rem] ">
          <Navbar />
        </div>
        <main className="relative z-10 overflow-hidden px-4">
          <HeaderBackground />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
