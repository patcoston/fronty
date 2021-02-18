import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import "./FilterBenefits.css"

interface Props {
  showFilter(arg: string): void
}

const FilterBenefits: FC<Props> = ({ showFilter }) => {
  const { filterShowBenefits } = useStore()
  return (
    <>
      <div
        style={!filterShowBenefits ? { display: "none" } : { display: "block" }}
        className="filter-benefits-body"
      >
        Filter Benefits
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterBenefits
