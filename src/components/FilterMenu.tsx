import { FC } from "react"
import * as filterType from "../utils/constants"
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
            <li onClick={() => showFilter(filterType.SHOW_ACCESSIBLE)}>
              Accessible
            </li>
            <li onClick={() => showFilter(filterType.SHOW_BENEFITS)}>
              Benefits
            </li>
            <li onClick={() => showFilter(filterType.SHOW_COMMUTE)}>Commute</li>
            <li onClick={() => showFilter(filterType.SHOW_COMPANY)}>
              Popular Companies
            </li>
            <li onClick={() => showFilter(filterType.SHOW_COMPANY_SIZE)}>
              Company Size
            </li>
            <li onClick={() => showFilter(filterType.SHOW_DRESS_CODE)}>
              Dress Code
            </li>
            <li onClick={() => showFilter(filterType.SHOW_EDUCATION_REQUIRED)}>
              Education Required
            </li>
            <li onClick={() => showFilter(filterType.SHOW_EMPLOYEE_TYPE)}>
              Employee Type
            </li>
            <li onClick={() => showFilter(filterType.SHOW_EXPERIENCE_LEVEL)}>
              Experience Level
            </li>
            <li onClick={() => showFilter(filterType.SHOW_INDUSTRY)}>
              Industry
            </li>
            <li onClick={() => showFilter(filterType.SHOW_INTERNAL_EXTERNAL)}>
              Internal or External
            </li>
            <li onClick={() => showFilter(filterType.SHOW_METHODOLOGY)}>
              Methodology
            </li>
            <li onClick={() => showFilter(filterType.SHOW_MOBILE)}>Mobile</li>
            <li onClick={() => showFilter(filterType.SHOW_PAYMENT)}>Payment</li>
            <li onClick={() => showFilter(filterType.SHOW_PETS_ALLOWED)}>
              Pets Allowed
            </li>
            <li onClick={() => showFilter(filterType.SHOW_SKILL)}>Skill</li>
            <li onClick={() => showFilter(filterType.SHOW_WORKING_FROM_HOME)}>
              Working From Home
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default FilterMenu
