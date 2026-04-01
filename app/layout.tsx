import type { Metadata } from "next";
import "./globals.css";
import { Fraunces, Outfit } from "next/font/google";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosh's Blog",
  description: "Created By Rosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${outfit.variable} font-outfit antialiased bg-background text-foreground`}
      >
        <div className="grain-overlay" aria-hidden="true" />
        <Navbar />
        <main className="relative z-[1] px-4 md:px-6 prose prose-lg mx-auto max-w-3xl">
          {children}
        </main>
        <footer className="relative z-[1] mt-16 mb-8 text-center">
          <div className="gradient-line max-w-3xl mx-auto mb-6" />
          <a
            href="https://www.roshaantech.com"
            className="font-outfit text-sm text-muted hover:text-primary transition-colors duration-200 no-underline"
          >
            &larr; Back to roshaantech.com
          </a>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
