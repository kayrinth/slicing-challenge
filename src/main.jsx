import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Porto from './pages/porto'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Porto />
  </StrictMode>,
)
