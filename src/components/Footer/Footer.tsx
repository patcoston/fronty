import { FC } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import * as path from "../../utils/constants"

/**
 * Footer
 * Used By: App
 * Purpose: Displays the footer
 */

const useStyles = makeStyles({
  footer: {
    padding: 0,
    "& ul": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
      listStyle: "none",
      margin: 0,
      "& li": {
        padding: "2px 5px",
        "& a": {
          "&:hover": {
            backgroundColor: "#ddd",
          },
        },
      },
    },
  },
})

const Footer: FC = () => {
  const classes = useStyles()
  console.log(classes)
  return (
    <div className={classes.footer}>
      <ul>
        <li>&#169; 2021 Fronty</li>
        <li>
          <Link to={path.PATH_TERMS}>Terms</Link>
        </li>
        <li>
          <Link to={path.PATH_COOKIES}>Cookies</Link>
        </li>
        <li>
          <Link to={path.PATH_PRIVACY}>Privacy</Link>
        </li>
        <li>
          <Link to={path.PATH_JOBS}>Jobs</Link>
        </li>
        <li>
          <Link to={path.PATH_FAQS}>FAQs</Link>
        </li>
        <li>
          <Link to={path.PATH_ABOUT}>About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
