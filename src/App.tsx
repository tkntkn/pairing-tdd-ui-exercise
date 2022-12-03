import { useCallback, useState } from 'react'
import './App.css'

export function App() {
  const [message, setMessage] = useState("Please push Buy button.")
  const handleBuyClick = useCallback(() => setMessage("Cola"), [])

  return (
    <div className="App">
      <button onClick={handleBuyClick}>Buy</button>
      <p aria-label='Message'>{message}</p>
    </div>
  )
}
