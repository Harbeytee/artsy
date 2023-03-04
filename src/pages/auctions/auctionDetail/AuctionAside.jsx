import React from 'react'
import comments from './comments'

export default function AuctionAside() {

    const comment = comments.map((val, index) => (
        <div key={index}>
            <img src={val.img} alt="" />
            <div className="commenter">{val.name}</div>
            <div className="commenter-comment">{val.comment}</div>
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

            </div>
            
            <p>Creator : Stormi Rylie</p>
            <div className="aside-bottom">
              <input type="text" placeholder='Place a bid...'/>
              <div className="aside-heart"></div>

            </div>
            
          </aside>
  )
}
