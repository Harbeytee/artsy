import React, { useEffect, useContext } from 'react'
import './MarketPlace.scss'
import Filter from './components/Filter'
import MarketPlaceHeader from './components/MarketPlaceHeader'
import Artwork from './components/Artwork'
import Arrow from '../../assets/home/Arrow'
import Footer from '../../components/Footer/Footer'
import { Context } from '../../Context/Context'
import { useState } from 'react'

export default function MarketPlace() {
  const { changeIndex } = useContext(Context)
  const [ see, setSee ] = useState(false)
  
  useEffect(() => {
    changeIndex(2)
    window.scrollTo({top: 0, left: 0});

  }, [])

  
  return (
    <div id='marketplace'>
      
      <MarketPlaceHeader />
      <main>
        <div className='flex'>
          <Filter />
          <Artwork see={see}/>

        </div>
        
        <div onClick={() => setSee(!see)} className='hide-mobile see-more'>
          { see == true? 'See less' : 'See more'}
        </div>
        <div onClick={() => setSee(!see)} className='hide-desktop load-more'>
        { see == true? 'Load less' : 'Load more'}
          
          <Arrow className='arrow' fill='#616161'/>
        </div>

      </main>
      <Footer />
      
    </div>
    
  )
}
