import AppButton from './AppButton'

export default function RestoreStreakCard() {
  return (
    <div className="bg-white dark:bg-[#121218] border border-zinc-200 dark:border-zinc-800 rounded-3xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Restore Streak</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Available for 24 hours after a missed day
          </p>
        </div>

        <div className="text-2xl">🔥</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] p-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Credits</p>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="rounded-2xl bg-zinc-50 dark:bg-[#1A1A22] p-4 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Tokens</p>
          <p className="text-2xl font-bold">200</p>
        </div>
      </div>

      <div className="space-y-2">
        <AppButton variant="secondary">Use 1 Recovery Credit</AppButton>
        <AppButton variant="secondary">Use 200 Tokens</AppButton>
        <AppButton variant="secondary">Take 20-Minute Quiz</AppButton>
      </div>
    </div>
  )
}