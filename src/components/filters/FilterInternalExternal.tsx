import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

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
      >
        Filter Internal External
      </div>
    </>
  )
}

export default FilterInternalExternal
