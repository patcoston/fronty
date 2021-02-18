import React, { FC } from "react"
import FilterAccessible from "./filters/FilterAccessible"
import FilterBenefits from "./filters/FilterBenefits"
import FilterCommute from "./filters/FilterCommute"
import FilterCompanySize from "./filters/FilterCompanySize"
import FilterDressCode from "./filters/FilterDressCode"
import FilterEducationRequired from "./filters/FilterEducationRequired"
import FilterEmployeeType from "./filters/FilterEmployeeType"
import FilterExperienceLevel from "./filters/FilterExperienceLevel"
import FilterIndustry from "./filters/FilterIndustry"
import FilterInternalExternal from "./filters/FilterInternalExternal"
import FilterMethodology from "./filters/FilterMethodology"
import FilterMobile from "./filters/FilterMobile"
import FilterPetsAllowed from "./filters/FilterPetsAllowed"
import FilterSalaryRange from "./filters/FilterSalaryRange"
import FilterSkill from "./filters/FilterSkill"
import FilterWorkingFromHome from "./filters/FilterWorkingFromHome"
import FilterMenu from "./FilterMenu"
import { useStore } from "../store/StoreProvider"
import "./AddFilter.css"

const AddFilter: FC = () => {
  const {
    setFilterShowMenu,
    setFilterShowAccessible,
    setFilterShowBenefits,
    setFilterShowCommute,
    setFilterShowCompanySize,
    setFilterShowDressCode,
    setFilterShowEducationRequired,
    setFilterShowEmployeeType,
    setFilterShowExperienceLevel,
    setFilterShowIndustry,
    setFilterShowInternalExternal,
    setFilterShowMethodology,
    setFilterShowMobile,
    setFilterShowPetsAllowed,
    setFilterShowSalaryRange,
    setFilterShowSkill,
    setFilterShowWorkingFromHome,
    setShowResults,
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
    setFilterShowSalaryRange(false)
    setFilterShowSkill(false)
    setFilterShowWorkingFromHome(false)
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
      case "SalaryRange":
        setFilterShowSalaryRange(true)
        break
      case "Skill":
        setFilterShowSkill(true)
        break
      case "WorkingFromHome":
        setFilterShowWorkingFromHome(true)
        break
      case "ShowResults":
        setShowResults(true)
        break
    }
  }

  return (
    <>
      <div className="add-filter">
        <button onClick={() => showFilter("Menu")}>Add Filter</button>
        <FilterMenu showFilter={showFilter} />
        <FilterAccessible />
        <FilterBenefits />
        <FilterCommute />
        <FilterCompanySize />
        <FilterDressCode />
        <FilterEducationRequired />
        <FilterEmployeeType />
        <FilterExperienceLevel />
        <FilterIndustry />
        <FilterInternalExternal />
        <FilterMethodology />
        <FilterMobile />
        <FilterPetsAllowed />
        <FilterSalaryRange />
        <FilterSkill showFilter={showFilter} />
        <FilterWorkingFromHome showFilter={showFilter} />
      </div>
    </>
  )
}

export default AddFilter
