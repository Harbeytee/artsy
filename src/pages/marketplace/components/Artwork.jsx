import React from 'react'
import artwork from '../artwork'

export default function Artwork() {
  const art = artwork.map(val => (
    <div className='art-card' key={val.id}>
      <img className='art-img' src={val.img} alt="artwork image" />
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
