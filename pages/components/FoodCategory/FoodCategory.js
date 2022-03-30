import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function FoodCategory({FoodCat, foodpic, key}) {
  return (
    <div className='category_card' key={key}>
         <Link href={FoodCat}>
            <a className='flex v_align flex-col'>
                <div className='catpic'>
                    <Image src={foodpic} alt={FoodCat}/>
                </div>
                <h5>{FoodCat}</h5>
            </a>
        </Link>
    </div>
  )
}
