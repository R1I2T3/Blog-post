import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
const inter = Inter({ subsets: ['latin'] })
import Provider from './components/QueryProvider'
export const metadata: Metadata = {
  title: 'RBlogs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Provider>
        <Navbar/>
        <div className='container h-full pt-12'>{children}</div>
        </Provider>
        </body>
    </html>
  )
}
