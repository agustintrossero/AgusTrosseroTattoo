import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Styles from './routes/styles'
import Prints from './routes/prints'
import BookAppointments from './routes/bookAppointments'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/styles',
    element: <Styles/>
  },
  {
    path: '/prints',
    element: <Prints/>
  },
  {
    path: '/book-appointments',
    element: <BookAppointments/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
