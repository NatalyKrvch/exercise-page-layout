import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header/Header'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'gFit',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Хедер відображається на всіх сторінках */}
        <main>{children}</main>{' '}
        {/* Вміст кожної сторінки буде рендеритись тут */}
      </body>
    </html>
  )
}
