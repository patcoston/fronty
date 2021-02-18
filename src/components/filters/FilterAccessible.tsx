import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterAccessible.css"

const FilterAccessible: FC = () => {
  const { filterShowAccessible } = useStore()
  return (
    <>
      <div
        style={
          !filterShowAccessible ? { display: "none" } : { display: "block" }
        }
        className="filter-accessible-body"
      >
        Filter Accessible
      </div>
    </>
  )
}

export default FilterAccessible
