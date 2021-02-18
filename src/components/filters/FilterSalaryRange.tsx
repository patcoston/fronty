import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterSalaryRange.css"

const FilterSalaryRange: FC = () => {
  const { filterShowSalaryRange } = useStore()
  return (
    <>
      <div
        style={
          !filterShowSalaryRange ? { display: "none" } : { display: "block" }
        }
        className="filter-salary-range-body"
      >
        Filter Salary Range
      </div>
    </>
  )
}

export default FilterSalaryRange
