import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'
import { Provider } from 'react-redux'
import store from './redux/store'
import AuthProvider from './auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>
)
