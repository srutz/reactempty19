import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { FormContextProvider } from './hooks/FormContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormContextProvider>
        <App />
    </FormContextProvider>
  </StrictMode>,
)
