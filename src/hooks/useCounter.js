import { useState } from 'react'

export function useCounter(initial = 0, { min = -Infinity, max = Infinity, step = 1 } = {}) {
  const [count, setCount] = useState(initial)

  const increment = () => setCount(c => Math.min(c + step, max))
  const decrement = () => setCount(c => Math.max(c - step, min))
  const reset = () => setCount(initial)
  const set = (val) => setCount(Math.min(Math.max(val, min), max))

  return { count, increment, decrement, reset, set }
}
