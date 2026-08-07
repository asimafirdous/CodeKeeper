export default function Heatmap({ data }) {
  const colors = [
    'bg-zinc-200 dark:bg-zinc-800',
    'bg-emerald-200 dark:bg-emerald-900',
    'bg-emerald-400 dark:bg-emerald-600',
    'bg-emerald-600 dark:bg-emerald-400',
  ]

  return (
    <div className="grid grid-cols-10 gap-1">
      {data.map((value, i) => (
        <div
          key={i}
          className={`w-7 h-7 rounded-md ${colors[value]}`}
          title={`Day ${i + 1}`}
        />
      ))}
    </div>
  )
}