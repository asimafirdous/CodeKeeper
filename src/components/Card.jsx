export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-5 shadow-2xl ${className}`}
    >
      {children}
    </div>
  )
}