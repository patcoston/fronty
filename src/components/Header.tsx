import { FC } from "react"
import Hamburger from "../svg/hamburger"
import "./Header.css"

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Fronty</div>
        <div className="hamburger">
          <Hamburger />
          <div className="header-dropdown-wrapper">
            <div className="header-dropdown">
              <ul>
                <li>
                  Inbox
                  <span className="header-dropdown-count"> 24 </span>
                </li>
                <li>Profile</li>
                <li>Settings</li>
                <li>Help</li>
                <li>About Fronty</li>
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
