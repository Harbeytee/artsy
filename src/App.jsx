import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import MarketPlace from './pages/marketplace/MarketPlace'
import Auctions from './pages/auctions/Auctions'
import Drop from './pages/drop/Drop'
function App() {
  

  return (
    <Router>
      <div className="App">
        <Routes>
         <Route path ='/' element={<Navbar />}>
          <Route index element ={<Home /> } />
          <Route path='/marketplace' element={<MarketPlace />} />
          <Route path='/auctions' element={<Auctions />} />
          <Route path='/drop' element={<Drop />} />

         </Route>
         

        </Routes>
        
      
      </div>

    </Router>
    
  )
}

export default App
