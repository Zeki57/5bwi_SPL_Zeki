import { useState } from 'react'
import Teachers from './components/Teachers'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <div className="App">
      <Teachers />
    </div>
  )
}

export default App
