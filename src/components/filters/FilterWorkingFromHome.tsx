import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { percentWfh } from "../../data/working-from-home"
import "./FilterWorkingFromHome.css"

interface Props {
  showFilter(arg: string): void
}

const FilterWorkingFromHome: FC<Props> = ({ showFilter }) => {
  const { filterShowWorkingFromHome } = useStore()
  return (
    <>
      <div
        style={
          !filterShowWorkingFromHome
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-working-from-home-body"
      >
        <div>
          <label htmlFor="selectWFH" className="wfh-label">
            Working From Home
          </label>
          <select
            id="selectWFH"
            className="percent-working-from-home"
            size={11}
          >
            {percentWfh.map(percent => (
              <option value="{percent}">{percent}</option>
            ))}
          </select>
        </div>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterWorkingFromHome
