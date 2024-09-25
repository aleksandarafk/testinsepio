import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom'
import HowItWorks from './HowItWorks.jsx'
import NotFound from './NotFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Routes>
      <Route path='/howitworks' element={<HowItWorks/>}/>
      <Route path="/" element={ <App /> }/>
      <Route path="*" element={ <NotFound /> }>
    </Route>
  </Routes>
</BrowserRouter>

)
