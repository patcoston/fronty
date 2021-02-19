import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { employeeType } from "../../data/employee-type"
import "./FilterEmployeeType.css"

interface Props {
  showFilter(arg: string): void
}

const FilterEmployeeType: FC<Props> = ({ showFilter }) => {
  const { filterShowEmployeeType } = useStore()
  return (
    <>
      <div
        style={
          !filterShowEmployeeType ? { display: "none" } : { display: "block" }
        }
        className="filter-employee-type-body"
      >
        <label htmlFor="choose-employee-type">Filter on Dress Code</label>
        <select
          id="choose-employee-type"
          className="filter-employee-type-list"
          multiple
          size={9}
        >
          {employeeType.map(employee => (
            <option value={employee}>{employee}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterEmployeeType
