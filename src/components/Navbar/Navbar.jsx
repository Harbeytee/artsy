import React, { useState, useContext } from 'react'
import search from '../../assets/icons/search-icon.svg'
import cart from '../../assets/icons/cart-icon.svg'
import message from '../../assets/icons/message-icon.svg'
import notif from '../../assets/icons/notif-icon.svg'
import { Context } from '../../Context/Context'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    const { changeIndex, index } = useContext(Context)
    //const [index, setIndex] = useState(1)
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
            <Link to='/' style={{marginRight: display && window.matchMedia('(max-width:759px)').matches ?'0%': '0'}}>ARTSY.</Link>
            <div style={{display : display && window.matchMedia('(max-width:759px)').matches ? 'none' : 'flex'}} className='icons'>
                <img src={search} alt="search icon" />
                <div>
                    <div className='ellipse'></div>
                    <Link to='/cart'><img src={cart} alt=" cart icon" /></Link>
                </div>
                <img src={notif} className="notif" alt="notification icon" />
                
            </div>

        </div>
        <nav className={display? 'open' : 'close'}>
            <Link to='/' onClick={() => changeIndex(1)} className={changeStyle(1)}>Home</Link>
            <Link to='marketplace' onClick={() => changeIndex(2)} className={changeStyle(2)}>Marketplace</Link>
            <Link to='auctions' onClick={() => changeIndex(3)} className={changeStyle(3)}>Auctions</Link>
            <Link to='drop' onClick={() => changeIndex(4)} className={changeStyle(4)}>Drop</Link>
            
            <img className='message' src={message} alt="message icon" />
        </nav>
        
        
    </header>

    <Outlet />
    </>
    
  )
}
