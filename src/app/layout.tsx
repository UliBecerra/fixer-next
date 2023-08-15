import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Hind } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })
const hind = Hind({
  weight: ['400', '700', '600', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={hind.className}>{children}</body>
    </html>
  )
}
