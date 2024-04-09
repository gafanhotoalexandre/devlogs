import Link from 'next/link'
import { Lilita_One } from 'next/font/google'

const lilitaOne = Lilita_One({ weight: '400', subsets: ['latin'] })

export function Logo() {
  return (
    <Link href="/">
      <div className={`${lilitaOne.className} text-3xl dark:text-amber-50`}>
        Dev<span className="text-purple-700">Logs</span>
      </div>
    </Link>
  )
}
