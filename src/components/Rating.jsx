import { useState } from 'react'

export default function Rating({ max = 5, defaultValue = 0, readOnly = false, onChange }) {
  const [rating, setRating] = useState(defaultValue)
  const [hovered, setHovered] = useState(0)

  const handleClick = (star) => {
    if (readOnly) return
    setRating(star)
    onChange?.(star)
  }

  return (
    <div style={{ display: 'inline-flex', gap: '4px' }}>
      {Array.from({ length: max }, (_, i) => i + 1).map(star => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readOnly && setHovered(star)}
          onMouseLeave={() => !readOnly && setHovered(0)}
          style={{
            background: 'none', border: 'none', padding: 0,
            fontSize: '24px', cursor: readOnly ? 'default' : 'pointer',
            color: (hovered || rating) >= star ? '#f59e0b' : 'var(--accent-bg)',
            transition: 'color 0.15s', lineHeight: 1,
          }}
        >
          ★
        </button>
      ))}
    </div>
  )
}
