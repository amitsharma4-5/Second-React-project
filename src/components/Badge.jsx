export default function Badge({ count }) {
  const label = count === 0 ? 'Zero' : count < 10 ? 'Low' : count < 50 ? 'Medium' : 'High'
  const colors = {
    Zero: '#6b7280',
    Low: '#22c55e',
    Medium: '#f59e0b',
    High: '#ef4444',
  }

  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 10px',
      borderRadius: '999px',
      fontSize: '12px',
      fontWeight: 600,
      color: '#fff',
      background: colors[label],
      marginLeft: '8px',
    }}>
      {label}
    </span>
  )
}
