import { useState } from 'react'

export default function Select({ options = [], placeholder = 'Choose...', onChange }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSelect = (opt) => {
    setSelected(opt)
    setOpen(false)
    onChange?.(opt.value)
  }

  return (
    <div style={{ position: 'relative', minWidth: '180px' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--accent-border)',
          background: 'var(--accent-bg)', color: selected ? 'var(--text-h)' : 'var(--text)',
          cursor: 'pointer', fontSize: '14px',
        }}
      >
        {selected ? selected.label : placeholder}
        <span style={{ fontSize: '11px' }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <ul style={{
          position: 'absolute', top: '110%', left: 0, right: 0,
          background: 'var(--bg)', border: '1px solid var(--border)',
          borderRadius: '8px', listStyle: 'none', margin: 0, padding: '4px 0',
          zIndex: 100, boxShadow: 'var(--shadow)',
        }}>
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                onClick={() => handleSelect(opt)}
                style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none',
                  padding: '8px 14px', fontSize: '14px', color: 'var(--text-h)', cursor: 'pointer',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
