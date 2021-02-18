import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterAccessible.css"

interface Props {
  showFilter(arg: string): void
}

const FilterAccessible: FC<Props> = ({ showFilter }) => {
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
