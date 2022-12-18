import { useCallback, useState } from 'react'
import './App.css'
import cola from './assets/cola.png'

export function App() {
  const [inserted, setInserted] = useState(0)
  const handleInsert100Click = useCallback(() => setInserted(current => current + 100), [])

  const [messages, setMessages] = useState(["Please push Buy button."])
  const handleBuyClick = useCallback(() => {
    if (inserted >= 100) {
      setMessages(currentMessages => [...currentMessages, "Cola"])
      setInserted(currentInserted => currentInserted - 100)
    } else {
      setMessages(currentMessages => [...currentMessages, "Insert 100 yen to buy Cola"])
    }
  }, [inserted])

  return (
    <div className="App">
      <div id="bendingMachine">
        <div id="itemDisplay">
          <div className="item">
            <div className="can">
              <img src={cola} alt="コーラ" height="100" width="79"/>
            </div>
            <div className="price">100円</div>
            <button className="buyButton"></button>
          </div>
        </div>
        <div id="controls">
          <div id="coinSlot"></div>
          <div id="returnButton"><span>返却</span></div>
          <div id="currentAmountDisplay"><span>¥1,200</span></div>
        </div>
        <div id="output">
          <div className="boughtItem cola"></div>
          <div className="boughtItem cola"></div>
        </div>
      </div>
    </div>
  )
}
