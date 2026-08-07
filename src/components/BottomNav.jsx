import { Home, Flame, CheckSquare, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  const items = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Flame, label: 'Dashboard', to: '/dashboard' },
    { icon: CheckSquare, label: 'Day 12', to: '/day/12' },
    { icon: User, label: 'Profile', to: '/dashboard' },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[358px] bg-white/95 dark:bg-[#121218]/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl px-3 py-2 z-50 shadow-lg dark:shadow-none">
      <div className="flex items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-200 active:scale-95 ${
                  isActive
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-black'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}