import { FC } from "react"
import "./Settings.scss"

/**
 * Settings
 * Used By: Routes
 * Purpose: Displays the users settings
 */

const Settings: FC = () => {
  return (
    <div className="settings">
      <h3>Settings:</h3>
      <section>
        Your settings will allow you to change your email and password.
      </section>
    </div>
  )
}

export default Settings
