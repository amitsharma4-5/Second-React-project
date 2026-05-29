import { createContext, useContext, useState } from 'react'

const CounterContext = createContext(null)

export function CounterProvider({ children }) {
  const [stepSize, setStepSize] = useState(1)

  return (
    <CounterContext.Provider value={{ stepSize, setStepSize }}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  return useContext(CounterContext)
}
