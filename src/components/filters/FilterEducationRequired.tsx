import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterEducationRequired: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterEducationRequired
      </div>
    </>
  )
}

export default FilterEducationRequired
