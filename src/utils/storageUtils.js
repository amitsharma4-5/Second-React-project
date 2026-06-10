export const storage = {
  get(key, fallback = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : fallback
    } catch { return fallback }
  },

  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)) }
    catch (e) { console.error('storage.set failed:', e) }
  },

  remove(key) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  },

  has(key) {
    return localStorage.getItem(key) !== null
  },
}

export const session = {
  get(key, fallback = null) {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : fallback
    } catch { return fallback }
  },

  set(key, value) {
    try { sessionStorage.setItem(key, JSON.stringify(value)) }
    catch (e) { console.error('session.set failed:', e) }
  },

  remove(key) { sessionStorage.removeItem(key) },

  clear() { sessionStorage.clear() },
}
