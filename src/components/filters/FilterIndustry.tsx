import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterIndustry: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterIndustry
      </div>
    </>
  )
}

export default FilterIndustry
