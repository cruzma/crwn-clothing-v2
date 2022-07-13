import React ,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../button/button.component'
import { CartItem } from '../cart-item/CartItem.component'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'

export const CartDropDown = () => {
  
  const { cartItems } = useContext(CartContext)
  let navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={navigateToCheckout}>Go To Checkout</Button>
    </div>
  )
}
