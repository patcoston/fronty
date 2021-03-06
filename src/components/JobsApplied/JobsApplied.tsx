import { FC } from "react"
import "./JobsApplied.scss"

/**
 * Jobs Applied
 * Used By: Routes
 * Purpose: Displays the jobs the user has applied
 */

const JobsApplied: FC = () => {
  return (
    <div className="jobs-applied">
      <h3>Jobs Applied:</h3>
      <section>This will list the status of the jobs you applied</section>
    </div>
  )
}

export default JobsApplied
