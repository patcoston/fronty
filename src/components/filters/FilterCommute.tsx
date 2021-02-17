import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterCommute: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        Filter Commute
      </div>
    </>
  )
}

export default FilterCommute
