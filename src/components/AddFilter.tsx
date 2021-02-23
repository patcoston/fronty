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
    let filterIndex = 1

    switch (menuType) {
      case "Menu":
        setFilterShowMenu(true)
        break
      case "Accessible":
        setShow(true)
        filterIndex = filterType.FILTER_ACCESSIBLE
        break
      case "Benefits":
        setShow(true)
        filterIndex = filterType.FILTER_BENEFITS
        break
      case "Commute":
        setShow(true)
        filterIndex = filterType.FILTER_COMMUTE
        break
      case "Company":
        setShow(true)
        filterIndex = filterType.FILTER_COMPANY
        break
      case "CompanySize":
        setShow(true)
        filterIndex = filterType.FILTER_COMPANY_SIZE
        break
      case "DressCode":
        setShow(true)
        filterIndex = filterType.FILTER_DRESS_CODE
        break
      case "EducationRequired":
        setShow(true)
        filterIndex = filterType.FILTER_EDUCATION_REQUIRED
        break
      case "EmployeeType":
        setShow(true)
        filterIndex = filterType.FILTER_EMPLOYEE_TYPE
        break
      case "ExperienceLevel":
        setShow(true)
        filterIndex = filterType.FILTER_EXPERIENCE_LEVEL
        break
      case "Industry":
        setShow(true)
        filterIndex = filterType.FILTER_INDUSTRY
        break
      case "InternalExternal":
        setShow(true)
        filterIndex = filterType.FILTER_INTERNAL_EXTERNAL
        break
      case "Methodology":
        setShow(true)
        filterIndex = filterType.FILTER_METHODOLOGY
        break
      case "Mobile":
        setShow(true)
        filterIndex = filterType.FILTER_MOBILE
        break
      case "Payment":
        setShow(true)
        filterIndex = filterType.FILTER_PAYMENT
        break
      case "PetsAllowed":
        setShow(true)
        filterIndex = filterType.FILTER_PETS_ALLOWED
        break
      case "Skill":
        setShow(true)
        filterIndex = filterType.FILTER_SKILL
        break
      case "WorkingFromHome":
        setShow(true)
        filterIndex = filterType.FILTER_WORKING_FROM_HOME
        break
      case "ShowResults":
        setShowResults(true)
        break
    }
    setList(filterData[filterIndex].list)
    setLabel(filterData[filterIndex].label)
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
