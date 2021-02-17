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

const AddFilter: FC = () => {
  let filterShowAccessible = false
  let filterShowBenefits = false
  let filterShowCommute = false
  let filterShowCompanySize = false
  let filterShowDressCode = false
  let filterShowEducationRequired = false
  let filterShowEmployeeType = false
  let filterShowExperienceLevel = false
  let filterShowIndustry = false
  let filterShowInternalExternal = false
  let filterShowMethodology = false
  let filterShowMobile = false
  let filterShowPetsAllowed = false
  let filterShowSalaryRange = false
  let filterShowSkill = true
  let filterShowWorkingFromHome = false

  return (
    <>
      <div>
        <button>Add Filter</button>
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
