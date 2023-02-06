import React, { useEffect } from 'react'
import './MarketPlace.scss'
import Filter from './components/Filter'
import MarketPlaceHeader from './components/MarketPlaceHeader'
import Artwork from './components/Artwork'
import Arrow from '../../assets/home/Arrow'
import Footer from '../../components/Footer/Footer'


export default function MarketPlace() {

  //useEffect()
  return (
    <div id='marketplace'>
      
      <MarketPlaceHeader />
      <main>
        <div className='flex'>
          <Filter />
          <Artwork />

        </div>
        
        <div className='hide-mobile see-more'>
          See more
        </div>
        <div className='hide-desktop load-more'>
          Load more
          <Arrow className='arrow' fill='#616161'/>
        </div>

      </main>
      <Footer />
      
    </div>
    
  )
}
