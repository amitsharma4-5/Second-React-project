import { useState } from 'react'

export default function Stepper({ steps = [] }) {
  const [current, setCurrent] = useState(0)

  return (
    <div style={{ width: '100%', maxWidth: '480px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < steps.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: current >= i ? 'var(--accent)' : 'var(--accent-bg)',
                color: current >= i ? '#fff' : 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 600, transition: 'all 0.2s',
              }}>
                {current > i ? '✓' : i + 1}
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text)', whiteSpace: 'nowrap' }}>{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: '2px', margin: '0 6px', marginBottom: '18px',
                background: current > i ? 'var(--accent)' : 'var(--accent-bg)',
                transition: 'background 0.2s',
              }} />
            )}
          </div>
        ))}
      </div>

      {steps[current]?.content && (
        <p style={{ fontSize: '14px', color: 'var(--text)', marginBottom: '16px' }}>
          {steps[current].content}
        </p>
      )}

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setCurrent(c => Math.max(c - 1, 0))}
          disabled={current === 0}
          style={{ padding: '6px 16px', borderRadius: '6px', border: '1px solid var(--accent)', background: 'transparent', color: 'var(--accent)', cursor: current === 0 ? 'not-allowed' : 'pointer', opacity: current === 0 ? 0.5 : 1 }}
        >
          Back
        </button>
        <button
          onClick={() => setCurrent(c => Math.min(c + 1, steps.length - 1))}
          disabled={current === steps.length - 1}
          style={{ padding: '6px 16px', borderRadius: '6px', border: 'none', background: 'var(--accent)', color: '#fff', cursor: current === steps.length - 1 ? 'not-allowed' : 'pointer', opacity: current === steps.length - 1 ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
