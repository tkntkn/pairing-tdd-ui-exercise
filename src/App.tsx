import { useCallback, useState } from 'react'
import './App.css'

export function App() {
  const [messages, setMessages] = useState(["Please push Buy button."])
  const handleBuyClick = useCallback(() => setMessages(currentMessages => [...currentMessages, "Cola"]), [])

  return (
    <div className="App">
      <button onClick={handleBuyClick}>Buy</button>
      <div aria-label='Messages'>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}
