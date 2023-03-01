import React, { useState, useContext, useEffect } from 'react'
import search from '../../assets/icons/search-icon.svg'
import cartIcon from '../../assets/icons/cart-icon.svg'
import message from '../../assets/icons/message-icon.svg'
import notif from '../../assets/icons/notif-icon.svg'
import { Context } from '../../Context/Context'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar({turnOff, changeI}) {
    const { changeIndex, index, msg,  displayMessage, art } = useContext(Context)
    const style= {
        color: msg.color,
    }
    const [display, setDisplay] = useState(false)
    function changeStyle(val) {
        
       return val === index ? 'clicked' : 'unclicked'
    }
    useEffect(() => {
        if(display) {
          document.body.style.overflowY ="hidden"
        }
        else if(!display) {
          document.body.style.overflowY ="scroll"
        }
       
    }, [display])
    useEffect(() => {
            window.addEventListener('resize', () => {
                window.matchMedia('(min-width:760px)').matches && setDisplay(false)
            })
    }, [])
    
  return (
   <>
   {displayMessage && <div style={style} className="msg">{msg.message}</div>}
    <header id="navbar">
        <div className='head'>
            <nav /*style={{position : display && window.matchMedia('(max-width:759px)').matches ? 'absolute' : 'relative', right: '15px'}}*/ onClick={() => setDisplay(!display)} className='hamburger'>
                <div style={{transform: display? "translateY(4.5px) rotate(45deg)" : "rotate(0)"}}></div>
                <div style={{opacity: display? "0" : "1"}}></div>
                <div style={{transform: display? "translateY(-4.5px) rotate(-45deg)" : "rotate(0)"}}></div>
            </nav>
            <Link to='/' style={{marginLeft: display?'calc(100% - 110px)': '0'}}>ARTSY.</Link>
            <div style={{opacity : display?'0' : '1'}} className='icons'>
                <img src={search} alt="search icon" />
                <div style={{position: 'relative'}}>
                    {art.some(item => item.inCart == true) && <div className='ellipse'></div>}
                    <Link onClick={() => {turnOff(), changeI(1)}} to='/cart'>
                        <img src={cartIcon} alt=" cart icon" />
                        
                    </Link>
                </div>
                <Link to='/drop'><img src={notif} className="notif" alt="notification icon" /></Link>
                
            </div>

        </div>
        <nav className={display? 'open' : 'close'}>
            <Link to='/' onClick={() => {changeIndex(1), setDisplay(false)}} className={changeStyle(1)}>Home</Link>
            <Link to='marketplace' onClick={() => {changeIndex(2), setDisplay(false)}} className={changeStyle(2)}>Marketplace</Link>
            <Link to='auctions' onClick={() => {changeIndex(3), setDisplay(false)}} className={changeStyle(3)}>Auctions</Link>
            <Link to='drop' onClick={() => {changeIndex(4), setDisplay(false)}} className={changeStyle(4)}>Drop</Link>
            
            <img className='message' src={message} alt="message icon" />
        </nav>
        
        
    </header>

    <Outlet />
    </>
    
  )
}
