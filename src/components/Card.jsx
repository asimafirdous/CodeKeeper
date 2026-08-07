export default function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white dark:bg-[#121218] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 shadow-sm dark:shadow-none ${className}`}
    >
      {children}
    </div>
  )
}