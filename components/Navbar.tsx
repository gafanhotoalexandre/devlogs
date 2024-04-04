import Link from 'next/link'

import { ThemeSwitch } from './ThemeSwitch'

export function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">DevLogs</Link>

        <ThemeSwitch />
      </div>
    </div>
  )
}
