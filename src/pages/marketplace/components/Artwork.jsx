import React from 'react'
import artwork from '../artwork'
import { Link } from 'react-router-dom'

export default function Artwork() {
  const art = artwork.filter(val => val.id <= 10).map(val => (
    <div className='art-card' key={val.id}>
      <Link to={`/marketplace/${val.name}`}><img className='art-img' src={val.img} alt="artwork image" /></Link>
      <div className='deets'>
        <p>{val.name}</p>
        <p>$ {val.price}</p>

      </div>
     
    </div>
  ))
  return (
    <aside className='artworks'>
      {art}
    </aside>
  )
}
