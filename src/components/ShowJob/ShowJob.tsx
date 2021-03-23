import { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { useHistory } from "react-router-dom"
import { rand } from "../../utils/tools"
import { TStringArray } from "../../utils/types"
import * as showType from "../../utils/constants"
import CloseIcon from "../../svg/closeicon"
import "./ShowJob.scss"

/**
 * Show Job
 * Used By: Routes
 * Purpose: Displays the features and contact info for a job
 */

const ShowJob: FC = () => {
  const { showJobCompany, showJobSkills, filterData } = useStore()
  const history = useHistory()

  const getSingleValue = (index: number) => {
    const last: number = filterData[index].list.length - 1
    const pick: number = rand(0, last)
    return filterData[index].list[pick]
  }

  const getMultipleValues = (index: number, count: number) => {
    const vals: TStringArray = []
    for (let i: number = 0; i < count; i++) {
      vals[i] = getSingleValue(index)
    }
    //vals = [...new Set(vals)]
    const values = vals.join().replace(/,/g, ", ")
    return values
  }

  const getCompany = () => {
    return showJobCompany.toLowerCase().replace(/[^a-z]/g, "")
  }

  const getWebsite = () => {
    return `http://${getCompany()}.com/`
  }

  return (
    <div className="show-job" onClick={() => history.push(`/`)}>
      <div className="show-job-header">
        <h3>{showJobCompany}</h3>
        <button>Apply</button>
        <div className="show-job-close">
          <CloseIcon />
        </div>
      </div>
      <section>
        <strong>Tech Stack: </strong>
        {showJobSkills}
      </section>
      <section>
        <strong>Education Required: </strong>
        {getSingleValue(showType.SHOW_FILTER_EDUCATION_REQUIRED)}
      </section>
      <section>
        <strong>Experience Level: </strong>
        {getSingleValue(showType.SHOW_FILTER_EXPERIENCE_LEVEL)}
      </section>
      <section>
        <strong>Exployee Type: </strong>
        {getSingleValue(showType.SHOW_FILTER_EMPLOYEE_TYPE)}
      </section>
      <section>
        <strong>Payment: </strong>
        {getSingleValue(showType.SHOW_FILTER_PAYMENT).replace("+", "")}
      </section>
      <section>
        <strong>Working From Home: </strong>
        {getSingleValue(showType.SHOW_FILTER_WORKING_FROM_HOME)}
      </section>
      <section>
        <strong>Mobile: </strong>
        {getSingleValue(showType.SHOW_FILTER_MOBILE)}
      </section>
      <section>
        <strong>Methodology: </strong>
        {getSingleValue(showType.SHOW_FILTER_METHODOLOGY)}
      </section>
      <section>
        <strong>Accessibility: </strong>
        {getSingleValue(showType.SHOW_FILTER_ACCESSIBLE)}
      </section>
      <section>
        <strong>Dress Code: </strong>
        {getSingleValue(showType.SHOW_FILTER_DRESS_CODE)}
      </section>
      <section>
        <strong>Internal or External: </strong>
        {getSingleValue(showType.SHOW_FILTER_INTERNAL_EXTERNAL)}
      </section>
      <section>
        <strong>Benefits: </strong>
        {getMultipleValues(showType.SHOW_FILTER_BENEFITS, 4)}
      </section>
      <section>
        <strong>Commute: </strong>
        {"22 miles / 25 minutes"}
      </section>
      <section>
        <strong>Pets: </strong>
        {getSingleValue(showType.SHOW_FILTER_PETS_ALLOWED)}
      </section>
      <section>
        <strong>Industry: </strong>
        {getSingleValue(showType.SHOW_FILTER_INDUSTRY)}
      </section>
      <section>
        <strong>Company Size: </strong>
        {rand(5, 500000)}
      </section>
      <section>
        <strong>Description: </strong>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et ex
        consequat, ullamcorper augue ut, sollicitudin nunc. Suspendisse luctus
        luctus metus ut efficitur. Nulla velit lectus, accumsan at semper at,
        egestas quis justo. Ut vel nisi varius, sagittis tellus nec, egestas
        tortor. Donec pretium est ac nibh blandit, et placerat diam placerat. Ut
        id dictum risus. Donec non rutrum leo, non mollis nunc. Etiam eu
        hendrerit justo, vitae finibus neque.
      </section>
      <section>
        <strong>Address: </strong>285 Fulton St, New York, NY 10007
      </section>
      <section>
        <strong>Contact Name: </strong>John Smith
      </section>
      <section>
        <strong>Contact Phone: </strong>212-555-1212
      </section>
      <section>
        <strong>Contact Email: </strong>johnsmith@{getCompany()}.com
      </section>
      <section>
        <strong>Website: </strong>
        <a target="_blank" rel="noreferrer" href={getWebsite()}>
          {getWebsite()}
        </a>
      </section>
    </div>
  )
}

export default ShowJob
