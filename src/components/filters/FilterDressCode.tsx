import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterDressCode: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterDressCode
      </div>
    </>
  )
}

export default FilterDressCode
