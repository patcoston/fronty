import React, { FC } from "react"
import "./FilterChoose.css"

interface Props {
  showFilter(arg: string): void
  show: boolean
  list: Array<string>
  label: string
}

const FilterMobile: FC<Props> = ({ showFilter, show, list, label }) => {
  return (
    <>
      <div
        style={!show ? { display: "none" } : { display: "block" }}
        className="filter-choose-body"
      >
        <label htmlFor="filter-choose">Filter on ${label}</label>
        <select
          id="filter-choose"
          className="filter-choose-list"
          multiple
          size={list.length}
        >
          {list.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Add Filter</button>
      </div>
    </>
  )
}

export default FilterMobile
