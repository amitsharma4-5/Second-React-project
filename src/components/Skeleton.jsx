export default function Skeleton({ width = '100%', height = '16px', borderRadius = '4px', style: extraStyle }) {
  return (
    <div style={{
      width, height, borderRadius,
      background: 'linear-gradient(90deg, var(--accent-bg) 25%, rgba(255,255,255,0.1) 50%, var(--accent-bg) 75%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      ...extraStyle,
    }} />
  )
}
