import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevLogs',
  description:
    'Compartilhando o progresso em projetos, dicas e macetes de programação.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />

          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
