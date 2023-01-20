import React from 'react'
import feat from './FeaturedData'
import Arrow from '../../assets/home/Arrow'
import people from '../../assets/home/people.svg'
export default function FeaturedProducts() {
 
  const products = feat.map((product, index) => (
    <div key={index}>
    <div className="line"></div>
    <article >
      

      <div className='product' style={{backgroundImage: `url(${product.img})`}}>
        <div className='shadow'>
          <h3>{product.title}</h3>
          <h3>View  product</h3>
          <Arrow className='arrow' fill='white'/>
        </div>
        
        
      </div>

      <div>
        <h3 className='product-name'>{product.title}</h3>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
           purus sit amet luctus venenatis, lectus magna fringilla urna,
           porttitor rhoncus dolor pur
        </p>
        <div className='people-flex'>
          <img src={people} alt="" className="people" />
          <p>64 major creators</p>
          <Arrow className='arrow' fill='#616161'/>
          
        </div>
        
      </div>

      <div className="line2"></div>
    </article>
    </div>
  ))
  return (
    <section className='featured'>
        <h2>Featured products</h2>
        <div>{products}</div>

      
        
    </section>
  )
}
