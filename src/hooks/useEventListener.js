import { useEffect, useRef } from 'react'

export function useEventListener(eventType, handler, target = window) {
  const savedHandler = useRef(handler)

  useEffect(() => { savedHandler.current = handler }, [handler])

  useEffect(() => {
    const el = target?.current ?? target
    if (!el?.addEventListener) return
    const listener = (e) => savedHandler.current(e)
    el.addEventListener(eventType, listener)
    return () => el.removeEventListener(eventType, listener)
  }, [eventType, target])
}
