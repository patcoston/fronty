import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterInternalExternal.css"

interface Props {
  showFilter(arg: string): void
}

const FilterInternalExternal: FC<Props> = ({ showFilter }) => {
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
