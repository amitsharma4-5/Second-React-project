import { useState } from 'react'

export default function Alert({ message, type = 'info', dismissible = false }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  const styles = {
    info:    { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
    success: { bg: '#dcfce7', text: '#166534', border: '#86efac' },
    warning: { bg: '#fef9c3', text: '#854d0e', border: '#fde047' },
    danger:  { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
  }
  const icons = { info: 'ℹ️', success: '✅', warning: '⚠️', danger: '❌' }
  const s = styles[type] ?? styles.info

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      gap: '10px', padding: '12px 16px', borderRadius: '8px',
      background: s.bg, color: s.text,
      border: `1px solid ${s.border}`, fontSize: '14px',
    }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <span>{icons[type]}</span>
        <span>{message}</span>
      </div>
      {dismissible && (
        <button
          onClick={() => setVisible(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: 'inherit', padding: 0, lineHeight: 1, flexShrink: 0 }}
        >
          ✕
        </button>
      )}
    </div>
  )
}
