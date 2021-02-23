import { FC, useState } from "react"
import FilterMenu from "./FilterMenu"
import FilterChoose from "./FilterChoose"
import { useStore } from "../store/StoreProvider"
import filterData from "../data/filter-data"
import * as filterType from "../utils/constants"
import "./AddFilter.css"

const AddFilter: FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [list, setList] = useState<Array<string>>([])
  const [label, setLabel] = useState<string>("")

  const { setFilterShowMenu, setShowResults } = useStore()

  const showFilter = (menuType: string) => {
    setFilterShowMenu(false)
    setShow(false)

    switch (menuType) {
      case "Menu":
        setFilterShowMenu(true)
        break
      case "Accessible":
        setShow(true)
        setList(filterData[filterType.FILTER_ACCESSIBLE].list)
        setLabel(filterData[filterType.FILTER_ACCESSIBLE].label)
        break
      case "Benefits":
        setShow(true)
        setList(filterData[filterType.FILTER_BENEFITS].list)
        setLabel(filterData[filterType.FILTER_BENEFITS].label)
        break
      case "Commute":
        setShow(true)
        setList(filterData[filterType.FILTER_COMMUTE].list)
        setLabel(filterData[filterType.FILTER_COMMUTE].label)
        break
      case "Company":
        setShow(true)
        setList(filterData[filterType.FILTER_COMPANY].list)
        setLabel(filterData[filterType.FILTER_COMPANY].label)
        break
      case "CompanySize":
        setShow(true)
        setList(filterData[filterType.FILTER_COMPANY_SIZE].list)
        setLabel(filterData[filterType.FILTER_COMPANY_SIZE].label)
        break
      case "DressCode":
        setShow(true)
        setList(filterData[filterType.FILTER_DRESS_CODE].list)
        setLabel(filterData[filterType.FILTER_DRESS_CODE].label)
        break
      case "EducationRequired":
        setShow(true)
        setList(filterData[filterType.FILTER_EDUCATION_REQUIRED].list)
        setLabel(filterData[filterType.FILTER_EDUCATION_REQUIRED].label)
        break
      case "EmployeeType":
        setShow(true)
        setList(filterData[filterType.FILTER_EMPLOYEE_TYPE].list)
        setLabel(filterData[filterType.FILTER_EMPLOYEE_TYPE].label)
        break
      case "ExperienceLevel":
        setShow(true)
        setList(filterData[filterType.FILTER_EXPERIENCE_LEVEL].list)
        setLabel(filterData[filterType.FILTER_EXPERIENCE_LEVEL].label)
        break
      case "Industry":
        setShow(true)
        setList(filterData[filterType.FILTER_INDUSTRY].list)
        setLabel(filterData[filterType.FILTER_INDUSTRY].label)
        break
      case "InternalExternal":
        setShow(true)
        setList(filterData[filterType.FILTER_INTERNAL_EXTERNAL].list)
        setLabel(filterData[filterType.FILTER_INTERNAL_EXTERNAL].label)
        break
      case "Methodology":
        setShow(true)
        setList(filterData[filterType.FILTER_METHODOLOGY].list)
        setLabel(filterData[filterType.FILTER_METHODOLOGY].label)
        break
      case "Mobile":
        setShow(true)
        setList(filterData[filterType.FILTER_MOBILE].list)
        setLabel(filterData[filterType.FILTER_MOBILE].label)
        break
      case "Payment":
        setShow(true)
        setList(filterData[filterType.FILTER_PAYMENT].list)
        setLabel(filterData[filterType.FILTER_PAYMENT].label)
        break
      case "PetsAllowed":
        setShow(true)
        setList(filterData[filterType.FILTER_PETS_ALLOWED].list)
        setLabel(filterData[filterType.FILTER_PETS_ALLOWED].label)
        break
      case "Skill":
        setShow(true)
        setList(filterData[filterType.FILTER_SKILL].list)
        setLabel(filterData[filterType.FILTER_SKILL].label)
        break
      case "WorkingFromHome":
        setShow(true)
        setList(filterData[filterType.FILTER_WORKING_FROM_HOME].list)
        setLabel(filterData[filterType.FILTER_WORKING_FROM_HOME].label)
        break
      case "ShowResults":
        setShowResults(true)
        break
    }
  }

  return (
    <>
      <div className="add-filter">
        <button onClick={() => showFilter("Menu")}>Choose Filter Type</button>
        <FilterMenu showFilter={showFilter} />
        <FilterChoose
          showFilter={showFilter}
          show={show}
          list={list}
          label={label}
        />
      </div>
      <div className="filters-added">Filters Added</div>
    </>
  )
}

export default AddFilter
