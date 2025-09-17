import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Moroccan Oasis',
  description: 'Discover the Flavors of Morocco',
  keywords: ['moroccan restaurant', 'authentic moroccan cuisine', 'tagine', 'couscous', 'moroccan food', 'moroccan dining'],
  openGraph: {
    title: 'Moroccan Oasis',
    description: 'Discover the Flavors of Morocco',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}