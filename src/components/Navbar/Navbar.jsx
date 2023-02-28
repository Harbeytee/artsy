import React, { useState, useContext } from 'react'
import search from '../../assets/icons/search-icon.svg'
import cartIcon from '../../assets/icons/cart-icon.svg'
import message from '../../assets/icons/message-icon.svg'
import notif from '../../assets/icons/notif-icon.svg'
import { Context } from '../../Context/Context'
import './Navbar.scss'
import { Link, Outlet } from 'react-router-dom'
export default function Navbar() {
    const { changeIndex, index, msg, changeMessage, displayMessage, cart } = useContext(Context)
    const style= {
        color: msg.color,
    }
    const [display, setDisplay] = useState(false)
    // const style ={
    //     flexDirection : display && window.matchMedia('(max-width:759px)').matches ? 'row-reverse' : 'row'
    // }
    function changeStyle(val) {
       return val === index ? 'clicked' : 'unclicked'
    }
  return (
   <>
   {displayMessage && <div style={style} className="msg">{msg.message}</div>}
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
                <div style={{position: 'relative'}}>
                    {cart.length > 0 && <div className='ellipse'></div>}
                    <Link to='/cart'>
                        <img src={cartIcon} alt=" cart icon" />
                        
                    </Link>
                </div>
                <Link to='/drop'><img src={notif} className="notif" alt="notification icon" /></Link>
                
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
