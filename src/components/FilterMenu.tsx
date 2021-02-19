import React, { FC } from "react"
import { useStore } from "../store/StoreProvider"
import "./FilterMenu.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMenu: FC<Props> = ({ showFilter }) => {
  const { filterShowMenu } = useStore()
  return (
    <>
      <div
        style={!filterShowMenu ? { display: "none" } : { display: "block" }}
        className="filter-menu-body"
      >
        <ul>
          <li onClick={() => showFilter("Accessible")}>Accessible</li>
          <li onClick={() => showFilter("Benefits")}>Benefits</li>
          <li onClick={() => showFilter("Commute")}>Commute</li>
          <li onClick={() => showFilter("CompanySize")}>Company Size</li>
          <li onClick={() => showFilter("DressCode")}>Dress Code</li>
          <li onClick={() => showFilter("EducationRequired")}>
            Education Required
          </li>
          <li onClick={() => showFilter("EmployeeType")}>Employee Type</li>
          <li onClick={() => showFilter("ExperienceLevel")}>
            Experience Level
          </li>
          <li onClick={() => showFilter("Industry")}>Industry</li>
          <li onClick={() => showFilter("InternalExternal")}>
            Internal or External
          </li>
          <li onClick={() => showFilter("Methodology")}>Methodology</li>
          <li onClick={() => showFilter("Mobile")}>Mobile</li>
          <li onClick={() => showFilter("PetsAllowed")}>Pets Allowed</li>
          <li onClick={() => showFilter("Company")}>Popular Companies</li>
          <li onClick={() => showFilter("SalaryRange")}>Salary Range</li>
          <li onClick={() => showFilter("Skill")}>Skill</li>
          <li onClick={() => showFilter("WorkingFromHome")}>
            Working From Home
          </li>
        </ul>
      </div>
    </>
  )
}

export default FilterMenu
