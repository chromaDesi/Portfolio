import { useState } from 'react'
import './App.css'
import Navabar from './components/Navabar'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
  //browser router allows us to add multiple pages, which will be routed to depending on the circumstance
}

export default App
