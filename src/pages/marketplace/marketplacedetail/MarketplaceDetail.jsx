import React from 'react'
import { useParams } from 'react-router-dom'
import artwork from '../artwork'
import { Link } from 'react-router-dom'
import './MarketplaceDetail.scss'

export default function MarketplaceDetail() {
    const { id } = useParams()
    const detail = artwork.find(val => val.id == id)
    console.log(detail)
    const style = {
       color: '#BCB7B7'
    }
  return (
    <div id='marketplace-detail'>
        <nav className='detail-header'>
          
          <Link style={style} to='/'>Home/</Link>
          <Link style={style} to='/marketplace'> Marketplace/</Link>
          <Link style={style} to='/marketplace'> Editorials/</Link>
          <span> {detail.name}</span>
         

        </nav>
        
        <div className="detail-card">
            <div className="detail-deets">
                <img src={detail.img} alt="artwork image" className="detail-img" />
                <div className='detail-info'>
                    <p>{detail.name}</p>
                    <p>$ {detail.price}</p>
                </div>

            </div>
            
            <div className='detail-second'>
                <div className="detail-card-head hide-mobile">
                    <p className="detail-name"></p>
                    <span className="detail-price"></span>

                </div>
                <div>
                    <p>Creator: <span className="creator-name">Ali Dawa</span></p> 
                    <p>Made in Italy</p>
                    <p>Total views: 1.7K views</p>
                    <div>
                        <span>+</span>
                        <span>1</span>
                        <span>-</span>
                    </div>
                    <div className="detail-btn">
                        <button>Add to cart</button>
                        <button>Like</button>
                    </div>
                </div>
                <div>Description</div>
                <div>Listings</div>
                <div>Status</div>
            </div>

        </div>
        <div className="detail-nav"></div>
        <div className="detail-flex">
            

        </div>
    </div>
  )
}
