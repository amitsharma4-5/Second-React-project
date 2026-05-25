export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)',
    }}>
      <span style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-h)' }}>
        ⚡ Click Me App
      </span>
      <span style={{ fontSize: '13px', color: 'var(--text)' }}>
        React + Vite
      </span>
    </nav>
  )
}
