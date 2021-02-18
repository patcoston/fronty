import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
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
        Filter Dress Code
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterDressCode
