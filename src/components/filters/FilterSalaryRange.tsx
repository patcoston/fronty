import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterSalaryRange: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterSalaryRange
      </div>
    </>
  )
}

export default FilterSalaryRange
