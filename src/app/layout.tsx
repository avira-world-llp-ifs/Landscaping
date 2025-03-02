"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const sourceSerif = Inter({ subsets: ["latin"], variable: "--font-source-serif" });
export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={sourceSerif.variable}>
      <body>
        <Header />

        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
