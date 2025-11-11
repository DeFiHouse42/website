import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const projectName = "DeFi House"
const description = "DeFi House: A community initiative promoting DeFi literacy and financial sovereignty through events, education, and innovative products.";
const domain = "defihouse42.com";
const logoImage = "./defihouse_logo_v1.png";

export const metadata: Metadata = {
  title: "DeFi House - Learn. Connect. Grow.",
  description:
    description,
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: domain,
    creator: "DeFiHouse42",
    images: logoImage,
  },
  openGraph: {
    type: "website",
    url: domain,
    title: projectName,
    description:
      description,
    siteName: projectName,
    images: [
      {
        url: logoImage,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
