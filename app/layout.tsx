import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reza Shalchian — Mentor & Instructor',
  description: 'Mentorship in Software Architecture, Cloud, and Full‑Stack Engineering.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
