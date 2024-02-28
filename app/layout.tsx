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
  title: "Suhel | Personal Portfolio Website",
  description:
    "Welcome to Suhel's portfolio. As a talented Frontend developer, Suhel Khan invites you to explore his projects, skills, experience, and interests. Dive into a showcase of innovative web development, featuring expertise in JavaScript, React, and other cutting-edge technologies. Discover Suhel's passion for crafting intuitive user experiences and leveraging the latest tools to bring digital visions to life.",
  keywords: [
    "portfolio",
    "Suhel Khan",
    "frontend",
    "ui engineer",
    "developer",
    "projects",
    "skills",
    "experience",
  ],
  creator: "Suhel khan",
  authors: [{ url: "https://suhel.xyz", name: "Suhel khan" }],
  twitter: {
    card: "summary_large_image",
    description:
      "Welcome to Suhel's portfolio! Talented Frontend developer specializing in JavaScript, React, and cutting-edge web technologies. Explore projects, skills, and passion for intuitive user experiences. #FrontendDev #WebDev",
  },
  metadataBase: new URL("https://suhel.xyz"),
  // openGraph: {
  //   title: "Suhel khan portfolio website",
  //   description:
  //     "Suhel khan is a frontend developer with an experience of 2 years in development with both coding and low code tools",
  //   images: "/opengraph-image.png",
  //   locale: "en_US",
  //   type: "website",
  // },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
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
        <main className="relative z-10 overflow-hidden">
          <HeaderBackground />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
