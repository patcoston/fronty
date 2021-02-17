import React, { FC } from "react"

interface Props {
  show: boolean
}

const FilterWorkingFromHome: FC<Props> = ({ show }) => {
  return (
    <>
      <div style={!show ? { display: "none" } : { display: "block" }}>
        FilterWorkingFromHome
      </div>
    </>
  )
}

export default FilterWorkingFromHome
