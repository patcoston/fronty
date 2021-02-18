import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterEmployeeType.css"

const FilterEmployeeType: FC = () => {
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
      </div>
    </>
  )
}

export default FilterEmployeeType
