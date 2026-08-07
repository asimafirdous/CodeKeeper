export default function TokenCard({ tokens }) {
  return (
    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-5 text-black shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-80">CodeTokens</p>
          <p className="text-3xl font-black">{tokens}</p>
        </div>

        <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center text-2xl">
          🪙
        </div>
      </div>

      <p className="text-sm mt-3 opacity-80">
        Earn tokens by completing days and posting proof of work.
      </p>
    </div>
  )
}