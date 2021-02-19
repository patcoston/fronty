import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { industry } from "../../data/industry"
import "./FilterIndustry.css"

interface Props {
  showFilter(arg: string): void
}

const FilterIndustry: FC<Props> = ({ showFilter }) => {
  const { filterShowIndustry } = useStore()
  return (
    <>
      <div
        style={!filterShowIndustry ? { display: "none" } : { display: "block" }}
        className="filter-industry-body"
      >
        <label htmlFor="choose-industry">Filter on Industry</label>
        <select
          id="choose-industry"
          className="filter-industry-list"
          multiple
          size={6}
        >
          {industry.map(ind => (
            <option value={ind}>{ind}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterIndustry
