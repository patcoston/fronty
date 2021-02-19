import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { benefits } from "../../data/benefits"
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
        <label htmlFor="choose-benefits">Filter on Benefits</label>
        <select
          id="choose-benefits"
          className="filter-benefit-list"
          multiple
          size={9}
        >
          {benefits.map(benefit => (
            <option value="{benefit}">{benefit}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterBenefits
