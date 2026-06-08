import { useState } from 'react'

export default function Tabs({ tabs = [] }) {
  const [active, setActive] = useState(0)

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', borderBottom: '2px solid var(--border)', marginBottom: '16px' }}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: 'none', border: 'none', padding: '8px 18px',
              fontSize: '14px', fontWeight: 500, cursor: 'pointer',
              color: active === i ? 'var(--accent)' : 'var(--text)',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              marginBottom: '-2px', transition: 'color 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text)' }}>
        {tabs[active]?.content}
      </div>
    </div>
  )
}
