import React, { FC } from "react"
import "./FilterMenu.css"

interface Props {
  show: boolean
  showFilter(arg: string): void
}

const FilterMenu: FC<Props> = ({ show, showFilter }) => {
  return (
    <>
      <div
        style={!show ? { display: "none" } : { display: "block" }}
        className="filter-menu-body"
      >
        <ul>
          <li onClick={() => showFilter("Accessible")}>Accessible</li>
          <li onClick={() => showFilter("Benefits")}>Benefits</li>
          <li onClick={() => showFilter("Commute")}>Commute</li>
          <li onClick={() => showFilter("CompanySize")}>CompanySize</li>
          <li onClick={() => showFilter("DressCode")}>DressCode</li>
          <li onClick={() => showFilter("EducationRequired")}>
            EducationRequired
          </li>
          <li onClick={() => showFilter("EmployeeType")}>EmployeeType</li>
          <li onClick={() => showFilter("ExperienceLevel")}>ExperienceLevel</li>
          <li onClick={() => showFilter("Industry")}>Industry</li>
          <li onClick={() => showFilter("InternalExternal")}>
            InternalExternal
          </li>
          <li onClick={() => showFilter("Methodology")}>Methodology</li>
          <li onClick={() => showFilter("Mobile")}>Mobile</li>
          <li onClick={() => showFilter("PetsAllowed")}>PetsAllowed</li>
          <li onClick={() => showFilter("SalaryRange")}>SalaryRange</li>
          <li onClick={() => showFilter("Skill")}>Skill</li>
          <li onClick={() => showFilter("WorkingFromHome")}>WorkingFromHome</li>
        </ul>
      </div>
    </>
  )
}

export default FilterMenu
