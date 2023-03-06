import React, {useState, useEffect} from 'react'
import commenters from './comments'
import airplane from '../../../assets/auctions/airplane.svg'

export default function AuctionAside() {

  const [ comments, setComments ] = useState(commenters)
  const [number, setNumber] = useState(0)

  if(comments.length > 12) {
    setNumber(0)
    setComments(prev => prev.slice(6, 12))
  }
  else {
    useEffect(() => {
      // setNumber(prev => prev + 1)
           
          
             
           
       
       console.log(comments)
       const interval = setInterval(() => {
        setNumber(prev => prev + 1)
           setComments(prev =>  [...prev, prev[number] ])
           
       }, 3000);
     
       return () => {
         clearInterval(interval)
       }
     }, [number])
  }
 
  //animate__animated animate__fadeInUp

    const comment = comments.map((val, index) => (
        <div className='commenter animate__animated animate__fadeInUp' key={index}>
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
