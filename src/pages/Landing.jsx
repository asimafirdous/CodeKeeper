import BottomNav from '../components/BottomNav'
import Card from '../components/Card'

export default function Landing() {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-zinc-950 text-white relative overflow-hidden pb-28">
      <div className="glow w-40 h-40 bg-orange-500 top-10 -right-10" />
      <div className="glow w-32 h-32 bg-pink-500 bottom-32 -left-10" />

      <div className="relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1 rounded-full text-sm">
          🔥 2,400+ active students
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black leading-tight tracking-tight">
            Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">60 days</span>
            . Become impossible to ignore.
          </h1>

          <p className="text-zinc-400 leading-7 text-sm">
            Code every day, post your progress, and create a public proof-of-work portfolio that recruiters can actually see.
          </p>
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">Current streak</p>
              <p className="text-4xl font-black">18 days</p>
            </div>

            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              🔥
            </div>
          </div>

          <button className="w-full h-12 rounded-2xl bg-white text-black font-semibold active:scale-[0.98] transition-transform">
            Start the challenge
          </button>
        </Card>

        <Card className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">🛡️</span>
            <h2 className="font-semibold">Streak Recovery</h2>
          </div>

          <p className="text-sm text-zinc-400 leading-6">
            Missed a day? Use one of 3 recovery credits or pass a 20-minute skill quiz to restore your streak.
          </p>

          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-orange-500/15 text-orange-300 text-xs font-medium">
              3 credits
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-medium">
              20 min quiz
            </span>
          </div>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}