import { useState } from 'react'

export default function PasswordInput({ label, error, ...props }) {
  const [show, setShow] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      {label && (
        <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-h)' }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <input
          type={show ? 'text' : 'password'}
          {...props}
          style={{
            width: '100%', padding: '8px 40px 8px 12px', borderRadius: '8px', fontSize: '14px',
            border: `1px solid ${error ? '#ef4444' : 'var(--accent-border)'}`,
            background: 'var(--accent-bg)', color: 'var(--text-h)', outline: 'none',
            boxSizing: 'border-box', transition: 'border 0.2s',
          }}
          onFocus={e => e.currentTarget.style.borderColor = error ? '#ef4444' : 'var(--accent)'}
          onBlur={e => e.currentTarget.style.borderColor = error ? '#ef4444' : 'var(--accent-border)'}
        />
        <button
          type="button"
          onClick={() => setShow(s => !s)}
          style={{
            position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: 'var(--text)',
          }}
        >
          {show ? '🙈' : '👁️'}
        </button>
      </div>
      {error && <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>}
    </div>
  )
}
