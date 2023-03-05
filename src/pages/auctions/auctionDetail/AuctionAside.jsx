import React from 'react'
import comments from './comments'
import airplane from '../../../assets/auctions/airplane.svg'

export default function AuctionAside() {

    const comment = comments.map((val, index) => (
        <div className='commenter' key={index}>
            <img className='comment-img' src={val.img} alt="" />
            <div className='comment-info'>
                <div className="commenter-name">{val.name}</div>
                <div className="commenter-comment">{val.comment}</div>

            </div>
            
        </div>
    ))
  return (
    <aside className="auction-aside">
            <div className="comments-container">
              <div className="comments">
                <div className="comment">
                  {comment}
                </div>
              </div>

              <div className="hearts">hearts</div>

            </div>
            
            <p>Creator : Stormi Rylie</p>
            <div className="aside-bottom">
              <div className="input2">
                <input type="text" placeholder='Place a bid...'/>
                <img src={airplane} alt="icon with the shape of a paperplane" className="airplane" />

              </div>
              
              <div className="aside-heart"></div>

            </div>
            
          </aside>
  )
}
