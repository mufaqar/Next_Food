import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import { FaBars } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { BsShop } from 'react-icons/bs';
import { RiShieldUserLine } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';


export default function Header() {
  const [mobile, setMobile] = useState(false);
  const count = useSelector((state) => state.cart.cart);
  return (
    <>
    <header>
    <div className="container flex space_between v_align header">
      <div className="logo">
        <Link href='/'>
          <figure style={{width:220}}>
            <Image src={logo} alt="logo" className='logoimg'/>
          </figure>
        </Link>
      </div>
      <div className="right flex space_between v_align desktop">
        <div><FaBars size="1.3rem" color='#ce1a26'/></div>
        <div className='divider'>|</div>
        <div className="lang">EN</div> 
        <div className='divider'>|</div>
        <div className='user'><span style={{background:'#ce1a26' }}><FaUser color='white' size='12px' /></span>LOGIN</div>
        <div className='divider'>|</div>  
        <Link href='/cart'><a><div><RiShoppingBasketLine size="1.3rem" color='#ce1a26'/>{count.length}</div></a></Link>
      </div>
      <div className='mobile_bar' onClick={()=>setMobile(!mobile)}>{
        mobile ? <FaTimes size="1.3rem" color='#ce1a26' /> : <FaBars size="1.3rem" color='#ce1a26'/>
      }</div>
    </div>
    </header>

    <div className={mobile ? 'mobile mobile-nav-open' : 'mobile'}>
      <ul>
        <Link href="/">
          <a className='flex v_center'>
            <li><GoHome size="1.3rem" color='#ce1a26'/></li>
            <li className='nav-title'>Home</li>
          </a>
        </Link>
        <Link href="/">
          <a className='flex v_center'>
            <li><BsShop size="1.3rem" color='#ce1a26'/></li>
            <li className='nav-title'>Shop</li>
          </a>
        </Link>
        <Link href="/">
          <a className='flex v_center'>
            <li><RiShieldUserLine size="1.3rem" color='#ce1a26'/></li>
            <li className='nav-title'>About Us</li>
          </a>
        </Link>
        <Link href="/">
          <a className='flex v_center'>
            <li><TiContacts size="1.3rem" color='#ce1a26'/></li>
            <li className='nav-title'>Contact Us</li>
          </a>
        </Link>
        <Link href="/">
          <a className='flex v_center'>
          <div className='user'><span style={{background:'#ce1a26' }}><FaUser color='white' size='12px' /></span>LOGIN</div>
          </a>
        </Link>
      </ul>
      <div className='basket-mobile'><RiShoppingBasketLine size="1.3rem" color='#ce1a26'/><span className='cart-number'>0</span></div> 
    </div>
    </>
  )
}
