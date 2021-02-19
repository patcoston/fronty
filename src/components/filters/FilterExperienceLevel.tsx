import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { experience } from "../../data/experience"
import "./FilterExperienceLevel.css"

interface Props {
  showFilter(arg: string): void
}

const FilterExperienceLevel: FC<Props> = ({ showFilter }) => {
  const { filterShowExperienceLevel } = useStore()
  return (
    <>
      <div
        style={
          !filterShowExperienceLevel
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-experience-level-body"
      >
        <label htmlFor="choose-experience-level">Filter on Dress Code</label>
        <select
          id="choose-experience-level"
          className="filter-experience-level-list"
          multiple
          size={3}
        >
          {experience.map(exp => (
            <option value={exp}>{exp}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterExperienceLevel
