import React, { FC } from "react"
import "./FilterMenu.css"

interface Props {
  show: boolean
}

const FilterMenu: FC<Props> = ({ show }) => {
  return (
    <>
      <div
        style={!show ? { display: "none" } : { display: "block" }}
        className="filter-menu-body"
      >
        <ul>
          <li>Accessible</li>
          <li>Benefits</li>
          <li>Commute</li>
          <li>CompanySize</li>
          <li>DressCode</li>
          <li>EducationRequired</li>
          <li>EmployeeType</li>
          <li>ExperienceLevel</li>
          <li>Industry</li>
          <li>InternalExternal</li>
          <li>Methodology</li>
          <li>Mobile</li>
          <li>PetsAllowed</li>
          <li>SalaryRange</li>
          <li>Skill</li>
          <li>WorkingFromHome</li>
        </ul>
      </div>
    </>
  )
}

export default FilterMenu
