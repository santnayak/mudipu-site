import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-border bg-background transition-all hover:bg-muted active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground" />
      ) : (
        <Moon className="h-5 w-5 sm:h-4 sm:w-4 text-muted-foreground" />
      )}
    </button>
  )
}
