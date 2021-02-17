import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterCompanySize: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        Filter Company Size
      </div>
    </>
  )
}

export default FilterCompanySize
