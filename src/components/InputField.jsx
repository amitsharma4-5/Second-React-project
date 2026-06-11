export default function InputField({ label, error, hint, id, required, ...props }) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-h)' }}>
          {label}{required && <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        style={{
          width: '100%', padding: '8px 12px', borderRadius: '8px', fontSize: '14px',
          border: `1px solid ${error ? '#ef4444' : 'var(--accent-border)'}`,
          background: 'var(--accent-bg)', color: 'var(--text-h)', outline: 'none',
          boxSizing: 'border-box', transition: 'border 0.2s',
        }}
        onFocus={e => e.currentTarget.style.borderColor = error ? '#ef4444' : 'var(--accent)'}
        onBlur={e => e.currentTarget.style.borderColor = error ? '#ef4444' : 'var(--accent-border)'}
      />
      {error && <span style={{ fontSize: '12px', color: '#ef4444' }}>{error}</span>}
      {hint && !error && <span style={{ fontSize: '12px', color: 'var(--text)' }}>{hint}</span>}
    </div>
  )
}
