export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '16px',
      borderTop: '1px solid var(--border)',
      color: 'var(--text)',
      fontSize: '14px',
    }}>
      Built with ⚡ Vite + ⚛️ React — {new Date().getFullYear()}
    </footer>
  )
}
