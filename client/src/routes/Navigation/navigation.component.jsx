import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import { CartIcon } from "../../components/cart-icon/CartIcon.component"
import { CartDropDown } from "../../components/cart-dropdown/CartDropDown.component"

import './navigation.styles.scss'

export const Navigation = () => {
  
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return(
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to='/'>
              <CrwnLogo className="logo" />
          </Link>
        
          <div className="nav-links-container">
              <Link className="nav-link" to='/shop'>
                  Shop
              </Link>
              {
                currentUser ? (
                  <span className="nav-link" onClick={() => 
                    setCurrentUser(null)
                  }> Sign Out </span>
                ) : (
                  <Link className="nav-link" to='/auth'>
                      Sign In
                  </Link>
                  
                )
              }
              <CartIcon />
          </div>
          {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
  }