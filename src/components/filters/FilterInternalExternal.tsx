import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterInternalExternal.css"

const FilterInternalExternal: FC = () => {
  const { filterShowInternalExternal } = useStore()
  return (
    <>
      <div
        style={
          !filterShowInternalExternal
            ? { display: "none" }
            : { display: "block" }
        }
        className="filter-internal-external-body"
      >
        Filter Internal External
      </div>
    </>
  )
}

export default FilterInternalExternal
