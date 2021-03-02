import { FC } from "react"
import { Link } from "react-router-dom"
import Hamburger from "../svg/hamburger"
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
                  Inbox
                  <span className="header-dropdown-count"> 24 </span>
                </li>
                <li>Jobs Applied</li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Help</li>
                <li>
                  <Link to="/about">About Fronty</Link>
                </li>
                <li>Contact Us</li>
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
