import React, {useState, useEffect, useRef} from 'react'
import commenters from '../comments'
import airplane from '../../../../assets/auctions/airplane.svg'
import Like from '../../../../assets/marketplace/Like'
import HeartAnimation from './HeartAnimation'
import './AuctionAside.scss'
export default function AuctionAside({className=''}) {

   const [ comments, setComments ] = useState(commenters)
   
  const [number, setNumber] = useState(0)
  

  if(comments.length > 12) {
    setNumber(0)
    setComments((prev) => prev.filter((val, index) => index > 6))
  }
  else {
    useEffect(() => {
      // setNumber(prev => prev + 1)
           
          
             
           
       
      // console.log(comments)
       const interval = setInterval(() => {
        setNumber(prev => prev + 1)
        setComments(prev =>  [...prev, prev[number] ])
           
       }, 3000);
     
       return () => {
         clearInterval(interval)
       }
     }, [number])
  }
 

    

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
    <aside className={`auction-aside ${className}`}>
            <div className="comments-container">
              <div className="comments">
                <div className="comment">
                  {comment}
                </div>
              </div>
              
                <HeartAnimation />
                
              
              
              

            </div>
            
            <p>Creator : Stormi Rylie</p>
            <div className="aside-bottom">
              <div className="input2">
                <input type="text" placeholder='Place a bid...'/>
                <img src={airplane} alt="icon with the shape of a paperplane" className="airplane" />

              </div>
              
              {/* <div  */}
                <Like stroke='none' onClick={() => {}} className="aside-heart" />
              {/* </div> */}

            </div>
            
          </aside>
  )
}
