import { Home, Flame, CheckSquare, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function BottomNav() {
  const { pathname } = useLocation()

  const items = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: Flame, label: 'Dashboard', to: '/dashboard' },
    { icon: CheckSquare, label: 'Day 12', to: '/day/12' },
    { icon: User, label: 'Profile', to: '/dashboard' },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[358px] bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-3xl px-3 py-2 z-50">
      <div className="flex items-center justify-between">
        {items.map((item) => {
          const Icon = item.icon
          const active = pathname === item.to

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all ${
                active
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}