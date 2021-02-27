import { FC } from "react"
import "./Header.css"

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <div>Fronty</div>
        <div>
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
          >
            <g transform="translate(-2 -5)">
              <rect x="2" y="5" width="20" height="2" rx="1"></rect>
              <rect x="2" y="17" width="20" height="2" rx="1"></rect>
              <rect x="2" y="11" width="20" height="2" rx="1"></rect>
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Header
