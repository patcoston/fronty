import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { internalExternal } from "../../data/internal-external"
import "./FilterInternalExternal.css"

interface Props {
  showFilter(arg: string): void
}

const FilterInternalExternal: FC<Props> = ({ showFilter }) => {
  const { filterShowInternalExternal } = useStore()
  return (
    <>
      <div
        style={
          !filterShowInternalExternal
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-internal-external-body"
      >
        <label htmlFor="choose-internal-external">Filter on Dress Code</label>
        <select
          id="choose-internal-external"
          className="filter-internal-external-list"
          multiple
          size={5}
        >
          {internalExternal.map(val => (
            <option value={val}>{val}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterInternalExternal
