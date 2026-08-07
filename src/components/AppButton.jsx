export default function AppButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const styles = {
    primary:
      'bg-zinc-900 dark:bg-white text-white dark:text-black hover:opacity-90',
    secondary:
      'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700',
  }

  return (
    <button
      {...props}
      className={`w-full h-12 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}