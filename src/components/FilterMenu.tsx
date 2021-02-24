import { FC } from "react"
import * as showType from "../utils/constants"
import { useStore } from "../store/StoreProvider"
import "./FilterMenu.css"

interface Props {
  showFilter(arg: number): void
}

const FilterMenu: FC<Props> = ({ showFilter }) => {
  const { showMenu } = useStore()
  return (
    <>
      {showMenu && (
        <div className="filter-menu-body">
          <ul>
            <li onClick={() => showFilter(showType.SHOW_FILTER_ACCESSIBLE)}>
              Accessible
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_BENEFITS)}>
              Benefits
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_COMMUTE)}>
              Commute
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_COMPANY)}>
              Popular Companies
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_COMPANY_SIZE)}>
              Company Size
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_DRESS_CODE)}>
              Dress Code
            </li>
            <li
              onClick={() =>
                showFilter(showType.SHOW_FILTER_EDUCATION_REQUIRED)
              }
            >
              Education Required
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_EMPLOYEE_TYPE)}>
              Employee Type
            </li>
            <li
              onClick={() => showFilter(showType.SHOW_FILTER_EXPERIENCE_LEVEL)}
            >
              Experience Level
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_INDUSTRY)}>
              Industry
            </li>
            <li
              onClick={() => showFilter(showType.SHOW_FILTER_INTERNAL_EXTERNAL)}
            >
              Internal or External
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_METHODOLOGY)}>
              Methodology
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_MOBILE)}>
              Mobile
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_PAYMENT)}>
              Payment
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_PETS_ALLOWED)}>
              Pets Allowed
            </li>
            <li onClick={() => showFilter(showType.SHOW_FILTER_SKILL)}>
              Skill
            </li>
            <li
              onClick={() => showFilter(showType.SHOW_FILTER_WORKING_FROM_HOME)}
            >
              Working From Home
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default FilterMenu
