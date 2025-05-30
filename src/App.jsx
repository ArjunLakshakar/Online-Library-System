import { useState } from 'react'
import './App.css'

import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Provider store={store} >
          <Navbar/>
          <Outlet />
          <Footer />
        </Provider>
      </div>
    </>
  )
}

export default App
