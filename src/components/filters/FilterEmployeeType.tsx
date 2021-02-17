import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterEmployeeType: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterEmployeeType
      </div>
    </>
  )
}

export default FilterEmployeeType
