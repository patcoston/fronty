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
        <button>Change</button>
        <strong> Address: </strong> Zzyzx Road, Seattle, WA 98112-2735
      </section>
      <section>
        <button>Change</button>
        <strong> Email: </strong> johnsmith@gmail.com
      </section>
      <section>
        <button>Change</button>
        <strong> Password: </strong> ***********
      </section>
    </div>
  )
}

export default Profile
