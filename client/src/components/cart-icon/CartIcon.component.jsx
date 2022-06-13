import React, { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag (1).svg'

import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

export const CartIcon = () => {

  const { isCartOpen, setIsCartOpen } = useContext(CartContext)


  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <span className='item-count'>10</span>
    </div>
  )
}
