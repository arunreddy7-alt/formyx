import type React from "react"
import type { Metadata } from "next"
import { League_Spartan } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ReactLenis from "lenis/react";

const font = League_Spartan({
  subsets: ["latin"],
})

export const metadata = {
  title: "Formyx Solutions | AI & Automation Services",
  description:
    "Formyx Solutions provides AI agents, RAG systems, and intelligent automation for businesses.",
  metadataBase: new URL("https://formyxsolutions.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <ReactLenis root>
        <body className={`${font.className} font antialiased overflow-x-clip`}>
          {children}
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  )
}
