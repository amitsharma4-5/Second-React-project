import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', textAlign: 'left', background: 'none',
              border: 'none', padding: '12px 0', cursor: 'pointer',
              color: 'var(--text-h)', fontWeight: 500, fontSize: '15px',
              display: 'flex', justifyContent: 'space-between',
            }}
          >
            {item.title}
            <span>{open === i ? '▲' : '▼'}</span>
          </button>
          {open === i && (
            <p style={{ margin: '0 0 12px', color: 'var(--text)', fontSize: '14px' }}>
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
