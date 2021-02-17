import React, { FC } from "react"
import "./FilterSkill.css"

interface Props {
  show: boolean
}

const FilterSkill: FC<Props> = ({ show }) => {
  return (
    <>
      <div
        style={!show ? { display: "none" } : { display: "block" }}
        className="filter-skill-body"
      >
        FilterSkill
      </div>
    </>
  )
}

export default FilterSkill
