import { FC } from "react"
import FilterMenu from "./FilterMenu"
import FilterChoose from "./FilterChoose"
import { useStore } from "../store/StoreProvider"
import { filterData } from "../data/filter-data"
import * as filterType from "../utils/constants"
import "./AddFilter.css"

const AddFilter: FC = () => {
  const {
    setFilterShowMenu,
    filterShowAccessible,
    setFilterShowAccessible,
    filterShowBenefits,
    setFilterShowBenefits,
    filterShowCommute,
    setFilterShowCommute,
    filterShowCompanySize,
    setFilterShowCompanySize,
    filterShowDressCode,
    setFilterShowDressCode,
    filterShowEducationRequired,
    setFilterShowEducationRequired,
    filterShowEmployeeType,
    setFilterShowEmployeeType,
    filterShowExperienceLevel,
    setFilterShowExperienceLevel,
    filterShowIndustry,
    setFilterShowIndustry,
    filterShowInternalExternal,
    setFilterShowInternalExternal,
    filterShowMethodology,
    setFilterShowMethodology,
    filterShowMobile,
    setFilterShowMobile,
    filterShowPetsAllowed,
    setFilterShowPetsAllowed,
    filterShowPayment,
    setFilterShowPayment,
    filterShowSkill,
    setFilterShowSkill,
    filterShowWorkingFromHome,
    setFilterShowWorkingFromHome,
    setShowResults,
    filterShowCompany,
    setFilterShowCompany,
  } = useStore()

  const showFilter = (menuType: string) => {
    setFilterShowMenu(false)
    setFilterShowAccessible(false)
    setFilterShowBenefits(false)
    setFilterShowCommute(false)
    setFilterShowCompanySize(false)
    setFilterShowDressCode(false)
    setFilterShowEducationRequired(false)
    setFilterShowEmployeeType(false)
    setFilterShowExperienceLevel(false)
    setFilterShowIndustry(false)
    setFilterShowInternalExternal(false)
    setFilterShowMethodology(false)
    setFilterShowMobile(false)
    setFilterShowPetsAllowed(false)
    setFilterShowPayment(false)
    setFilterShowSkill(false)
    setFilterShowWorkingFromHome(false)
    setFilterShowCompany(false)
    setShowResults(false)
    switch (menuType) {
      case "Menu":
        setFilterShowMenu(true)
        break
      case "Accessible":
        setFilterShowAccessible(true)
        break
      case "Benefits":
        setFilterShowBenefits(true)
        break
      case "Commute":
        setFilterShowCommute(true)
        break
      case "CompanySize":
        setFilterShowCompanySize(true)
        break
      case "DressCode":
        setFilterShowDressCode(true)
        break
      case "EducationRequired":
        setFilterShowEducationRequired(true)
        break
      case "EmployeeType":
        setFilterShowEmployeeType(true)
        break
      case "ExperienceLevel":
        setFilterShowExperienceLevel(true)
        break
      case "Industry":
        setFilterShowIndustry(true)
        break
      case "InternalExternal":
        setFilterShowInternalExternal(true)
        break
      case "Methodology":
        setFilterShowMethodology(true)
        break
      case "Mobile":
        setFilterShowMobile(true)
        break
      case "PetsAllowed":
        setFilterShowPetsAllowed(true)
        break
      case "Payment":
        setFilterShowPayment(true)
        break
      case "Skill":
        setFilterShowSkill(true)
        break
      case "WorkingFromHome":
        setFilterShowWorkingFromHome(true)
        break
      case "Company":
        setFilterShowCompany(true)
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
          show={filterShowAccessible}
          list={filterData[filterType.FILTER_ACCESSIBLE].list}
          label={filterData[filterType.FILTER_ACCESSIBLE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowBenefits}
          list={filterData[filterType.FILTER_BENEFITS].list}
          label={filterData[filterType.FILTER_BENEFITS].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowCommute}
          list={filterData[filterType.FILTER_COMMUTE].list}
          label={filterData[filterType.FILTER_COMMUTE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowCompanySize}
          list={filterData[filterType.FILTER_COMPANY_SIZE].list}
          label={filterData[filterType.FILTER_COMPANY_SIZE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowDressCode}
          list={filterData[filterType.FILTER_DRESS_CODE].list}
          label={filterData[filterType.FILTER_DRESS_CODE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowEducationRequired}
          list={filterData[filterType.FILTER_EDUCATION_REQUIRED].list}
          label={filterData[filterType.FILTER_EDUCATION_REQUIRED].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowEmployeeType}
          list={filterData[filterType.FILTER_EMPLOYEE_TYPE].list}
          label={filterData[filterType.FILTER_EMPLOYEE_TYPE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowExperienceLevel}
          list={filterData[filterType.FILTER_EXPERIENCE_LEVEL].list}
          label={filterData[filterType.FILTER_EXPERIENCE_LEVEL].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowIndustry}
          list={filterData[filterType.FILTER_INDUSTRY].list}
          label={filterData[filterType.FILTER_INDUSTRY].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowInternalExternal}
          list={filterData[filterType.FILTER_INTERNAL_EXTERNAL].list}
          label={filterData[filterType.FILTER_INTERNAL_EXTERNAL].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowMethodology}
          list={filterData[filterType.FILTER_METHODOLOGY].list}
          label={filterData[filterType.FILTER_METHODOLOGY].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowMobile}
          list={filterData[filterType.FILTER_MOBILE].list}
          label={filterData[filterType.FILTER_MOBILE].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowPetsAllowed}
          list={filterData[filterType.FILTER_PETS_ALLOWED].list}
          label={filterData[filterType.FILTER_PETS_ALLOWED].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowPayment}
          list={filterData[filterType.FILTER_PAYMENT].list}
          label={filterData[filterType.FILTER_PAYMENT].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowSkill}
          list={filterData[filterType.FILTER_SKILL].list}
          label={filterData[filterType.FILTER_SKILL].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowWorkingFromHome}
          list={filterData[filterType.FILTER_WORKING_FROM_HOME].list}
          label={filterData[filterType.FILTER_WORKING_FROM_HOME].label}
        />
        <FilterChoose
          showFilter={showFilter}
          show={filterShowCompany}
          list={filterData[filterType.FILTER_COMPANY].list}
          label={filterData[filterType.FILTER_COMPANY].label}
        />
      </div>
      <div className="filters-added">Filters Added</div>
    </>
  )
}

export default AddFilter
