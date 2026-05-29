import { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { useToggle } from './hooks/useToggle'
import { usePrevious } from './hooks/usePrevious'
import { getCountLabel } from './utils/helpers'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Badge from './components/Badge'
import ProgressBar from './components/ProgressBar'
import ScrollToTop from './components/ScrollToTop'
import Toast from './components/Toast'
import CounterHistory from './components/CounterHistory'
import Modal from './components/Modal'
import Tooltip from './components/Tooltip'
import './App.css'

function App() {
  const [count, setCount] = useLocalStorage('click-count', 0)
  const [history, setHistory] = useState([])
  const [toast, setToast] = useState(null)
  const [showModal, toggleModal] = useToggle(false)
  const prevCount = usePrevious(count)

  const updateCount = (delta) => {
    setCount(c => c + delta)
    setHistory(h => [...h, delta])
    setToast(delta === 0 ? 'Counter reset!' : `${delta > 0 ? '+' : ''}${delta}`)
  }

  return (
    <>
      <Navbar />
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p style={{ color: 'var(--accent)', fontWeight: 500 }}>{getCountLabel(count)}</p>
          {prevCount !== undefined && prevCount !== count && (
            <p style={{ fontSize: '13px', color: 'var(--text)' }}>Previous: {prevCount}</p>
          )}
        </div>
        <ProgressBar count={count} max={100} />
        <CounterHistory history={history} />
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button type="button" className="counter" onClick={() => updateCount(-5)}>-5</button>
          <button type="button" className="counter" onClick={() => updateCount(-1)}>-1</button>
          <button type="button" className="counter" onClick={() => updateCount(1)}>
            Count is {count} <Badge count={count} />
          </button>
          <button type="button" className="counter" onClick={() => updateCount(5)}>+5</button>
          <button type="button" className="counter" onClick={() => { setCount(0); setHistory([]); setToast('Counter reset!') }}>Reset</button>
          <Tooltip text="View stats"><button type="button" className="counter" onClick={toggleModal}>📊</button></Tooltip>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <Footer />
      <ThemeToggle />
      <ScrollToTop />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      {showModal && (
        <Modal title="Counter Stats" onClose={toggleModal}>
          <p>Current: <strong>{count}</strong></p>
          <p>Previous: <strong>{prevCount ?? '—'}</strong></p>
          <p>Total actions: <strong>{history.length}</strong></p>
        </Modal>
      )}
    </>
  )
}

export default App
