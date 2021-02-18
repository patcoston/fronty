import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
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
        Filter Education Required
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterEducationRequired
