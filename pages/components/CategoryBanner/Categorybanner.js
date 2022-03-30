import React from 'react'
import FoodCategory from '../FoodCategory/FoodCategory'

export default function Categorybanner({data}) {
  return (
    <div className='categorybanner '>
        <h1>Our Delicious Menu</h1>
       <div className="container">
       {
            data.map((category,index)=>(
                <FoodCategory FoodCat={category.category} foodpic={category.pic} key={index}/>
            ))
        }
       </div>
    </div>
  )
}

