import { CmsNavbar } from '@/components/CmsNavbar'
import { Metadata } from 'next'

import { Provider } from '@/utils/Provider'

import '../globals.css'

export const metadata: Metadata = {
  title: 'DevLogs - Studio',
  description:
    'Compartilhando o progresso em projetos, dicas e macetes de programação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
