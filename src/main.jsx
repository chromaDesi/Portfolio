import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { preloadAssets } from './libs/preload.js'
import {SpeedInsights} from "@vercel/speed-insights/react"

// Start preloading assets immediately
preloadAssets();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
