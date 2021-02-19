import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { dressCode } from "../../data/dress-code"
import "./FilterDressCode.css"

interface Props {
  showFilter(arg: string): void
}

const FilterDressCode: FC<Props> = ({ showFilter }) => {
  const { filterShowDressCode } = useStore()
  return (
    <>
      <div
        style={
          !filterShowDressCode ? { display: "none" } : { display: "block" }
        }
        className="filter-dress-code-body"
      >
        <label htmlFor="choose-dress-code">Filter on Dress Code</label>
        <select
          id="choose-dress-code"
          className="filter-dress-code-list"
          multiple
          size={6}
        >
          {dressCode.map(dress => (
            <option value={dress}>{dress}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterDressCode
