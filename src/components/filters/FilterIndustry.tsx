import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
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
        Filter Industry
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterIndustry
