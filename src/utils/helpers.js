export function formatNumber(n) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function getCountLabel(count) {
  if (count === 0) return 'Start clicking!'
  if (count < 0) return 'Going negative!'
  if (count >= 100) return '🎉 You hit 100!'
  return `Keep going!`
}
