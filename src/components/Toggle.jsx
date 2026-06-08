import { useState } from 'react'

export default function Toggle({ label, defaultChecked = false, onChange }) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const next = !checked
    setChecked(next)
    onChange?.(next)
  }

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
      <div
        onClick={handleToggle}
        style={{
          position: 'relative', width: '44px', height: '24px',
          borderRadius: '12px', transition: 'background 0.2s',
          background: checked ? 'var(--accent)' : 'var(--accent-bg)',
          border: '1px solid var(--accent-border)', cursor: 'pointer',
        }}
      >
        <div style={{
          position: 'absolute', top: '2px',
          left: checked ? '22px' : '2px',
          width: '18px', height: '18px',
          borderRadius: '50%', background: checked ? '#fff' : 'var(--accent)',
          transition: 'left 0.2s',
        }} />
      </div>
      {label && <span style={{ fontSize: '14px', color: 'var(--text-h)', fontWeight: 500 }}>{label}</span>}
    </label>
  )
}
