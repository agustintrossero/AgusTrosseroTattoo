import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Styles from './routes/styles'
import Prints from './routes/prints'
import BookAppointments from './routes/bookAppointments'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemDetail from './components/ItemDetail'
import Cart from './routes/cart'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route exact path='/styles' element={<Styles/>}/>
          <Route exact path='/prints' element={<Prints/>}/>
          <Route exact path='/book-appointments' element={<BookAppointments/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/product/:id' element={<ItemDetail/>}/>
          <Route exact path='/category/:category' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
