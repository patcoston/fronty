import React, { FC } from "react"
import { useStore } from "../../store/StoreProvider"
import { companySize } from "../../data/company-size"
import "./FilterCompanySize.css"

interface Props {
  showFilter(arg: string): void
}

const FilterCompanySize: FC<Props> = ({ showFilter }) => {
  const { filterShowCompanySize } = useStore()
  return (
    <>
      <div
        style={
          !filterShowCompanySize ? { display: "none" } : { display: "block" }
        }
        className="filter-company-size-body"
      >
        <label htmlFor="choose-company-size">Filter on Company Size</label>
        <select
          id="choose-company-size"
          className="filter-company-size-list"
          multiple
          size={9}
        >
          {companySize.map(size => (
            <option value={size}>{size}</option>
          ))}
        </select>
        <button onClick={() => showFilter("ShowResults")}>Submit Filter</button>
      </div>
    </>
  )
}

export default FilterCompanySize
