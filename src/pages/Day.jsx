import { CheckCircle2, Clock, Gift } from 'lucide-react'

import BackButton from '../components/BackButton'
import BottomNav from '../components/BottomNav'
import ThemeToggle from '../components/ThemeToggle'
import AppButton from '../components/AppButton'
import Card from '../components/Card'

import { todayTask } from '../data/mockData'

export default function Day() {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-white dark:bg-[#0B0B0F] text-zinc-900 dark:text-white relative overflow-hidden pb-28">
      <div className="glow-orange top-10 -right-10" />
      <div className="glow-pink bottom-24 -left-10" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BackButton />

            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                React Track
              </p>
              <h1 className="text-xl font-bold">Day 12</h1>
            </div>
          </div>

          <ThemeToggle />
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-[#1A1A22] text-zinc-600 dark:text-zinc-300">
              <Clock className="w-4 h-4" />
              {todayTask.duration}
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-medium">
              <Gift className="w-4 h-4" />
              +{todayTask.xp} XP
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-black leading-tight">
              {todayTask.title}
            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 leading-7">
              {todayTask.description}
            </p>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-zinc-100 dark:bg-[#1A1A22] p-4">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Reward
              </p>
              <p className="font-bold text-yellow-600 dark:text-yellow-400">
                +{todayTask.tokens} CodeTokens
              </p>
            </div>

            <div className="text-2xl">🪙</div>
          </div>
        </Card>

        <Card className="space-y-4">
          <h3 className="font-semibold text-lg">Requirements</h3>

          <div className="space-y-4 text-sm">
            {[
              'Primary, secondary and outline variants',
              'Small, medium and large sizes',
              'Loading spinner state',
              'Disabled state',
              'Use props instead of duplicate components',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-700 dark:text-zinc-300 leading-6">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Submit proof of work</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              Add both links to continue your streak.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              GitHub commit or repository
            </label>
            <input
              className="w-full h-12 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all"
              placeholder="https://github.com/..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              LinkedIn post URL
            </label>
            <input
              className="w-full h-12 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all"
              placeholder="https://linkedin.com/..."
            />
          </div>

          <AppButton>Submit Day 12</AppButton>

          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 leading-5">
            Your streak and CodeTokens update instantly after submission.
          </p>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}