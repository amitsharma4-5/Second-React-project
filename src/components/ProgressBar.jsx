export default function ProgressBar({ count, max = 100 }) {
  const percent = Math.min((count / max) * 100, 100)

  return (
    <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: 'var(--text)',
        marginBottom: '4px',
      }}>
        <span>Progress</span>
        <span>{Math.round(percent)}%</span>
      </div>
      <div style={{
        width: '100%',
        height: '8px',
        background: 'var(--accent-bg)',
        borderRadius: '999px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${percent}%`,
          height: '100%',
          background: 'var(--accent)',
          borderRadius: '999px',
          transition: 'width 0.3s ease',
        }} />
      </div>
    </div>
  )
}
