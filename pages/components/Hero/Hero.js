import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillClockFill } from 'react-icons/bs';
import Image from 'next/image'
import heropic from '../../../public/images/hero.png'

export default function Hero() {
  return (
    <div className='container hero flex v_align space_between'>
        <div className="left">
            <h1>Hungry? You're in the right place</h1>
            <div className='hero-find-food'>
                <div className='find-input'>
                    <div style={{marginTop:4}}><FaMapMarkerAlt size="1.3rem" color='#ce1a26' /></div>
                    <input type="text" placeholder='Enter delivery address'/>
                </div>
                <div className='find-input inp2'>
                    <BsFillClockFill size="1.3rem" color='#ce1a26' />
                    <input type="text" placeholder='Delivery Time'/>
                </div>
                <button>Find Food</button>
            </div>
            <p>Sign In for your recent addresses</p>
        </div>
        <div className="right">
            <figure>
                <Image src={heropic} alt='hero-burrgur' />
            </figure>
        </div>
    </div>
  )
}
