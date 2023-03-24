import React, { useContext } from 'react'
import artwork from '../artwork'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Artwork({see}) {
  const { art } = useContext(Context)
  const arts = art.filter(val => see ? val.id <= 10 : val.id <= 7).map(val => (
    // val.id !== 1 ? ${val.id == 1 && 'animate__animated animate__fadeInUp'}
    <AnimationOnScroll key={val.id} offset='0'  animateOnce={true} animateIn='animate__fadeInUp' >
      <div className='art-card ' >
        
          <Link to={`/marketplace/${val.name}`}>
            <div className='art-img' style={{backgroundImage: `url(${val.img})`, backgroundColor: 'gray', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          </Link>
        

        
          <div className='deets'>
            <p>{val.name}</p>
            <p>$ {val.price.toFixed(2)}</p>

          </div>
        
     
     </div>
     </AnimationOnScroll>

     
    //  :
    //  <div className='art-card animate__animated animate__fadeInUp' key={val.id}>
    //     <Link to={`/marketplace/${val.name}`}>
    //       <div className='art-img' style={{backgroundImage: `url(${val.img})`, backgroundColor: 'gray', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
    //     </Link>
    //     <div className='deets'>
    //       <p>{val.name}</p>
    //       <p>$ {val.price.toFixed(2)}</p>

    //     </div>
     
    //  </div>
    
  ))
  return (
    <aside className='artworks'>
      {arts}
    </aside>
  )
}
