import React, { FC } from "react"
import "./FilterSkill.css"

interface Props {
  show: boolean
}

const FilterSkill: FC<Props> = ({ show }) => {
  return (
    <>
      <div className="filter-skill-body">FilterSkill</div>
    </>
  )
}

export default FilterSkill
