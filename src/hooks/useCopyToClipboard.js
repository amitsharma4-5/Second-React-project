import { useState } from 'react'

export function useCopyToClipboard(resetDelay = 2000) {
  const [copiedText, setCopiedText] = useState(null)

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API not available')
      return false
    }
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setTimeout(() => setCopiedText(null), resetDelay)
      return true
    } catch (e) {
      console.error('Failed to copy:', e)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy]
}
