import Link from 'next/link'
import { Lilita_One } from 'next/font/google'

import { ThemeSwitch } from './ThemeSwitch'

const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'] })
export function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${lilitaOne.className} text-3xl dark:text-amber-50`}>
            Dev<span className="text-purple-700">Logs</span>
          </div>
        </Link>

        <ThemeSwitch />
      </div>
    </div>
  )
}
