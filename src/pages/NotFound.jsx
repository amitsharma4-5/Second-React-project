export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', gap: '12px',
      color: 'var(--text)',
    }}>
      <h1 style={{ fontSize: '72px', margin: 0, color: 'var(--accent)' }}>404</h1>
      <p style={{ fontSize: '18px', margin: 0 }}>Page not found</p>
      <a href="/" style={{ color: 'var(--accent)', fontSize: '14px' }}>← Go back home</a>
    </div>
  )
}
