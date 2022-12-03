import { useCallback, useState } from 'react'
import './App.css'

export function App() {
  const [inserted, setInserted] = useState(0)
  const handleInsert100Click = useCallback(() => setInserted(current => current + 100), [])

  const [messages, setMessages] = useState(["Please push Buy button."])
  const handleBuyClick = useCallback(() => {
    if (inserted >= 100) {
      setMessages(currentMessages => [...currentMessages, "Cola"])
    } else {
      setMessages(currentMessages => [...currentMessages, "Insert 100 yen to Buy Cola"])
    }
  }, [inserted])

  return (
    <div className="App">
      <button onClick={handleBuyClick}>Buy</button>
      <button onClick={handleInsert100Click} aria-label='Insert 100 yen coin'>Insert 100 yen coin</button>
      <div aria-label='Messages'>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  )
}
