import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { ArrowProvider } from './context/FirebaseContext.jsx'
import { ThemesProvider } from 'styled-components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ArrowProvider>
      {/* <ThemesProvider> */}
        <App />
      </ThemesProvider>
    </ArrowProvider>
  </StrictMode>,
)
