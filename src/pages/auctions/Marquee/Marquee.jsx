import React, { useState, useRef, useEffect} from 'react'
import './Marquee.scss'

export default function Marquee({list = [], toRight, time = 1, ...props}) {
    const getFillList = (list, copyTimes = 1) => {
        let newlist = []
        for(let i = 0; i < copyTimes; i++) {
            newlist.push(...list)
        }
        return newlist
    }

    const marqueeContainer = useRef(null)
    const marqueeArea = useRef(null)
    const [moveLeft, setMoveLeft] = useState(0)
    const [showList, setShowList] = useState(list)
    const [realTime, setRealTime] = useState(time)

    useEffect(() => {
        const containerWidth = Math.floor(marqueeContainer.current.offsetWidth)
        const areaWidth = Math.floor(marqueeArea.current.scrollWidth)

        const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth))
        const newMoveLeft = areaWidth * Math.floor(copyTimes / 2)
        const newRealtime = time * parseFloat((newMoveLeft / containerWidth).toFixed(2))
        setShowList(getFillList(list, copyTimes))
        setMoveLeft(newMoveLeft)
        setRealTime(newRealtime)

    }, [list])

    const marqueeAreaStyle = {
        transform: `translateY(-${/*(props) => props.move*/moveLeft}px)`,
        animation: `moveLeft ${/*(props) => props.time*/realTime}s linear infinite ${props.toRight ? 'reverse' : ''}`,

    }
  return (
    <div className="wrapper-container">
        <div ref={marqueeContainer} className="marquee-container">
            <div style={marqueeAreaStyle} ref={marqueeArea} /*move={moveLeft} time={realTime} toRight={toRight}*/ className="marquee-area">
                {showList.map((item, index )=> (<div key ={index} className='marquee-item'>{item}</div>))}
            </div>

        </div>
    </div>
  )
}
