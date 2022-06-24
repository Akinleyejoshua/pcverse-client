import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <GlobalProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalProvider>
  ,
  document.getElementById('root')
)
