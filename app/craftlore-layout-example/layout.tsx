import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import MegaMenuNavbar from "@/components/Navbar/Navbar"
import CraftloreFooter from "@/components/CraftloreFooter"
import FooterCard from "@/components/FooterCard"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Craftlore Layout Example",
  description: "Example page with Craftlore footer",
}

export default function CraftloreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MegaMenuNavbar />
        <main className="min-h-screen pt-16">{children}</main>
        <div className="mt-20">
          <FooterCard />
        </div>
        <CraftloreFooter />
      </body>
    </html>
  )
}

