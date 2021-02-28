import { FC } from "react"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import { rand } from "../utils/tools"
import * as showType from "../utils/constants"
import CloseIcon from "../svg/closeicon"
import "./ShowJob.css"

interface Props {
  companyName: string
  skills: string
}

const ShowJob: FC<Props> = ({ companyName, skills }) => {
  const { setShowJob } = useStore()

  const getSingleValue = (index: number) => {
    const last: number = filterData[index].list.length - 1
    const pick: number = rand(0, last)
    return filterData[index].list[pick]
  }

  return (
    <>
      <div className="show-job">
        <div className="show-job-header">
          <h3>{companyName}</h3>
          <div className="show-job-close" onClick={() => setShowJob(false)}>
            <CloseIcon />
          </div>
        </div>
        <section>
          <strong>Skills: </strong>
          {skills}
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
          {getSingleValue(showType.SHOW_FILTER_PAYMENT)}
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
          {getSingleValue(showType.SHOW_FILTER_BENEFITS)}
        </section>
        <section>
          <strong>Commute: </strong>
          {"22 miles / 25 minutes"}
        </section>
        <section>
          <strong>Pets Allowed: </strong>
          {getSingleValue(showType.SHOW_FILTER_PETS_ALLOWED)}
        </section>
        <section>
          <strong>Industry: </strong>
          {getSingleValue(showType.SHOW_FILTER_INDUSTRY)}
        </section>
        <section>
          <strong>Company Size: </strong>
          {getSingleValue(showType.SHOW_FILTER_COMPANY_SIZE)}
        </section>
      </div>
    </>
  )
}

export default ShowJob
