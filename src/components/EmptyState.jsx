export default function EmptyState({ icon = '📭', title = 'Nothing here', description, action }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: '10px', padding: '48px 24px', textAlign: 'center',
    }}>
      <span style={{ fontSize: '48px', lineHeight: 1 }}>{icon}</span>
      <p style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'var(--text-h)' }}>{title}</p>
      {description && <p style={{ margin: 0, fontSize: '14px', color: 'var(--text)', maxWidth: '280px' }}>{description}</p>}
      {action && (
        <button
          onClick={action.onClick}
          style={{
            marginTop: '8px', padding: '8px 20px', borderRadius: '8px', border: 'none',
            background: 'var(--accent)', color: '#fff', fontSize: '14px',
            fontWeight: 500, cursor: 'pointer',
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  )
}
