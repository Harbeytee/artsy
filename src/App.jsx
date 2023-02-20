import React, { useState, useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import MarketPlace from './pages/marketplace/MarketPlace'
import Auctions from './pages/auctions/Auctions'
import Drop from './pages/drop/Drop'
import MarketplaceDetail from './pages/marketplace/marketplacedetail/MarketplaceDetail'
import Cart from './pages/cart/Cart'
import ShoppingCart from './pages/cart/components/ShoppingCart'
import PaymentDetails from './pages/cart/PaymentDetails'
import ShippingDetails from './pages/cart/components/ShippingDetails'

function App() {
  
  const [on, setOn] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", function() {
       
        this.window.matchMedia('(max-width: 759px)').matches && setOn(false)
       
    })

  }, [])

  useEffect(() => {
    console.log(on)
  }, [on])
  

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path ='/' element={<Navbar />}>
          <Route index element ={<Home /> } />
          <Route path='/marketplace' element={<MarketPlace />} />
          <Route path='/marketplace/:id' element={<MarketplaceDetail />} />
          <Route path='/auctions' element={<Auctions />} />
          <Route path='/drop' element={<Drop />} />
          <Route path='/cart' element={<Cart turnOn={() => setOn(true) } turnOff={() => setOn(false)}/>}>
            <Route index element={<ShoppingCart on={on} turnOff={() => setOn(false)}/>} />
            <Route path='shipping' element={<ShippingDetails />} />
            <Route path='payment' element={<PaymentDetails />} />
          </Route>
          

         </Route>
         

        </Routes>
        
      
      </div>

    </Router>
    
  )
}

export default App
