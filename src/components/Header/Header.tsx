import { FC } from "react"
import { Link } from "react-router-dom"
import Hamburger from "../../svg/hamburger"
import { makeStyles } from "@material-ui/core/styles"
import * as path from "../../utils/constants"
import clsx from "clsx"

/**
 * Header
 * Used By: App
 * Purpose: Displays the header
 */

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& div": {
      padding: 0,
      margin: "0 10px",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  logo: {
    fontFamily: "'Lobster', cursive",
    fontSize: 30,
  },
  headerDropdownWrapper: {
    position: "relative",
  },
  hamburger: {
    display: "block",
  },
  headerDropdown: {
    display: "none",
    position: "absolute",
    right: -20,
    top: 0,
    backgroundColor: "#fff",
    margin: 0,
    zIndex: 1,
    "&:hover": {
      display: "block",
    },
  },
  dropDownList: {
    listStyle: "none",
    margin: 0,
  },
  dropdownRow: {
    cursor: "pointer",
    padding: "5px 10px 5px 10px",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  headerDropdownCount: {
    backgroundColor: "#e03400",
    borderRadius: "1.25rem",
    textAlign: "center",
    boxSizing: "content-box",
    minWidth: "1.25rem",
    minHeight: "1.25rem",
    lineHeight: "1.25rem",
    fontSize: "0.8rem",
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5,
  },
})

const Header: FC = () => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.header, "border")}>
      <div className={classes.logo}>
        <Link to={path.PATH_BASE}>Fronty</Link>
      </div>
      <div className={classes.hamburger}>
        <Hamburger />
        <div className={classes.headerDropdownWrapper}>
          <div className={clsx(classes.headerDropdown, "border")}>
            <ul className="dropDownList">
              <li className="dropdownRow">
                <Link to={path.PATH_INBOX}>
                  Inbox
                  <span className={classes.headerDropdownCount}> 24 </span>
                </Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_JOBS_APPLIED}>Jobs Applied</Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_PROFILE}>Profile</Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_SETTINGS}>Settings</Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_HELP}>Help</Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_ABOUT}>About Fronty</Link>
              </li>
              <li className="dropdownRow">
                <Link to={path.PATH_CONTACT_US}>Contact Us</Link>
              </li>
              <li className="dropdownRow">Signout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
