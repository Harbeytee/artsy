import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Drop } from '../../../assets/marketplace/drop.svg'

export default function MarketPlaceHeader() {
  return (
    <header className='marketplace-head'>
        <nav className='marketplace-nav hide-desktop'>
          
          <Link style={{color: '#BCB7B7'}} to='/'>Home/</Link>
          <span > Marketplace/</span>
          <span style={{color: 'black'}}> Editorials</span>
          <p >Showing 1-5  of 18 results</p>

        </nav>

        <div>
          <input className='hide-mobile' type="text" placeholder='Search'/>

          <div className='sort'>
            <p className='hide-mobile'>See 1-6 of 15 results</p>
            <div className='hide-desktop'>
              Filters
              <Drop />
            </div>
            <div className='marketplace-sort'>
              Sort by
              <Drop />

            </div>
            
          </div>

        </div>
        
    </header>
  )
}
