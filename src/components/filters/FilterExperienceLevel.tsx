import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterExperienceLevel: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterExperienceLevel
      </div>
    </>
  )
}

export default FilterExperienceLevel
