export default function Avatar({ name = '', size = 40, src }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  return src ? (
    <img src={src} alt={name} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }} />
  ) : (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: 'var(--accent)', color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 600,
    }}>
      {initials}
    </div>
  )
}
