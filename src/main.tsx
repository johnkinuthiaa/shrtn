import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SideBar from "./components/SideBar.tsx";
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <SideBar/>
          <App />
      </BrowserRouter>

  </StrictMode>,
)
