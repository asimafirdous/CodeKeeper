import { Flame, Trophy } from 'lucide-react'
import { student, todayTask } from '../data/mockData'

export default function Dashboard() {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-zinc-950 text-white">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-zinc-400 text-sm">Good evening</p>
            <h1 className="text-xl font-bold">{student.name}</h1>
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800" />
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Current streak</p>
              <p className="text-4xl font-bold">{student.streak}</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-400">Challenge progress</span>
              <span>20%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full w-1/5 bg-orange-400 rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300">
              {student.rank}
            </span>
            <span className="text-zinc-300">{student.xp} XP</span>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Today’s task</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
              {todayTask.duration}
            </span>
          </div>

          <h3 className="font-semibold text-lg leading-7">
            {todayTask.title}
          </h3>

          <p className="text-sm text-zinc-400 leading-6">
            {todayTask.description}
          </p>

          <button className="w-full h-12 rounded-2xl bg-white text-black font-semibold">
            Continue Day 12
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <h2 className="font-semibold">Achievement unlocked</h2>
          </div>
          <p className="text-sm text-zinc-400">
            Consistency Rookie — complete 10 days without missing.
          </p>
        </div>
      </div>
    </div>
  )
}