import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
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
        Filter Employee Type
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterEmployeeType
