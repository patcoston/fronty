import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterCommute.css"

interface Props {
  showFilter(arg: string): void
}

const FilterCommute: FC<Props> = ({ showFilter }) => {
  const { filterShowCommute } = useStore()
  return (
    <>
      <div
        style={!filterShowCommute ? { display: "none" } : { display: "block" }}
        className="filter-commute-body"
      >
        Filter Commute
      </div>
    </>
  )
}

export default FilterCommute
