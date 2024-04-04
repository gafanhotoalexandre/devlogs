'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
