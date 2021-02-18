import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterDressCode.css"

const FilterDressCode: FC = () => {
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
      </div>
    </>
  )
}

export default FilterDressCode
