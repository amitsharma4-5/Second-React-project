export default function Card({ title, description, footer }) {
  return (
    <div style={{
      background: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: 'var(--shadow)',
      maxWidth: '280px',
      textAlign: 'left',
    }}>
      {title && <h3 style={{ margin: '0 0 8px', color: 'var(--text-h)', fontSize: '16px' }}>{title}</h3>}
      {description && <p style={{ margin: '0 0 16px', color: 'var(--text)', fontSize: '14px' }}>{description}</p>}
      {footer && <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', fontSize: '13px', color: 'var(--text)' }}>{footer}</div>}
    </div>
  )
}
