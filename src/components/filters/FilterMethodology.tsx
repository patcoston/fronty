import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterMethodology.css"

interface Props {
  showFilter(arg: string): void
}

const FilterMethodology: FC<Props> = ({ showFilter }) => {
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
