import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import Header from '../components/header/Header';
import {
  deleteAll,
  increasecartitem,
  decrementcartitem,
  removefromcart,
} from '../../redux/slice/addtocart';
import StripeCheckout from 'react-stripe-checkout';

const stripekey =
  'pk_test_51KZccKBYpJVF6ADtN3rvS5IMESpaLOliHVZjbvRbIa7DKFczmBcCsgk3n7quQyhelu8v6tNJT6W1u5PiUeSg8lfC008cLGOadB';
export default function Cart() {
  const count = useSelector((state) => state.cart.cart);
  const [cartitem, setCartItem] = useState();
  const dispatch = useDispatch();
  const removeitem = (item) => {
    dispatch(removefromcart(item));
  };
  const increaseitrm = (index) => {
    dispatch(increasecartitem(index));
  };
  const decreaseitrm = (index) => {
    dispatch(decrementcartitem(index));
  };
  const SubTotal = 0;

  const handleToken = (token) => {
    console.log(token);
  };

  return (
    <>
      <Header />

      <div className="container-fluid cart-wrapper">
        {count.length > 0 ? (
          <>
            {count.map((item, index) => (
              <div className="flex cart">
                <div className="image" key={index}>
                  <figure>
                    <Image src={item.pic} alt="item.title" />
                  </figure>
                </div>
                <div className="content-cart flex">
                  <div className="left">
                    <h4>{item.title}</h4>
                    <p>Size: {item.sizeOfProduct}</p>
                    <p>
                      Quantity:
                      <span onClick={() => decreaseitrm(index)}>-</span>
                      <input type="text" value={item.quantity} />
                      <span onClick={() => increaseitrm(index)}>+</span>
                    </p>

                    <p className="remove" onClick={() => removeitem(item)}>
                      Remove
                    </p>
                    <p className="none">
                      {(SubTotal += item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="right">
                    <p>Price: ${item.price}</p>
                    {/* <button className='cartbtn' >Update</button>  */}
                  </div>
                </div>
              </div>
            ))}

            <button className="cartbtn" onClick={() => dispatch(deleteAll())}>
              Clear Cart
            </button>

            <div className="subtotal">
              <h5>Subtotal: ${SubTotal.toFixed(2)}</h5>
            </div>
            <StripeCheckout
              stripeKey={stripekey}
              token={handleToken}
              billingAddress
              shippingAddress
              amount={SubTotal * 100}
              name="All Products"
            />
          </>
        ) : (
          'Cart is Empty'
        )}
      </div>
    </>
  );
}
