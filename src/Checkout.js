import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import shop from './img/shop.jpg';

function Checkout() {

  const[{ basket, user }, dispatch] = useStateValue();

  return (

    <div className='checkout'>

        <div className='checkout__flex'>
        <div className='checkout__left'>

        
            {/* <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className='checkout__ad' alt="add" /> */}

            <div className='checkout__div'>
            <div className='checkout__title'>
            <h4>Hello, {user?.email}</h4>
            <h2 className='checkout_title'>Your Shopping Basket</h2>
            </div>
            <div>
              {/* ?protects it from error */}

                {basket.map(item => (

                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />

                ))}

                {basket.length === 0 && <div className='empty-basket-box'><p className='empty-basket'>empty</p><div className='empty-basket-space'></div></div>}
            </div>
            </div>
        </div>
        <div className='checkout__right'>
              <Subtotal />
              <div className='shop__box'>

                <img src={shop} className='shop' alt="" />

              </div>
        </div>
        </div>
    </div>
    
  )
}

export default Checkout