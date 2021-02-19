import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { education } from "../../data/education"
import "./FilterEducationRequired.css"

interface Props {
  showFilter(arg: string): void
}

const FilterEducationRequired: FC<Props> = ({ showFilter }) => {
  const { filterShowEducationRequired } = useStore()
  return (
    <>
      <div
        style={
          !filterShowEducationRequired
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-education-required-body"
      >
        <label htmlFor="choose-education-required">
          Filter on Education Requied
        </label>
        <select
          id="choose-education-required"
          className="filter-education-required-list"
          multiple
          size={9}
        >
          {education.map(ed => (
            <option value={ed}>{ed}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterEducationRequired
