import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterInternalExternal: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterInternalExternal
      </div>
    </>
  )
}

export default FilterInternalExternal
