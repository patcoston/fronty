import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterAccessible: FC = () => {
  const { filterShowAccessible } = useStore()
  return (
    <>
      <div
        style={
          !filterShowAccessible ? { display: "none" } : { display: "block" }
        }
      >
        Filter Accessible
      </div>
    </>
  )
}

export default FilterAccessible
