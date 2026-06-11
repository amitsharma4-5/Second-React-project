import { useEffect, useState } from 'react'

export function useKeyPress(targetKey) {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const down = ({ key }) => key === targetKey && setPressed(true)
    const up   = ({ key }) => key === targetKey && setPressed(false)
    window.addEventListener('keydown', down)
    window.addEventListener('keyup',   up)
    return () => {
      window.removeEventListener('keydown', down)
      window.removeEventListener('keyup',   up)
    }
  }, [targetKey])

  return pressed
}
