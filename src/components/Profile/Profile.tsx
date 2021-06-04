import { FC } from "react"
import Button from "@material-ui/core/Button"

/**
 * Profile
 * Used By: Routes
 * Purpose: Displays the Profile page
 */

const Profile: FC = () => {
  return (
    <div className="profile">
      <h3>Profile:</h3>
      <section>
        <Button variant="contained" color="primary">
          Change
        </Button>
        <strong> Address: </strong> Zzyzx Road, Seattle, WA 98112-2735
      </section>
      <section>
        <Button variant="contained" color="primary">
          Change
        </Button>
        <strong> Email: </strong> johnsmith@gmail.com
      </section>
      <section>
        <Button variant="contained" color="primary">
          Change
        </Button>
        <strong> Password: </strong> ***********
      </section>
    </div>
  )
}

export default Profile
