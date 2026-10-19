import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import HeaderBackground from "@/components/headerbackground/HeaderBackground";
import MouseFollowerComponent from "@/components/mouseFollower/MouseFollower";
import Animations from "@/components/animations/Animations";
import PageTransition from "@/components/pageTransition/PageTransition";
import { THEME_STORAGE_KEY } from "@/lib/theme";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suhel Khan | Frontend & Webflow Developer",
  description:
    "Suhel Khan is a frontend and Webflow developer who builds fast, animated, pixel-perfect websites with Webflow, GSAP, Next.js and React. Explore selected client work and side projects.",
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
      "Frontend & Webflow developer building fast, animated websites with Webflow, GSAP, Next.js and React. See selected client work and side projects.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Applies the saved theme before first paint (light by default), and
            lets CSS pre-hide animated content only when JS will reveal it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')d.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={
          inter.className +
          " bg-page text-fg"
        }
      >
        <SpeedInsights />
        <MouseFollowerComponent />
        {/* <CursorBubbles /> */}
        <Animations />
        <PageTransition />
        <div className="sticky top-0 z-50 mx-auto w-full border-b border-fg/5 bg-darkNav backdrop-blur-md">
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
