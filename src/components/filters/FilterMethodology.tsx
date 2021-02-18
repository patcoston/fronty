import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterMethodology: FC = () => {
  const { filterShowMethodology } = useStore()
  return (
    <>
      <div
        style={
          !filterShowMethodology ? { display: "none" } : { display: "block" }
        }
      >
        Filter Methodology
      </div>
    </>
  )
}

export default FilterMethodology
