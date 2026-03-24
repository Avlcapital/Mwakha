import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const pageKey = document.body.dataset.page || 'home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App pageKey={pageKey} />
  </StrictMode>,
)
