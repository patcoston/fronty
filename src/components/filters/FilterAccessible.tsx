import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterAccessible: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        Filter Accessible
      </div>
    </>
  )
}

export default FilterAccessible
