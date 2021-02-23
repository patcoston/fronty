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
    let filterIndex = filterType.SHOW_ACCESSIBLE

    switch (menuType) {
      case "Menu":
        setFilterShowMenu(true)
        break
      case "Accessible":
        setShow(true)
        filterIndex = filterType.SHOW_ACCESSIBLE
        break
      case "Benefits":
        setShow(true)
        filterIndex = filterType.SHOW_BENEFITS
        break
      case "Commute":
        setShow(true)
        filterIndex = filterType.SHOW_COMMUTE
        break
      case "Company":
        setShow(true)
        filterIndex = filterType.SHOW_COMPANY
        break
      case "CompanySize":
        setShow(true)
        filterIndex = filterType.SHOW_COMPANY_SIZE
        break
      case "DressCode":
        setShow(true)
        filterIndex = filterType.SHOW_DRESS_CODE
        break
      case "EducationRequired":
        setShow(true)
        filterIndex = filterType.SHOW_EDUCATION_REQUIRED
        break
      case "EmployeeType":
        setShow(true)
        filterIndex = filterType.SHOW_EMPLOYEE_TYPE
        break
      case "ExperienceLevel":
        setShow(true)
        filterIndex = filterType.SHOW_EXPERIENCE_LEVEL
        break
      case "Industry":
        setShow(true)
        filterIndex = filterType.SHOW_INDUSTRY
        break
      case "InternalExternal":
        setShow(true)
        filterIndex = filterType.SHOW_INTERNAL_EXTERNAL
        break
      case "Methodology":
        setShow(true)
        filterIndex = filterType.SHOW_METHODOLOGY
        break
      case "Mobile":
        setShow(true)
        filterIndex = filterType.SHOW_MOBILE
        break
      case "Payment":
        setShow(true)
        filterIndex = filterType.SHOW_PAYMENT
        break
      case "PetsAllowed":
        setShow(true)
        filterIndex = filterType.SHOW_PETS_ALLOWED
        break
      case "Skill":
        setShow(true)
        filterIndex = filterType.SHOW_SKILL
        break
      case "WorkingFromHome":
        setShow(true)
        filterIndex = filterType.SHOW_WORKING_FROM_HOME
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
