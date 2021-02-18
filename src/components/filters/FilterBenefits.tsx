import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterBenefits.css"

const FilterBenefits: FC = () => {
  const { filterShowBenefits } = useStore()
  return (
    <>
      <div
        style={!filterShowBenefits ? { display: "none" } : { display: "block" }}
        className="filter-benefits-body"
      >
        Filter Benefits
      </div>
    </>
  )
}

export default FilterBenefits
