import { useRouter } from 'next/router'
import fooddata from '../api/fooddata'
import Header from '../components/header/Header'
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../../redux/slice/addtocart';
import { useState } from 'react';

export default function FoodSingle() {
  const [size, setSize] = useState('Large');
  const [Quantity, setQuantity] = useState('1');

  const router = useRouter();
  const idfromSlug = router.query.single;
  const id = parseInt(idfromSlug); 

  // const count = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch()

  const DataAddInCart = (food) =>{
    dispatch(addCart({...food, sizeOfProduct: size, quantity: Quantity}))
  };

  return (
    <>
      <Header/>
      <div className=''>
          {
            fooddata.filter(item => item.id === id).map((food,index)=>(
              <div key={index}>
                <div className='single_food_title'>
                  <h1>{food.title}</h1>
                </div>
                <div className="container-fluid foodsingle">
                  <div className='flex'>
                    <div className="left">
                      <figure>
                        <Image src={food.pic} alt={food.title}/>
                      </figure>
                    </div>
                    <div className="right">
                      <div className="reservation">
                        <h4>Order delivery or takeout</h4>
                        <div className="flex mt">
                          <div className='size'>
                            <label htmlFor="">Delivery Time</label>
                            <p>70 mints</p>
                          </div>
                          <div className='size'>
                            <label htmlFor="">Min Order</label>
                            <p> $1.00</p>
                          </div>
                          <div className='size'>
                            <label htmlFor="">Payment Type</label>
                            <p>Cash and Online</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className='size'>
                            <label htmlFor="">Size</label>
                            <select onChange={(e) => setSize(e.target.value)}>
                              <option value="Large">Large</option>
                              <option value="Medium">Medium</option>
                              <option value="Small">Small</option>
                            </select>
                          </div>
                          <div className='date'>
                            <label htmlFor="">Quantity</label>
                            <select onChange={(e) => setQuantity(e.target.value)}> 
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                        <button className='cartbtn' onClick={ ()=> DataAddInCart(food)} >Add to cart</button>
                      </div>
                  

                    </div>
                  </div>
                </div>
                
              </div>
              
            ))
          }
      </div>
    </>
  )
}
