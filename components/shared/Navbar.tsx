import { ThemeSwitch } from '@/components/shared/ThemeSwitch'
import { Logo } from './Logo'

export function Navbar() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Logo />

        <ThemeSwitch />
      </div>
    </div>
  )
}
