import { FC } from "react"
import Home from "./Home"
import About from "./About"
import ShowJob from "./ShowJob"
import NotFound from "./NotFound"
import { Switch, Route, Redirect } from "react-router-dom"

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/job">
        <ShowJob />
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
      <Redirect to="/notfound" />
    </Switch>
  )
}

export default Routes
