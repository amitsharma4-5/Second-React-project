export default function Loader({ size = 32 }) {
  return (
    <div style={{
      width: size,
      height: size,
      border: '3px solid var(--accent-bg)',
      borderTop: '3px solid var(--accent)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }} />
  )
}
