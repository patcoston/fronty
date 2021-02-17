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
import "./AddFilter.css"

const AddFilter: FC = () => {
  let filterShowMenu: boolean = false
  let filterShowAccessible: boolean = false
  let filterShowBenefits: boolean = false
  let filterShowCommute: boolean = false
  let filterShowCompanySize: boolean = false
  let filterShowDressCode: boolean = false
  let filterShowEducationRequired: boolean = false
  let filterShowEmployeeType: boolean = false
  let filterShowExperienceLevel: boolean = false
  let filterShowIndustry: boolean = false
  let filterShowInternalExternal: boolean = false
  let filterShowMethodology: boolean = false
  let filterShowMobile: boolean = false
  let filterShowPetsAllowed: boolean = false
  let filterShowSalaryRange: boolean = false
  let filterShowSkill: boolean = false
  let filterShowWorkingFromHome: boolean = false

  const showFilter = (type: string) => {
    filterShowMenu = false
    filterShowAccessible = false
    filterShowBenefits = false
    filterShowCommute = false
    filterShowCompanySize = false
    filterShowDressCode = false
    filterShowEducationRequired = false
    filterShowEmployeeType = false
    filterShowExperienceLevel = false
    filterShowIndustry = false
    filterShowInternalExternal = false
    filterShowMethodology = false
    filterShowMobile = false
    filterShowPetsAllowed = false
    filterShowSalaryRange = false
    filterShowSkill = false
    filterShowWorkingFromHome = false
    switch (type) {
      case "Menu":
        filterShowMenu = true
        break
      case "Accessible":
        filterShowAccessible = true
        break
      case "Benefits":
        filterShowBenefits = true
        break
      case "Commute":
        filterShowCommute = true
        break
      case "CompanySize":
        filterShowCompanySize = true
        break
      case "DressCode":
        filterShowDressCode = true
        break
      case "EducationRequired":
        filterShowEducationRequired = true
        break
      case "EmployeeType":
        filterShowEmployeeType = true
        break
      case "ExperienceLevel":
        filterShowExperienceLevel = true
        break
      case "Industry":
        filterShowIndustry = true
        break
      case "InternalExternal":
        filterShowInternalExternal = true
        break
      case "Methodology":
        filterShowMethodology = true
        break
      case "Mobile":
        filterShowMobile = true
        break
      case "PetsAllowed":
        filterShowPetsAllowed = true
        break
      case "SalaryRange":
        filterShowSalaryRange = true
        break
      case "Skill":
        filterShowSkill = true
        break
      case "WorkingFromHome":
        filterShowWorkingFromHome = true
        break
    }
  }

  return (
    <>
      <div className="addfilter">
        <button onClick={() => showFilter("Menu")}>Add Filter</button>
        <FilterMenu show={filterShowMenu} showFilter={showFilter} />
        <FilterAccessible show={filterShowAccessible} />
        <FilterBenefits show={filterShowBenefits} />
        <FilterCommute show={filterShowCommute} />
        <FilterCompanySize show={filterShowCompanySize} />
        <FilterDressCode show={filterShowDressCode} />
        <FilterEducationRequired show={filterShowEducationRequired} />
        <FilterEmployeeType show={filterShowEmployeeType} />
        <FilterExperienceLevel show={filterShowExperienceLevel} />
        <FilterIndustry show={filterShowIndustry} />
        <FilterInternalExternal show={filterShowInternalExternal} />
        <FilterMethodology show={filterShowMethodology} />
        <FilterMobile show={filterShowMobile} />
        <FilterPetsAllowed show={filterShowPetsAllowed} />
        <FilterSalaryRange show={filterShowSalaryRange} />
        <FilterSkill show={filterShowSkill} />
        <FilterWorkingFromHome show={filterShowWorkingFromHome} />
      </div>
    </>
  )
}

export default AddFilter
