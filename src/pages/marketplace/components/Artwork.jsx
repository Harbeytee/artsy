import React, { useContext } from 'react'
import artwork from '../artwork'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
export default function Artwork() {
  const { art } = useContext(Context)
  const arts = art.filter(val => val.id <= 10).map(val => (
    <div className='art-card' key={val.id}>
      <Link to={`/marketplace/${val.name}`}><img className='art-img' src={val.img} alt="artwork image" /></Link>
      <div className='deets'>
        <p>{val.name}</p>
        <p>$ {val.price.toFixed(2)}</p>

      </div>
     
    </div>
  ))
  return (
    <aside className='artworks'>
      {arts}
    </aside>
  )
}
