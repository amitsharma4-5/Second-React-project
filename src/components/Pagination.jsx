import { useState } from 'react'

export default function Pagination({ total, perPage = 10, onChange }) {
  const pages = Math.ceil(total / perPage)
  const [current, setCurrent] = useState(1)

  const go = (page) => {
    if (page < 1 || page > pages) return
    setCurrent(page)
    onChange?.(page)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
      <button onClick={() => go(current - 1)} disabled={current === 1}
        style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid var(--accent-border)', background: 'var(--accent-bg)', color: 'var(--accent)', cursor: current === 1 ? 'not-allowed' : 'pointer', opacity: current === 1 ? 0.5 : 1 }}>
        ←
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map(page => (
        <button key={page} onClick={() => go(page)}
          style={{
            padding: '5px 11px', borderRadius: '6px', border: '1px solid var(--accent-border)',
            background: current === page ? 'var(--accent)' : 'var(--accent-bg)',
            color: current === page ? '#fff' : 'var(--accent)',
            cursor: 'pointer', fontWeight: current === page ? 600 : 400,
            transition: 'all 0.15s',
          }}>
          {page}
        </button>
      ))}
      <button onClick={() => go(current + 1)} disabled={current === pages}
        style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid var(--accent-border)', background: 'var(--accent-bg)', color: 'var(--accent)', cursor: current === pages ? 'not-allowed' : 'pointer', opacity: current === pages ? 0.5 : 1 }}>
        →
      </button>
    </div>
  )
}
