export default function ProgressBar({ value }) {
  return (
    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-700"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}