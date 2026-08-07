export const student = {
  name: "Asima",
  streak: 12,
  bestStreak: 18,
  xp: 2450,
  tokens: 320,
  rank: "Top 12%",
  recoveryCredits: 3,
  completedDays: 12,
  totalDays: 60,
  visibilityScore: 74,
}

export const todayTask = {
  day: 12,
  title: "Build a reusable React Button component",
  duration: "45-60 min",
  xp: 120,
  tokens: 25,
  description:
    "Create a Button component with variants, sizes, loading state and disabled state.",
}

export const heatmap = Array.from({ length: 60 }, (_, i) => {
  if (i < 12) return 3
  if (i === 12) return 2
  return 0
})