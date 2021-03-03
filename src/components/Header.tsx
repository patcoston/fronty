import { FC } from "react"
import { Link } from "react-router-dom"
import Hamburger from "../svg/hamburger"
import * as path from "../utils/constants"
import "./Header.css"

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">Fronty</Link>
        </div>
        <div className="hamburger">
          <Hamburger />
          <div className="header-dropdown-wrapper">
            <div className="header-dropdown">
              <ul>
                <li>
                  <Link to={path.PATH_INBOX}>
                    Inbox
                    <span className="header-dropdown-count"> 24 </span>
                  </Link>
                </li>
                <li>
                  <Link to={path.PATH_JOBS_APPLIED}>Jobs Applied</Link>
                </li>
                <li>
                  <Link to={path.PATH_PROFILE}>Profile</Link>
                </li>
                <li>
                  <Link to={path.PATH_SETTINGS}>Settings</Link>
                </li>
                <li>
                  <Link to={path.PATH_HELP}>Help</Link>
                </li>
                <li>
                  <Link to={path.PATH_ABOUT}>About Fronty</Link>
                </li>
                <li>
                  <Link to={path.PATH_CONTACT_US}>Contact Us</Link>
                </li>
                <li>Signout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
