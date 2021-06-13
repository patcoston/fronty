import { FC } from "react"
import { makeStyles } from "@material-ui/core/styles"

/**
 * Not Found
 * Used By: Routes
 * Purpose: Displays when the page is not found by the router
 */

const useStyles = makeStyles({
  notFound: {
    textAlign: "center",
  },
})

const NotFound: FC = () => {
  const classes = useStyles()
  return <div className={classes.notFound}>Sorry, page not found</div>
}

export default NotFound
