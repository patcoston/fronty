import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { accessibility } from "../../data/accessibility"
import "./FilterAccessible.css"

interface Props {
  showFilter(arg: string): void
}

const FilterAccessible: FC<Props> = ({ showFilter }) => {
  const { filterShowAccessible } = useStore()
  return (
    <>
      <div
        style={
          !filterShowAccessible ? { display: "none" } : { display: "block" }
        }
        className="filter-accessible-body"
      >
        <label htmlFor="choose-accessibility">Filter on Accessibility</label>
        <select
          id="choose-accessibility"
          className="filter-skill-list"
          multiple
          size={9}
        >
          {accessibility.map(access => (
            <option value={access}>{access}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterAccessible
