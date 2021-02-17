import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterPetsAllowed: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterPetsAllowed
      </div>
    </>
  )
}

export default FilterPetsAllowed
