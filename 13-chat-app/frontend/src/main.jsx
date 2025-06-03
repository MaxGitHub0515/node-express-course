import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'
import {BrowserRouter} from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/*  to be able to use compoenent that comming from react-router-dom */}
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
