import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ArrowProvider } from './context/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider></ThemeProvider>
    <ArrowProvider>
       <App />
    </ArrowProvider>
    </ThemeProvider>
  </StrictMode>,
)
