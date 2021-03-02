import { FC } from "react"
import Home from "./Home"
import { Switch, Route, Redirect } from "react-router-dom"

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
