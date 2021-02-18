import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterSalaryRange: FC = () => {
  const { filterShowSalaryRange } = useStore()
  return (
    <>
      <div
        style={
          !filterShowSalaryRange ? { display: "none" } : { display: "block" }
        }
      >
        Filter Salary Range
      </div>
    </>
  )
}

export default FilterSalaryRange
