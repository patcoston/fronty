import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { mobile } from "../../data/mobile"
import "./FilterMobile.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMobile: FC<Props> = ({ showFilter }) => {
  const { filterShowMobile } = useStore()
  return (
    <>
      <div
        style={!filterShowMobile ? { display: "none" } : { display: "block" }}
        className="filter-mobile-body"
      >
        <label htmlFor="choose-mobile">Filter on Mobile</label>
        <select
          id="choose-mobile"
          className="filter-mobile-list"
          multiple
          size={4}
        >
          {mobile.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterMobile
