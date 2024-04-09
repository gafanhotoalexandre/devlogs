import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { Navbar } from '@/components/Navbar'

const firaCode = Fira_Code({ subsets: ['latin'] })

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
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}
      >
        <ThemeProvider attribute="class">
          <Navbar />

          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
