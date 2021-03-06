import { FC } from "react"

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
        Profile will include your home address so we can calulcate commute
        distance and time since every job has the address where you will work.
      </section>
    </div>
  )
}

export default Profile
