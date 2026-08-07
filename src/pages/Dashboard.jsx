import { Flame, Trophy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import BottomNav from '../components/BottomNav'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'
import ThemeToggle from '../components/ThemeToggle'
import TokenCard from '../components/TokenCard'
import RestoreStreakCard from '../components/RestoreStreakCard'
import Heatmap from '../components/Heatmap'
import AppButton from '../components/AppButton'

import { student, todayTask, heatmap } from '../data/mockData'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-white dark:bg-[#0B0B0F] text-zinc-900 dark:text-white relative overflow-hidden pb-28">
      <div className="glow-orange top-10 -right-10" />
      <div className="glow-pink bottom-24 -left-10" />

      <div className="relative z-10 space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Synced with ABTalks
            </p>
            <h1 className="text-xl font-bold">{student.name}</h1>
          </div>

          <ThemeToggle />
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Current streak
              </p>
              <p className="text-4xl font-black">{student.streak}</p>
            </div>

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Flame className="w-8 h-8 text-white" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-500 dark:text-zinc-400">
                Challenge progress
              </span>
              <span>20%</span>
            </div>

            <ProgressBar value={20} />
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 font-medium">
              {student.rank}
            </span>
            <span className="font-medium">{student.xp} XP</span>
          </div>
        </Card>

        <TokenCard tokens={student.tokens} />

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Recruiter Visibility</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Based on streak, commits and posts
              </p>
            </div>

            <div className="text-2xl">👀</div>
          </div>

          <div className="flex items-end gap-2">
            <span className="text-4xl font-black">
              {student.visibilityScore}
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 mb-1">
              /100
            </span>
          </div>

          <ProgressBar value={student.visibilityScore} />

          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-zinc-100 dark:bg-[#1A1A22] p-3">
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">Streak</p>
              <p className="font-bold">40</p>
            </div>
            <div className="rounded-2xl bg-zinc-100 dark:bg-[#1A1A22] p-3">
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">GitHub</p>
              <p className="font-bold">22</p>
            </div>
            <div className="rounded-2xl bg-zinc-100 dark:bg-[#1A1A22] p-3">
              <p className="text-zinc-500 dark:text-zinc-400 text-xs">LinkedIn</p>
              <p className="font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Today’s task</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-[#1A1A22] text-zinc-600 dark:text-zinc-300">
              {todayTask.duration}
            </span>
          </div>

          <div>
            <h3 className="font-semibold text-lg leading-7">
              {todayTask.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-6 mt-2">
              {todayTask.description}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-emerald-600 dark:text-emerald-400">
              +{todayTask.xp} XP
            </span>
            <span className="font-medium text-yellow-600 dark:text-yellow-400">
              +{todayTask.tokens} tokens
            </span>
          </div>

          <AppButton onClick={() => navigate('/day/12')}>
            Continue Day 12
          </AppButton>
        </Card>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">60-Day Activity</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Your consistency at a glance
              </p>
            </div>

            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              {student.completedDays}/{student.totalDays}
            </span>
          </div>

          <Heatmap data={heatmap} />
        </Card>

        <RestoreStreakCard />

        <Card className="space-y-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <h2 className="font-semibold">Achievement unlocked</h2>
          </div>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Consistency Rookie — complete 10 days without missing.
          </p>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}