import React, { useState } from 'react'
import search from '../../assets/icons/search-icon.svg'
import cart from '../../assets/icons/cart-icon.svg'
import message from '../../assets/icons/message-icon.svg'
import notif from '../../assets/icons/notif-icon.svg'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    const [index, setIndex] = useState(1)
    const [display, setDisplay] = useState(false)
    const style ={
        flexDirection : display && window.matchMedia('(max-width:759px)').matches ? 'row-reverse' : 'row'
    }
    function changeStyle(val) {
       return val === index ? 'clicked' : 'unclicked'
    }
  return (
   <>
    <header id="navbar">
        <div className='head'>
            <nav style={{transform : display && window.matchMedia('(max-width:759px)').matches ? 'translateX(90%)' : '0'}} onClick={() => setDisplay(!display)} className='hamburger'>
                <div></div>
                <div></div>
                <div></div>
            </nav>
            <p style={{marginRight: display && window.matchMedia('(max-width:759px)').matches ?'0%': '0'}}>ARTSY.</p>
            <div style={{display : display && window.matchMedia('(max-width:759px)').matches ? 'none' : 'flex'}} className='icons'>
                <img src={search} alt="search icon" />
                <div>
                    <div className='ellipse'></div>
                    <img src={cart} alt=" cart icon" />
                </div>
                <img src={notif} className="notif" alt="notification icon" />
                
            </div>

        </div>
        <nav className={display? 'open' : 'close'}>
            <Link to='/' onClick={() => setIndex(1)} className={changeStyle(1)}>Home</Link>
            <Link to='marketplace' onClick={() => setIndex(3)} className={changeStyle(3)}>Marketplace</Link>
            <Link to='auctions' onClick={() => setIndex(2)} className={changeStyle(2)}>Auctions</Link>
            <Link to='drop' onClick={() => setIndex(4)} className={changeStyle(4)}>Drop</Link>
            
            <img className='message' src={message} alt="message icon" />
        </nav>
        
        
    </header>

    <Outlet />
    </>
    
  )
}
