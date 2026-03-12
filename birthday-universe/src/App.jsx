import { useState } from "react"
import Universe from "./components/Universe"
import "./App.css"

function App() {

  const [message, setMessage] = useState(null)

  return (
    <div className="app-container">

      <Universe setMessage={setMessage} />

      {message && (
        <div className="message-overlay">

          <div className="message-card">

            <p>{message}</p>

            <button
              className="close-btn"
              onClick={() => setMessage(null)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  )
}

export default App