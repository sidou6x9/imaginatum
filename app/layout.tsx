import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const libreBaskerville = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body className={`font-sans bg-background text-foreground`}>
      <FloatingNavbar />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
