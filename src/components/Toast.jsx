import { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div style={{
      position: 'fixed',
      bottom: '72px',
      right: '24px',
      background: 'var(--accent)',
      color: '#fff',
      padding: '10px 18px',
      borderRadius: '8px',
      fontSize: '14px',
      boxShadow: 'var(--shadow)',
      animation: 'fadeIn 0.3s ease',
    }}>
      {message}
    </div>
  )
}
