import React from 'react'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag (1).svg'

import './cart-icon.styles.scss'

export const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
        <ShoppingIcon className="shopping-icon"/>
        <span className='item-count'>10</span>
    </div>
  )
}
