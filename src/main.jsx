import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TimerContextProvider } from './components/TimerContext.jsx'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TimerContextProvider>
      <App />
      <Analytics />
    </TimerContextProvider>
  </React.StrictMode>,
)
