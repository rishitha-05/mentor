import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
            useEffect(() =>{
                window.addEventListener('scroll', () => {
                    window.scrollY > 500 ? setSticky(true) : setSticky(false);
                })
            },[]);
    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <h1>ONLINE MENTORING SYSTEM</h1>
            <ul>
                <li><Link to='BodyHomepage' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={0} duration={500}>Login/Register</Link></li>
                <li><Link to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar