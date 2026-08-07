export default function TokenCard({ tokens }) {
  return (
    <div className="bg-gradient-to-br from-amber-400 via-orange-400 to-pink-500 rounded-3xl p-5 text-black shadow-lg shadow-orange-500/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">CodeTokens</p>
          <p className="text-3xl font-black">{tokens}</p>
        </div>

        <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center text-2xl">
          🪙
        </div>
      </div>

      <p className="text-sm mt-3 opacity-80 leading-6">
        Earn tokens from commits, posts, and streak milestones.
      </p>
    </div>
  )
}