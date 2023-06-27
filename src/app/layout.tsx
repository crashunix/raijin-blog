import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Raijin | %s',
    default: 'Raijin'
  },
  description: 'Notion backed blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Header></Header>
        <main>
          {children}
        </main>
        <footer>
          <div className="container mx-auto px-4 py-20">
            <div className="flex justify-between items-center text-xs text-zinc-200">
              <span>2023 crashunix</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
