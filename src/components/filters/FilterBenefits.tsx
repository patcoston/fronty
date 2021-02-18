import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"

const FilterBenefits: FC = () => {
  const { filterShowBenefits } = useStore()
  return (
    <>
      <div
        style={!filterShowBenefits ? { display: "none" } : { display: "block" }}
      >
        Filter Benefits
      </div>
    </>
  )
}

export default FilterBenefits
