import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterCommute: FC = () => {
  const { filterShowCommute } = useStore()
  return (
    <>
      <div
        style={!filterShowCommute ? { display: "none" } : { display: "block" }}
      >
        Filter Commute
      </div>
    </>
  )
}

export default FilterCommute
