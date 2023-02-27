import React, { useState, useEffect, useRef } from 'react'
import filter from '../../../assets/icons/filter.svg'
import drop from '../../../assets/marketplace/drop.svg'

export default function Filter() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [ rangeValue, setRangeValue ] = useState(50)
  const val = useRef()

  const rangeStyle={
    backgroundSize: `${rangeValue}%`
  }
  function openAccordion(val) {

    return val === index
    
  }

  useEffect(() => {
    setOpen(true)
  
    
  }, [index])

  useEffect(() => {
    console.log(rangeValue)
  }, [rangeValue])
  

  return (
    <aside id="filter" className='hide-mobile'>
          <h4 className='filter-icon'><img src={filter} alt="filter icon" />  Filter</h4>
          <div className="accordions">
            <h5 onClick={() => {setOpen(!open), setIndex(1)}} className="accordion-head">
              By category
              <img  style={{transform: open && openAccordion(1) ? 'rotateX(0)' : 'rotateX(180deg)'}} src={drop} alt="" className="drop" />
            </h5>
            <div className="accordion-text" style={{height: open && openAccordion(1) ? '60%' : '0'}}>
              <label >
                <input type="checkbox" />
                Editorials
                
              </label>

              <label>
                <input type="checkbox" />
                Fashion
                
              </label>

              <label>
                <input type="checkbox" />
                Optics
                
              </label>

              <label>
                <input type="checkbox" />
                Art & Museum
                
              </label>

              <label style={{marginBottom: '3rem'}}>
                <input type="checkbox" />
                <span>Nature</span>
                
              </label>
            </div>

           
            <h5 onClick={() => {setOpen(!open), setIndex(2)}} className="accordion-head">
              By price
              <img  style={{transform: open && openAccordion(2) ? 'rotateX(0)' : 'rotateX(180deg)'}} src={drop} alt="" className="drop" />
            </h5>
            <div style={{height: open && openAccordion(2) ? '60%' : '0'}} className="accordion-text by-price">
              
              <p>$100.00 - ${Number(rangeValue) + 100}.00</p>
              <div style={{position: 'relative'}}>
              <div className="slider-thumb"></div>
              
              <input style={rangeStyle} ref={val} onChange={() => {setRangeValue(val.current.value)}} className='range' type="range" min={0} max={100} value={rangeValue} />
              </div>
            </div>

           
            <h5 onClick={() => {setOpen(!open), setIndex(3)}} className="accordion-head ">
              By artist
              <img  style={{transform: open && openAccordion(3) ? 'rotateX(0)' : 'rotateX(180deg)'}} src={drop} alt="" className="drop" />
              </h5>
            <div style={{height: open && openAccordion(3) ? '60%' : '0'}} className="accordion-text artist">
              
                <p className='under-line'>All</p>
                <p>Below $100.00</p>
                <p>$100.00 - $150.00</p>
                <p>$150.00 - $200.00</p>
                <p>Above $200.00</p>
              
            </div>

            <h5 onClick={() => {setOpen(!open), setIndex(4)}} className="accordion-head ">
              Collection year
              <img  style={{transform: open && openAccordion(4) ? 'rotateX(0)' : 'rotateX(180deg)'}} src={drop} alt="" className="drop" />
              </h5>
            <div style={{height: open && openAccordion(4) ? '60%' : '0'}} className="accordion-text ">
              
            
              
            </div>
          </div>

        </aside>
  )
}
