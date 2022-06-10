import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
import { UserContext } from "../../../contexts/user.context"

import './navigation.styles.scss'

export const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    console.log(currentUser)
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

        </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }