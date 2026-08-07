import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function Day() {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto px-4 py-6 bg-zinc-950 text-white">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <p className="text-sm text-zinc-400">React Track</p>
            <h1 className="text-xl font-bold">Day 12</h1>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
              45-60 min
            </span>
            <span className="px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300">
              +120 XP
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-9">
            Build a reusable Button component
          </h2>

          <p className="text-sm text-zinc-400 leading-6">
            Create a Button component that supports multiple variants, sizes,
            disabled state and loading state.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-3">
          <h3 className="font-semibold">Requirements</h3>

          <div className="space-y-3 text-sm">
            {[
              'Primary, secondary and outline variants',
              'Small, medium and large sizes',
              'Loading spinner state',
              'Disabled state',
              'Use props instead of duplicate components',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                <span className="text-zinc-300 leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 space-y-4">
          <h3 className="font-semibold">Submit proof of work</h3>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">GitHub commit or repository</label>
            <input
              className="w-full h-12 rounded-2xl bg-zinc-950 border border-zinc-800 px-4 text-sm outline-none focus:border-zinc-600"
              placeholder="https://github.com/..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-400">LinkedIn post URL</label>
            <input
              className="w-full h-12 rounded-2xl bg-zinc-950 border border-zinc-800 px-4 text-sm outline-none focus:border-zinc-600"
              placeholder="https://linkedin.com/..."
            />
          </div>

          <button className="w-full h-12 rounded-2xl bg-white text-black font-semibold">
            Submit Day 12
          </button>
        </div>
      </div>
    </div>
  )
}