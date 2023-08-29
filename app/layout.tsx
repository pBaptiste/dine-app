import './globals.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import Footer from '@/components/Footer'

const league_spartan = League_Spartan({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dine',
  description: 'Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce coming directly from our farmhouse and local fishery.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
