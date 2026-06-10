export default function Table({ columns = [], rows = [], striped = true }) {
  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
        <thead>
          <tr style={{ background: 'var(--accent-bg)', borderBottom: '2px solid var(--accent-border)' }}>
            {columns.map((col, i) => (
              <th key={i} style={{
                padding: '10px 14px', textAlign: 'left',
                color: 'var(--text-h)', fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ padding: '20px', textAlign: 'center', color: 'var(--text)' }}>
                No data available
              </td>
            </tr>
          ) : (
            rows.map((row, ri) => (
              <tr key={ri} style={{
                background: striped && ri % 2 !== 0 ? 'var(--accent-bg)' : 'transparent',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-bg)'}
                onMouseLeave={e => e.currentTarget.style.background = striped && ri % 2 !== 0 ? 'var(--accent-bg)' : 'transparent'}
              >
                {columns.map((col, ci) => (
                  <td key={ci} style={{ padding: '10px 14px', color: 'var(--text-h)' }}>
                    {row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
