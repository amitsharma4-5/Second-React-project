import { useState } from 'react'

export default function SearchBar({ placeholder = 'Search...', onSearch }) {
  const [query, setQuery] = useState('')

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '16px' }}>🔍</span>
      <input
        value={query}
        onChange={e => { setQuery(e.target.value); onSearch?.(e.target.value) }}
        type="text"
        placeholder={placeholder}
        style={{
          width: '100%', padding: '9px 36px 9px 38px',
          border: '1px solid var(--accent-border)', borderRadius: '8px',
          fontSize: '14px', background: 'var(--accent-bg)',
          color: 'var(--text-h)', outline: 'none', boxSizing: 'border-box',
          transition: 'border 0.2s',
        }}
      />
      {query && (
        <button
          onClick={handleClear}
          style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: 'var(--text)' }}
        >
          ✕
        </button>
      )}
    </div>
  )
}
