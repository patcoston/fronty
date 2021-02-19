import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { methodology } from "../../data/methodology"
import "./FilterMethodology.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMethodology: FC<Props> = ({ showFilter }) => {
  const { filterShowMethodology } = useStore()
  return (
    <>
      <div
        style={
          !filterShowMethodology ? { display: "none" } : { display: "block" }
        }
        className="filter-methodology-body"
      >
        <label htmlFor="choose-methodology">Filter on Methodology</label>
        <select
          id="choose-methodology"
          className="filter-methodology-list"
          multiple
          size={7}
        >
          {methodology.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterMethodology
