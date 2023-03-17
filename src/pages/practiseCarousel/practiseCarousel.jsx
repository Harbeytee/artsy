import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import carousel from '../marketplace/marketplacedetail/carousel'

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {carousel.map((item, i) => (
          <img
          key={i}
          src={item.img}
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '100%',
              height: '250px',
              maxWidth: '350px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        //     {/* Item {i} */}
        //   </img>
        ))}
      </div>
      {/* <div>
        {activePageIndex + 1} / {pages.length}
      </div> */}
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
      {/* <ol style={{ display: 'flex' }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol> */}
    </>
  );
};

export default AdvancedCarousel;