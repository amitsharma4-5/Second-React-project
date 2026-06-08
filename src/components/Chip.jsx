import { useState } from 'react'

export default function Chip({ label, color = 'accent', removable = false, onRemove }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const colors = {
    accent:  { bg: 'var(--accent-bg)',  text: 'var(--accent)'  },
    green:   { bg: '#dcfce7',           text: '#166534'         },
    red:     { bg: '#fee2e2',           text: '#991b1b'         },
    yellow:  { bg: '#fef9c3',           text: '#854d0e'         },
    blue:    { bg: '#dbeafe',           text: '#1e40af'         },
    gray:    { bg: '#f3f4f6',           text: '#374151'         },
  }
  const c = colors[color] ?? colors.accent

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: '3px 10px', borderRadius: '999px',
      fontSize: '12px', fontWeight: 500,
      background: c.bg, color: c.text,
    }}>
      {label}
      {removable && (
        <button
          onClick={() => { setVisible(false); onRemove?.() }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'inherit', padding: 0, lineHeight: 1 }}
        >✕</button>
      )}
    </span>
  )
}
