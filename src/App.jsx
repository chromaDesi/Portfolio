import { useState } from 'react'
import './App.css'
import Navabar from './components/Navabar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navabar/>
      </div>
    </>
  )
}

export default App
