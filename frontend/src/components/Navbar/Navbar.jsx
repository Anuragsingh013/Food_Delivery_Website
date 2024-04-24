import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../contexts/StoreContext.jsx'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home")
const { getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className="navbar">
            <Link to='/'> <img className='logo' src={assets.logo} alt="logo" /></Link>

            <ul className='navbar-menu'>
                <Link to="/" className={menu == 'Home' ? 'active' : ''} onClick={() => setMenu('Home')}> Home</Link>
                <a href='#explore-menu' className={menu == 'Menu' ? 'active' : ''} onClick={() => setMenu('Menu')}> Menu</a>
                <a href='#app-download' className={menu == 'mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}> mobile-app</a>
                <a href='#footer' className={menu == 'contact-us' ? 'active' : ''} onClick={() => setMenu('contact-us')}> contact us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>

                <button onClick={() => setShowLogin(true)}>sign-in</button>
            </div>
        </div>
    )
}

export default Navbar