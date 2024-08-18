import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import './Header.scss'

import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    
    <header>
      <div className="header">
        <div className="navigation">
          <div className="container">
            <div className="navigation-wrapper">
              <div className="navigation-logo">
                <img src="" alt="" />
              </div>
              <div className="navigation-content">
                <ul className="navigation__list">
                  <li className="navigation__item">
                    <NavLink to='/'>Meble</NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink to='/blogs'>Blog</NavLink>
                  </li>
                  <li className="navigation__item">
                    <NavLink to='/aranzacje'>Aranżacje</NavLink>
                  </li>
                </ul>
              </div>
              <div className="navigation-social">
                <Link href=""><GrFacebookOption /></Link>
                <Link href=""><AiFillInstagram /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header