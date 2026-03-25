// main.jsx — Entry point của React app
// File này chỉ làm 1 việc: mount App vào DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode: giúp phát hiện lỗi tiềm ẩn trong development
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
