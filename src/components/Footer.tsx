import { FC } from "react"
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <ul>
          <li>&#169; 2021 Fronty</li>
          <li>Terms</li>
          <li>Cookies</li>
          <li>Privacy</li>
          <li>Jobs</li>
          <li>FAQs</li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Footer
