import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter, Open_Sans, Roboto } from "next/font/google"
import type React from "react"
import ClientLayout from "./ClientLayout"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--thm-font",
  display: "swap",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--thm-font-2",
  display: "swap",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AA Design Studio",
  description: "Professional design services for your projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${openSans.variable} ${roboto.variable}`}>
        <ClientLayout>{children}</ClientLayout>
        <CraftloreFooter />
      </body>
    </html>
  )
}



import CraftloreFooter from "@/components/CraftloreFooter"
import './globals.css'

