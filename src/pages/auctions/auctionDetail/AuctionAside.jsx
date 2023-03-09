import React, {useState, useEffect} from 'react'
import commenters from './comments'
import airplane from '../../../assets/auctions/airplane.svg'

export default function AuctionAside() {

   const [ comments, setComments ] = useState(commenters)
  const [number, setNumber] = useState(0)

  if(comments.length > 12) {
    setNumber(0)
    setComments((prev) => prev.filter((val, index) => index > 6))
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
  // const [speed, setSpeed] = useState(4);
  // const [lastScrollPos, setLastScrollPos] = useState(0);

  // useEffect(() => {
  //   const marqueeEls = document.querySelectorAll('.marquee');
  //   marqueeEls.forEach(function (el) {
  //     const container = el.querySelector('.inner');
  //     const content = el.querySelector('.inner > *');
  //     //Get total width
  //     const elWidth = content.offsetWidth;
  //     //Duplicate content
  //     let clone = content.cloneNode(true);
  //     container.appendChild(clone);
  //     let progress = 1;
  //     function loop() {
  //       progress = progress - speed;
  //       if (progress <= elWidth * -1) {
  //         progress = 0;
  //       }
  //       container.style.transform = `translateX(${progress}px)`;
  //       container.style.transform += `skewX(${speed * 0.4}deg)`;
  //       window.requestAnimationFrame(loop);
  //     }
  //     loop();
  //   });

  //   function handleSpeedClear() {
  //     setSpeed(4);
  //   }

  //   function handleMarquee() {
  //     const maxScrollValue = 12;
  //     const newScrollPos = window.scrollY;
  //     let scrollValue = newScrollPos - lastScrollPos;
  //     if (scrollValue > maxScrollValue) scrollValue = maxScrollValue;
  //     else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue;
  //     setSpeed(scrollValue);
  //     clearTimeout(timer);
  //     const timer = setTimeout(handleSpeedClear, 10);
  //   }

  //   window.addEventListener('scroll', handleMarquee);

  //   return () => {
  //     window.removeEventListener('scroll', handleMarquee);
  //   };
  // }, [speed, lastScrollPos]);

  

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

              <div className="hearts">
                <div className="marquees">
                  <div className="inners"><p>hello</p></div>
                </div>
                hearts
              </div>

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
