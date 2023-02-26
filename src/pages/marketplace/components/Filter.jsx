import React from 'react'
import filter from '../../../assets/icons/filter.svg'
import { ReactComponent as Checkmark } from '../../../assets/marketplace/checkmark.svg'
export default function Filter() {
  return (
    <aside id="filter" className='hide-mobile'>
          <h4 className='filter-icon'><img src={filter} alt="filter icon" />  Filter</h4>
          <div className="accordions">
            <h5 className="accordion-head">
              By category
            </h5>
            <div className="accordion-text">
              <label>
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

              <label>
                <input type="checkbox" />
                <span>Nature</span>
                
              </label>
            </div>

           
            <h5 className="accordion-head">
              By price
            </h5>
            <div className="accordion-text"></div>

           
            <h5 className="accordion-head">
              By artist
              </h5>
            <div className="accordion-text"></div>
          </div>

        </aside>
  )
}
