import Link from 'next/link'
import { BackArrowIcon } from '@/utils/Icons'
import { Logo } from './shared/Logo'

export function CmsNavbar() {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link
        className="p-1 rounded-full hover:bg-amber-50 hover:bg-opacity-10 transition"
        href="/"
      >
        <BackArrowIcon />
      </Link>
      <Logo />
    </div>
  )
}
