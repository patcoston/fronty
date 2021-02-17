import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterBenefits: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        Filter Benefits
      </div>
    </>
  )
}

export default FilterBenefits
