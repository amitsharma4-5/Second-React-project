import { useEffect } from 'react'

export default function Drawer({ open, onClose, title, children, position = 'right' }) {
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 200 }} />
      <div style={{
        position: 'fixed', top: 0, [position]: 0,
        height: '100vh', width: '320px',
        background: 'var(--bg)', zIndex: 201,
        padding: '24px', boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', gap: '16px',
        borderLeft: position === 'right' ? '1px solid var(--border)' : 'none',
        borderRight: position === 'left' ? '1px solid var(--border)' : 'none',
        boxShadow: 'var(--shadow)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title && <h3 style={{ margin: 0, color: 'var(--text-h)', fontSize: '16px' }}>{title}</h3>}
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'var(--text)', marginLeft: 'auto' }}>✕</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>{children}</div>
      </div>
    </>
  )
}
