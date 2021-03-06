import { FC } from "react"
import "./JobsAtFronty.scss"

/**
 * Jobs at Fronty
 * Used By: Routes
 * Purpose: Displays the jobs available page for jobs at Fronty
 */

const JobsAtFronty: FC = () => {
  return (
    <div className="jobs">
      <h3>Jobs at Fronty:</h3>
      <section>No jobs at Fronty currently. Check back later.</section>
    </div>
  )
}

export default JobsAtFronty
