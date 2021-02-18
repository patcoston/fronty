import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterSkill.css"

const FilterSkill: FC = () => {
  const { filterShowSkill } = useStore()
  return (
    <>
      <div
        style={!filterShowSkill ? { display: "none" } : { display: "block" }}
        className="filter-skill-body"
      >
        Filter Skill
      </div>
    </>
  )
}

export default FilterSkill
