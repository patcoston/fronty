import { FC, useEffect, useState } from "react"
import { useStore } from "../../store/StoreProvider"
import { TFilterDataArray } from "../../utils/types"
import * as constant from "../../utils/constants"
import axios from "axios"
import clsx from "clsx"
import "./FilterTypeMenu.scss"

/**
 * Filter Type Menu
 * Used By: Home
 * Purpose: Read and Display data for Filter Type so user can choose
 */

interface Props {
  showFilter(arg: number): void
}

const FilterTypeMenu: FC<Props> = ({ showFilter }) => {
  const { filterData, setFilterData } = useStore()
  const [count, setCount] = useState<number>(0)

  const jsonData: TFilterDataArray = []

  useEffect(() => {
    if (count > 17) {
      return
    }
    const readData = async (data: string, index: number) => {
      try {
        const response = await axios.get(`${constant.URL_DATA}${data}.json`)
        jsonData[index] = await response.data
        console.log(jsonData)
        setCount(count + 1)
        console.log(count)
        if (count === 17) {
          setFilterData(jsonData)
        }
      } catch (error) {
        console.log(error)
      }
    }

    readData("techstack", constant.SHOW_FILTER_TECH_STACK)
    readData("workingfromhome", constant.SHOW_FILTER_WORKING_FROM_HOME)
    readData("payment", constant.SHOW_FILTER_PAYMENT)
    readData("benefits", constant.SHOW_FILTER_BENEFITS)
    readData("commute", constant.SHOW_FILTER_COMMUTE)
    readData("company", constant.SHOW_FILTER_COMPANY)
    readData("companysize", constant.SHOW_FILTER_COMPANY_SIZE)
    readData("educationrequired", constant.SHOW_FILTER_EDUCATION_REQUIRED)
    readData("employeetype", constant.SHOW_FILTER_EMPLOYEE_TYPE)
    readData("experiencelevel", constant.SHOW_FILTER_EXPERIENCE_LEVEL)
    readData("industry", constant.SHOW_FILTER_INDUSTRY)
    readData("internalexternal", constant.SHOW_FILTER_INTERNAL_EXTERNAL)
    readData("methodology", constant.SHOW_FILTER_METHODOLOGY)
    readData("mobile", constant.SHOW_FILTER_MOBILE)
    readData("accessibility", constant.SHOW_FILTER_ACCESSIBLE)
    readData("petsallowed", constant.SHOW_FILTER_PETS_ALLOWED)
    readData("dresscode", constant.SHOW_FILTER_DRESS_CODE)
  }, [])

  return (
    <div className="filter-type-menu">
      <div className={clsx("filter-type-menu-body", "border")}>
        <div className="filter-type-menu-header">Choose a Filter Type</div>
        <ul>
          {filterData.map((filter, index) => (
            <li key={index} onClick={() => showFilter(index)}>
              {filter.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterTypeMenu
