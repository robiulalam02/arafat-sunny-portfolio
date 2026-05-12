import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Arafat Sunny | Networking & Telecommunication",
  description:
    "Portfolio of Arafat Sunny, an aspiring Network Engineer specializing in enterprise infrastructure, routing protocols, VLANs, and Linux system administration.",
  keywords: [
    "Arafat Sunny",
    "Network Engineer",
    "Telecommunication",
    "Cisco",
    "Linux",
    "Portfolio",
  ],
  authors: [{ name: "Arafat Sunny" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-slate-50 text-slate-900 dark:bg-[#0b0514] dark:text-slate-300 font-sans transition-colors duration-500`}
      >
        {children}
      </body>
    </html>
  );
}