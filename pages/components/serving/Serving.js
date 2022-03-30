import React from 'react'
import Image from 'next/image'
import map from '../../../public/images/map.png'

export default function Serving() {
  return (
    <div className='container serving'>
        <h3>Now Serving</h3>
        <figure><Image src={map} alt='map'/></figure>
    </div>
  )
}
