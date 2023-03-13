import React, { useState } from 'react'
import carousel from '../marketplace/marketplacedetail/carousel'
import './practiseCarousel.scss'
import { useSnapCarousel } from 'react-snap-carousel'


export default function practiseCarousel() {
    const [index, setindex] = useState(0)
    const { scrollRef, pages, activePageIndex, next, prev, goTo} = useSnapCarousel()
    const handlePrev = () => {
        setindex(prev => (prev - 1 + carousel.length) % carousel.length)
    }

    const handleNext = () => {
        setindex(prev => (prev + 1) % carousel.length)
    }

  return (
    <div className='carosel'>
        <div className="carosel-inner" ref={scrollRef} style={{transform: `translateX(-${index * (100 / carousel.length)}%)`}}>
            {
                carousel.map((img, i) => (
                    <div key={i} className="carosel-item">
                        <img src={img.img} alt="" />
                    </div>
                ))
            }
        </div>
        <button onClick={prev()} className="carosel-prev">&lt;</button>
        <button onClick={next()} className="carosel-prev">&gt;</button>
    </div>
  )
}
