import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterMethodology: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterMethodology
      </div>
    </>
  )
}

export default FilterMethodology
