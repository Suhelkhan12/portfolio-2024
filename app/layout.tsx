import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

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
      <body className={inter.className + " bg-bgLight"}>
        <div className="relative z-10 mt-4 flex justify-center text-3xl font-normal sm:hidden ">
          <Link href="/">
            <FaCode />
          </Link>
        </div>
        <div className="fixed left-[50%] top-6 z-50 hidden w-[90%] translate-x-[-50%] rounded-xl border border-navLight bg-navLight backdrop-blur-md sm:block md:top-8 lg:max-w-[64rem] ">
          <Navbar />
        </div>
        <main className="relative z-10 mx-auto px-4 sm:max-w-[80rem]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
