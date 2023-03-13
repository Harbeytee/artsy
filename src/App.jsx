import React, { useState, useEffect} from 'react'
import Provider from './Context/Context'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import MarketPlace from './pages/marketplace/MarketPlace'
import Auctions from './pages/auctions/Auctions'
import AuctionDetail from './pages/auctions/auctionDetail/AuctionDetail'
import Drop from './pages/drop/Drop'
import MarketplaceDetail from './pages/marketplace/marketplacedetail/MarketplaceDetail'
import Cart from './pages/cart/Cart'
import ShoppingCart from './pages/cart/components/ShoppingCart'
import PaymentDetails from './pages/cart/paymentDetails/PaymentDetails'
import ShippingDetails from './pages/cart/components/ShippingDetails'
import Confirmed from './pages/confirmed/Confirmed'
import PractiseCarousel from './pages/practiseCarousel/practiseCarousel'


function App() {
  
  const [on, setOn] = useState(false)
  const [index, setIndex] = useState(1)

    const changeIndex = (val) => {
            setIndex(val)
    }

  // useEffect(()=> {
  //   console.log(index)
  // },[index])

  // useEffect(() => {
  //   window.addEventListener("resize", function() {
       
  //       this.window.matchMedia('(max-width: 759px)').matches && setOn(false)
       
  //   })

  // }, [])

  
  

  return (
    <Provider>
      <Router>
        <div className="App">
          <Routes>
          <Route path ='/' element={<Navbar turnOff={() => setOn(false)} changeI={changeIndex}/>}>
              <Route index element ={<Home /> } />
              <Route path='/marketplace' element={<MarketPlace />} />
              <Route path='/marketplace/:id' element={<MarketplaceDetail />} />
              <Route path='/auctions' element={<Auctions />} />
              
              <Route path='/drop' element={<Drop />} />
              <Route path='/cart' element={<Cart index={index} changeIndex={changeIndex} on={on} turnOn={() => setOn(true) } turnOff={() => setOn(false)}/>}>
                <Route index element={<ShoppingCart on={on} turnOn={() => setOn(true) } turnOff={() => setOn(false)}/>} />
                <Route path='shipping' element={<ShippingDetails />} />
                <Route path='payment' element={<PaymentDetails changeIndex={changeIndex}/>} />
              </Route>
              <Route path='/confirmed' element={<Confirmed />} />
            </Route>
            <Route path='/auctions/:id' element={<AuctionDetail />} />
            <Route path='/practise' element={<PractiseCarousel />} />
          

          </Routes>
          
        
        </div>

      </Router>
    </Provider>
    
  )
}

export default App
