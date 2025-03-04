
import { Routes, Route } from 'react-router-dom'

import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Product } from './components/Product.jsx'
import { Cart } from './pages/Cart.jsx'

import { ModeProvider } from './context/mode/ModeProvider.jsx'



import './App.css'

function App() {


  return (
    <>
      <ModeProvider>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product/:id' element={<Product/>}/>
            <Route path='cart' element={<Cart/>}/>
          </Route>

          <Route path="*" element={<Home/>} />
        </Routes>
      </ModeProvider>

    </>
  )
}

export default App
