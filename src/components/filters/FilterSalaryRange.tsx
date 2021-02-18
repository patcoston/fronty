import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterSalaryRange.css"

interface Props {
  showFilter(arg: string): void
}

const FilterSalaryRange: FC<Props> = ({ showFilter }) => {
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
