import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import SelectSkills from "../SelectSkills"
import "./FilterSkill.css"

interface Props {
  showFilter(arg: string): void
}

const FilterSkill: FC<Props> = ({ showFilter }) => {
  const { filterShowSkill } = useStore()
  return (
    <>
      <div
        style={!filterShowSkill ? { display: "none" } : { display: "block" }}
        className="filter-skill-body"
      >
        <div>
          <label className="filter-skill-type-skill-label">
            Type desired tech to filter list below
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="choose-skill" className="filter-skills-choose-label">
            Choose one or more skills
          </label>
          <SelectSkills />
          <button onClick={() => showFilter("ShowResults")}>
            Submit Filter
          </button>
        </div>
      </div>
    </>
  )
}

export default FilterSkill
