import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "./globals.css";
import HeaderBackground from "@/components/headerbackground/HeaderBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhel | Personal Portfolio Website",
  description:
    "Welcome to Suhel's portfolio. As a talented Frontend developer, Suhel Khan invites you to explore his projects, skills, experience, and interests. Dive into a showcase of innovative web development.",
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
  authors: [{ url: "https://suhelkhan.com", name: "Suhel khan" }],
  twitter: {
    card: "summary_large_image",
    description:
      "Welcome to Suhel's portfolio! Talented Frontend developer specializing in JavaScript, React, and cutting-edge web technologies. Explore projects, skills, and passion for intuitive user experiences. #FrontendDev #WebDev",
  },
  metadataBase: new URL("https://suhelkhan.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  category: "Frontend Developer",
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
        <div className="sticky  top-0 z-50 mx-auto w-full bg-darkNav backdrop-blur-md ">
          <Navbar />
        </div>
        <main className="relative z-10 overflow-hidden">
          <HeaderBackground />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-1HT428CT66" />
    </html>
  );
}
