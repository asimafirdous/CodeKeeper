import { ArrowRight, Flame, ShieldCheck } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-zinc-950 text-white">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-sm">
          <Flame className="w-4 h-4 text-orange-400" />
          Built for Indian students
        </div>

        <h1 className="text-4xl font-bold leading-tight">
          Build for 60 days. Become impossible to ignore.
        </h1>

        <p className="text-zinc-400 text-sm leading-6">
          Code every day, post your progress, and create a public proof-of-work
          portfolio that recruiters can actually see.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Current streak</p>
              <p className="text-3xl font-bold">18 days</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Flame className="w-7 h-7 text-orange-400" />
            </div>
          </div>

          <button className="w-full h-12 rounded-2xl bg-white text-black font-semibold flex items-center justify-center gap-2">
            Start the challenge
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h2 className="font-semibold">Streak Recovery</h2>
          </div>
          <p className="text-sm text-zinc-400 leading-6">
            Missed a day? Use one of 3 recovery credits or pass a 20-minute
            skill quiz to restore your streak.
          </p>
        </div>
      </div>
    </div>
  )
}