import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Web3ModalProvider from './components/Web3ModalProvider';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <main class="bg-gradient-to-r from-violet-500 to-fuchsia-500">

    <Web3ModalProvider>
      
      <App />
    </Web3ModalProvider>
      </main>
  </React.StrictMode>,
)
