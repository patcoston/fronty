import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterMobile: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterMobile
      </div>
    </>
  )
}

export default FilterMobile
