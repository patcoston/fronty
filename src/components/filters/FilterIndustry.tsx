import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterIndustry.css"

interface Props {
  showFilter(arg: string): void
}

const FilterIndustry: FC<Props> = ({ showFilter }) => {
  const { filterShowIndustry } = useStore()
  return (
    <>
      <div
        style={!filterShowIndustry ? { display: "none" } : { display: "block" }}
        className="filter-industry-body"
      >
        Filter Industry
      </div>
    </>
  )
}

export default FilterIndustry
