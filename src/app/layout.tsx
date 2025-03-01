"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import "./globals.css";
import Footer from "@/components/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <html lang="en">
      <body>
        <Navbar />
        {selectedPage && selectedPage !== "Home" && <SubNavbar selectedPage={selectedPage} />}
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
