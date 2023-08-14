import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { LanguageProvider } from './context/LanguageContext.tsx'
import App from './App.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
