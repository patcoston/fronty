import { FC } from "react"
import Home from "./Home"
import Inbox from "./InBox"
import About from "./About"
import Help from "./Help"
import ContactUs from "./ContactUs"
import Profile from "./Profile"
import Settings from "./Settings"
import JobsApplied from "./JobsApplied"
import ShowJob from "./ShowJob"
import NotFound from "./NotFound"
import { Switch, Route, Redirect } from "react-router-dom"
import * as path from "../utils/constants"

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path={path.PATH_BASE}>
        <Home />
      </Route>
      <Route path={path.PATH_INBOX}>
        <Inbox />
      </Route>
      <Route path={path.PATH_ABOUT}>
        <About />
      </Route>
      <Route path={path.PATH_PROFILE}>
        <Profile />
      </Route>
      <Route path={path.PATH_SETTINGS}>
        <Settings />
      </Route>
      <Route path={path.PATH_HELP}>
        <Help />
      </Route>
      <Route path={path.PATH_CONTACT_US}>
        <ContactUs />
      </Route>
      <Route path={path.PATH_JOBS_APPLIED}>
        <JobsApplied />
      </Route>
      <Route path={path.PATH_SHOW_JOB}>
        <ShowJob />
      </Route>
      <Route path={path.PATH_NOT_FOUND}>
        <NotFound />
      </Route>
      <Redirect to={path.PATH_BASE} />
    </Switch>
  )
}

export default Routes
