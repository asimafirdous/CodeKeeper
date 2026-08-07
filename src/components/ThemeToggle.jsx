import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { mode, setMode } = useTheme()

  const options = [
    { value: 'light', icon: Sun },
    { value: 'dark', icon: Moon },
    { value: 'auto', icon: Monitor },
  ]

  return (
    <div className="flex items-center gap-1 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
      {options.map((opt) => {
        const Icon = opt.icon
        const active = mode === opt.value

        return (
          <button
            key={opt.value}
            onClick={() => setMode(opt.value)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
              active
                ? 'bg-white dark:bg-zinc-900 shadow text-zinc-900 dark:text-white'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
          </button>
        )
      })}
    </div>
  )
}