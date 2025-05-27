import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './Home'
import Resume from './components/Resume';
import {Toaster} from './components/ui/toaster'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster/>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path="/resume" element={<Resume/>} />
        <Route path = "*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
  //browser router allows us to add multiple pages, which will be routed to depending on the circumstance
  // like in a url where we can add a path to the url to navigate to a different page
}

export default App
