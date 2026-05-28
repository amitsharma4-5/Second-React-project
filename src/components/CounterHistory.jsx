export default function CounterHistory({ history }) {
  if (history.length === 0) return null

  return (
    <div style={{
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      fontSize: '13px',
      color: 'var(--text)',
    }}>
      <p style={{ marginBottom: '6px', fontWeight: 600 }}>Last 5 actions:</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {history.slice(-5).map((entry, i) => (
          <li key={i} style={{
            background: 'var(--accent-bg)',
            border: '1px solid var(--accent-border)',
            borderRadius: '6px',
            padding: '2px 8px',
            color: 'var(--accent)',
          }}>
            {entry > 0 ? `+${entry}` : entry}
          </li>
        ))}
      </ul>
    </div>
  )
}
