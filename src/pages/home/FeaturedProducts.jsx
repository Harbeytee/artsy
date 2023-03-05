import React from 'react'
import feat from './FeaturedData'
import Arrow from '../../assets/home/Arrow'
import people from '../../assets/home/people.svg'
import { Link } from 'react-router-dom'
import { AnimationOnScroll } from 'react-animation-on-scroll'
export default function FeaturedProducts() {
 
  const products = feat.map((product, index) => (
    <div key={index}>
      
      <div className="line"></div>
    
    <article>
      

      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight"><div className='product' style={{backgroundImage: `url(${product.img})`}}>
        <Link to={`marketplace/${product.title}`} className='shadow'>
          <h3>{product.title}</h3>
          <h3>View  product</h3>
          <Arrow className='arrow' fill='white'/>
        </Link>
        
        
      </div>
      </AnimationOnScroll>

      <div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <h3 className='product-name'>{product.title}</h3>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
           purus sit amet luctus venenatis, lectus magna fringilla urna,
           porttitor rhoncus dolor pur
        </p>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp">
          <div className='people-flex'>
            <img src={people} alt="" className="people" />
            <p>64 major creators</p>
            <Link to={`marketplace/${product.title}`}><Arrow className='arrow' fill='#616161'/></Link>
            
          </div>
          <div className="line2"></div>
        </AnimationOnScroll>
        
      </div>
      
      {/* <div className="line2"></div> */}
      
    </article>
    </div>
  ))
  return (
    <section className='featured'>
        <AnimationOnScroll animateIn="animate__fadeInUp"><h2>Featured products</h2></AnimationOnScroll>
        <div>{products}</div>

      
        
    </section>
  )
}
