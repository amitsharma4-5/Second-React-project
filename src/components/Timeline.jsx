export default function Timeline({ items = [] }) {
  return (
    <div style={{ position: 'relative', paddingLeft: '24px' }}>
      <div style={{
        position: 'absolute', left: '8px', top: 0, bottom: 0,
        width: '2px', background: 'var(--accent-bg)',
      }} />
      {items.map((item, i) => (
        <div key={i} style={{ position: 'relative', marginBottom: i < items.length - 1 ? '24px' : 0 }}>
          <div style={{
            position: 'absolute', left: '-20px', top: '4px',
            width: '12px', height: '12px', borderRadius: '50%',
            background: item.color ?? 'var(--accent)',
            border: '2px solid var(--bg)',
            boxShadow: '0 0 0 2px var(--accent)',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {item.time && (
              <span style={{ fontSize: '11px', color: 'var(--text)', fontWeight: 500 }}>{item.time}</span>
            )}
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--text-h)' }}>{item.title}</p>
            {item.description && (
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text)' }}>{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
