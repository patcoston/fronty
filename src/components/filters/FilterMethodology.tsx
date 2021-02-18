import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterMethodology.css"

const FilterMethodology: FC = () => {
  const { filterShowMethodology } = useStore()
  return (
    <>
      <div
        style={
          !filterShowMethodology ? { display: "none" } : { display: "block" }
        }
        className="filter-methodology-body"
      >
        Filter Methodology
      </div>
    </>
  )
}

export default FilterMethodology
