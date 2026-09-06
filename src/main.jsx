import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { preloadAssets } from './libs/preload.js'
import {SpeedInsights} from "@vercel/speed-insights/react"

// Only preload the Spline scene where it will actually be used —
// mobile/touch/reduced-motion visitors never render it (see Hero.jsx).
const wantsHeavyMotion =
  window.matchMedia('(min-width: 768px)').matches &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (wantsHeavyMotion) preloadAssets();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
