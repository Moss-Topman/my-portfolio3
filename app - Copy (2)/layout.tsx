import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio — Minimal & Modern',
  description: 'A clean, minimalist portfolio showcasing modern web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}