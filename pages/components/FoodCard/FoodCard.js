import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function FoodCard({food}) {
  return (
    <Link href={`shop/${food.id}`}>
      <div className='foodcard'>
        <figure><Image src={food.pic} /></figure>
        <h4>{food.title}</h4>
        <p>{food.price}</p>
      </div>
    </Link>
  )
}
