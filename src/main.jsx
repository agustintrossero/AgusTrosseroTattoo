import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Styles from './routes/styles'
import Prints from './routes/prints'
import BookAppointments from './routes/bookAppointments'
import Cart from './routes/cart'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route path='styles' element={<Styles/>}/>
          <Route path='prints' element={<Prints/>}/>
          <Route path='book-appointments' element={<BookAppointments/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
