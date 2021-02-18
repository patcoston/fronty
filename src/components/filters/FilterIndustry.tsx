import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterIndustry: FC = () => {
  const { filterShowIndustry } = useStore()
  return (
    <>
      <div
        style={!filterShowIndustry ? { display: "none" } : { display: "block" }}
      >
        Filter Industry
      </div>
    </>
  )
}

export default FilterIndustry
