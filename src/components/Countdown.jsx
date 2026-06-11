import { useEffect, useState } from 'react'

export default function Countdown({ seconds = 60, onComplete }) {
  const [remaining, setRemaining] = useState(seconds)

  useEffect(() => {
    if (remaining <= 0) { onComplete?.(); return }
    const timer = setInterval(() => setRemaining(r => r - 1), 1000)
    return () => clearInterval(timer)
  }, [remaining, onComplete])

  const mins = String(Math.floor(remaining / 60)).padStart(2, '0')
  const secs = String(remaining % 60).padStart(2, '0')
  const pct   = ((seconds - remaining) / seconds) * 100

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        <svg width="80" height="80" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--accent-bg)" strokeWidth="6" />
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--accent)" strokeWidth="6"
            strokeDasharray={`${2 * Math.PI * 34}`}
            strokeDashoffset={`${2 * Math.PI * 34 * (pct / 100)}`}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <span style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: 'var(--text-h)',
        }}>
          {mins}:{secs}
        </span>
      </div>
      {remaining === 0 && <span style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>Time's up!</span>}
    </div>
  )
}
